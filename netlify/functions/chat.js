const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const DAILY_LIMIT = 20; // match whatever CHAT_DAILY_LIMIT is in your frontend

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      statusCode: 401,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ reply: "please log in first 🐸" })
    };
  }

  const token = authHeader.replace('Bearer ', '');
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } }
  });

  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return {
      statusCode: 401,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ reply: "session expired — please log in again 🐸" })
    };
  }

  // --- SERVER-SIDE RATE LIMIT CHECK ---
  const today = new Date().toISOString().slice(0, 10);

  const { data: usageRow } = await supabase
    .from("chat_usage")
    .select("message_count")
    .eq("user_id", user.id)
    .eq("usage_date", today)
    .maybeSingle();

  const currentCount = usageRow ? usageRow.message_count : 0;

  if (currentCount >= DAILY_LIMIT) {
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ reply: "you've hit today's chat limit — come back tomorrow 🐸" })
    };
  }
  // --- END RATE LIMIT CHECK ---

  try {
    const { messages, system } = JSON.parse(event.body);
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ reply: "holaaa api key missing 🐸" }) };
    }

    const groqMessages = [];
    if (system) groqMessages.push({ role: 'system', content: system });
    messages.forEach(m => groqMessages.push({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content }));

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: groqMessages,
        max_tokens: 300,
        temperature: 0.85,
      })
    });

    const data = await response.json();

    if (data.error) {
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ reply: "holaaa something broke: " + data.error.message })
      };
    }

    const text = data.choices?.[0]?.message?.content || "holaaa sorry something went wrong, try again 🐸";

    // increment usage only after a successful reply
    await supabase.from("chat_usage").upsert({
      user_id: user.id,
      usage_date: today,
      message_count: currentCount + 1
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ reply: text })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "holaaa connection error: " + err.message })
    };
  }
};
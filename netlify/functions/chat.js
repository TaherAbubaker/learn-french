exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

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
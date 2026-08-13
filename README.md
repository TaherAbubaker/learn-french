# French Study Hub 🐸

A full-stack French learning app — flashcards, a searchable dictionary, smart notes, quizzes, a focus-timer study room, and an AI tutor, all backed by a real authenticated Supabase backend.

**Live app:** [learnfrench1.netlify.app](https://learnfrench1.netlify.app)

## Features

- 🃏 **Flashcards** — categorized vocab decks with flip-to-reveal translations and spaced practice
- 📝 **Smart Notes** — free-form notebook with auto-detected French/English word translations
- 📖 **Dictionary** — instant French ↔ English search
- 🎯 **Quiz mode** — self-testing with score tracking
- 🌿 **Study Room** — a cozy focus-timer environment with ambient rain and background music
- 🤖 **AI Tutor** — chat with an AI French tutor (Groq / Llama 3.3), rate-limited per user
- 🔐 **Full authentication** — signup, login, logout, and password reset via Supabase Auth
- ⭐ **XP & leveling system** — persisted per user, not just local to one browser

## Tech stack

| Layer | Tech |
|---|---|
| Frontend | Vanilla HTML/CSS/JavaScript |
| Backend / Database | [Supabase](https://supabase.com) (Postgres + Auth + Row Level Security) |
| AI | [Groq](https://groq.com) (Llama 3.3 70B) via a secured Netlify serverless function |
| Hosting | [Netlify](https://netlify.com) |

## Security

- **Row Level Security (RLS)** on every table — each user can only ever read/write their own XP and notes, enforced at the database level, not just hidden in the UI
- **Server-side auth verification** on the AI chat endpoint — every request is validated against a real Supabase session before it's allowed to reach the AI provider, preventing anonymous abuse
- **Server-side rate limiting** on chat usage, tracked per user per day in the database — not just a client-side counter that can be bypassed
- **No secrets in the client** — the AI provider's API key lives only in Netlify's serverless environment, never exposed to the browser

## Running locally

1. Clone the repo:
   ```bash
   git clone https://github.com/TaherAbubaker/learn-french.git
   cd learn-french
   ```

2. Install dependencies (for the serverless function):
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:
   ```
   GROQ_API_KEY=your_groq_api_key
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run with the Netlify CLI (required for the AI tutor function to work locally):
   ```bash
   netlify dev
   ```

5. Open the local URL shown in the terminal (usually `http://localhost:8888`).

## Database setup

The full schema (tables, RLS policies, and the auto-profile-creation trigger) is in [`schema.sql`](./schema.sql). Run it in your Supabase project's SQL Editor before first use.

## Author

Built by **Taher Abubaker** — [GitHub](https://github.com/TaherAbubaker) · [LinkedIn](https://linkedin.com/in/taabubaker)

## License

This project is available for reference and learning purposes. Feel free to fork it for your own study tools.

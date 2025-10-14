// listModels.js
import "dotenv/config"; // ✅ this line loads your .env file automatically
import fetch from "node-fetch";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ Missing GEMINI_API_KEY in .env file");
  process.exit(1);
}

const url = "https://generativelanguage.googleapis.com/v1beta/models";

(async () => {
  try {
    const res = await fetch(`${url}?key=${API_KEY}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
    const data = await res.json();

    console.log("\n✅ Available Gemini Models:");
    data.models.forEach((m) => console.log("-", m.name));
  } catch (err) {
    console.error("❌ Error listing models:", err.message);
  }
})();

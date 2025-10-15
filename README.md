# 🤖 Sensai – AI Career Copilot

**Sensai** is an AI-powered career assistant that helps users **generate resumes, cover letters, and prepare for interviews** using advanced AI models like **Gemini / OpenAI**.  
Built with **Next.js 14 App Router**, it combines powerful backend features, sleek UI, and secure authentication to offer a seamless full-stack experience.

---

## 🚀 Features

- 🔐 **Secure Authentication** – powered by [Clerk](https://clerk.com)
- 🧠 **AI Resume & Cover Letter Generation** using Gemini API
- 🎯 **AI Interview Preparation** – quizzes and skill feedback
- 💾 **Database Integration** with Prisma + PostgreSQL (Neon DB)
- 📊 **Personalized Dashboard** – view generated content and analytics
- 🎨 **Modern UI** with TailwindCSS & Framer Motion animations
- ☁️ **Deployed on Vercel** – globally fast and serverless

---

## 🧠 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | Next.js 14 (App Router), React.js |
| **Styling** | TailwindCSS, Framer Motion |
| **Auth** | Clerk (Sign In, Sign Up, Session Management) |
| **Database** | PostgreSQL (Neon Cloud) |
| **ORM** | Prisma |
| **AI Integration** | Google Gemini API / OpenAI |
| **Deployment** | Vercel |
| **Tools** | VS Code, Git, Postman |

---

## ⚙️ Working Explanation

**Sensai** follows a seamless full-stack architecture using **Next.js App Router** where the frontend, backend, and API routes coexist within one project.  
It integrates **AI models, authentication, and database** to deliver a complete intelligent career platform.

1. **User Authentication:**  
   - Managed by Clerk for secure sign-in/sign-up and session control.  
   - After login, users are redirected to the onboarding flow.

2. **Onboarding & Profile Setup:**  
   - Users provide background details like name, goals, and experience.  
   - Data is stored in **PostgreSQL** using **Prisma ORM**.

3. **Dashboard:**  
   - Displays AI-generated resumes, cover letters, and interview analytics.  
   - Offers real-time content and user insights.

4. **AI Resume & Cover Letter Generator:**  
   - Uses **Gemini/OpenAI API** to generate professional documents.  
   - Prompts are dynamically sent from the UI to the backend.  
   - Results are saved in the database and shown in the dashboard.

5. **Interview Preparation Module:**  
   - Generates mock questions and analyzes user answers.  
   - Provides feedback and improvement tips using AI.

6. **Database & Backend Logic:**  
   - All data is managed through **Prisma** and stored in **Neon PostgreSQL**.  
   - Next.js **server actions** handle AI API calls and CRUD operations.

7. **Frontend UI:**  
   - Developed using **React + TailwindCSS + Framer Motion** for responsiveness and animation.  
   - Offers a clean, minimal, and professional user interface.

8. **Deployment:**  
   - Fully deployed on **Vercel** for a fast and scalable serverless experience.  
   - Environment variables manage keys for Clerk, Gemini, and Database securely.

---

## 🧩 Project Flow

1. User visits **Sensai** and signs in using Clerk Auth.  
2. The system redirects to onboarding → collects user information.  
3. User accesses dashboard → generates AI-based resumes or cover letters.  
4. AI (Gemini API) processes prompts → returns generated text.  
5. Data is stored in **PostgreSQL** and displayed instantly on the dashboard.  
6. Users can practice interview questions → receive real-time AI feedback.  
7. All components are styled and animated for a modern, smooth experience.

---

## 🧾 Summary

**Sensai** combines the power of **Next.js**, **AI**, and **Clerk Auth** to build a futuristic career platform.  
It provides users with personalized career content, intelligent feedback, and professional tools — all within a single full-stack application.

---

## 👨‍💻 Author

**Aman Kumar**  
🎓 B.Tech CSE | Galgotias University  
📍 Noida, Uttar Pradesh, India  
📧 [sammar4568@gmail.com](mailto:sammar4568@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/aman-kumar-57966321a/) • [GitHub](https://github.com/Aman01kumar) • [LeetCode](https://leetcode.com/u/amankumar4568/)

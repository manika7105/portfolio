# 🌐 Manika Goel — Personal Portfolio

My personal portfolio website — a fast, animated, dark/light-mode space where I showcase who I am, what I've built, and what I'm learning next. Built from scratch with Next.js, TypeScript, and Tailwind CSS, and layered with Framer Motion animations, 3D hover interactions, and a real working contact form.

This project reflects both sides of me — the engineer who cares about clean, production-quality code, and the karateka who believes discipline and consistency are what actually ship things.

---

## ✨ Features

* 🎬 **Animated Hero:** A canvas particle constellation that drifts across the entire site, with cursor-reactive glow and floating gradient orbs.
* 🌗 **Dark & Light Mode:** A fully custom-designed theme toggle — not just inverted colors, but two distinct, considered palettes.
* 🧩 **Interactive Skill Tags:** Hover or tap any skill or project technology for a quick explanation of what it is and why I used it.
* 🃏 **3D Tilt Cards:** Skills, certifications, and achievement cards subtly tilt and glow toward your cursor.
* 🔄 **Flip-Card Certifications:** Hover a certificate to flip it — front shows the details, back shows the real certificate image, with a fullscreen lightbox view on click.
* 🥋 **Achievements Gallery:** A dedicated, animated showcase for my karate black belt journey — photos, certificate, and story.
* 📈 **Animated Timelines:** Scroll-triggered, connecting-line timelines for my Education and Experience.
* 📊 **Count-Up Stats:** CGPA, projects, internships, and certifications animate into view as you scroll.
* 📬 **Real Contact Form:** Fully validated (React Hook Form + Zod) and wired to actually send emails via Resend — not just a mailto link.
* 📱 **Fully Responsive:** Built mobile-first, tested down to small phone screens.
* ♿ **Accessible:** Respects prefers-reduced-motion, keyboard focus states throughout, and semantic HTML.
* 🔍 **SEO Ready:** Dynamic metadata, sitemap, robots.txt, and Open Graph tags out of the box.

---

## 🛠️ Technologies Used

* ⚛️ **Next.js 15 (App Router) –** React framework with file-based routing
* 🔷 **TypeScript –** Type-safe code across the entire project
* 🎨 **Tailwind CSS v4 –** Utility-first styling with custom design tokens
*🎞️ **Framer Motion –** Scroll reveals, hover physics, and page transitions
*🖌️ **Lucide React –** Icon library
*📧 **Resend –** Transactional email for the contact form
*📋 **React Hook Form + Zod –** Form state and validation
*🧵 **Custom Canvas API –** Hand-built particle constellation background (no external library)

---

## 📄 Sections

* 🏠 **Hero —** name, rotating role titles, resume download
* 👋 **About —** bio, animated stat counters, profile photo
* 🧠 **Skills —** grouped, interactive tech tags
* 💻 **Projects —** Disease Prediction System, BookVerse, Responsive Registration Form
* 💼 **Experience —** Prodesk IT, CodSoft, animated timeline
* 🎓 **Education —** Shobhit Institute + school history, animated timeline
* 📜 **Certifications —** 12 certifications, flip-to-reveal, fullscreen view
* 🥋 **Achievements —** Black Belt (1st Dan), National-Level Karate Representative
* 📬 **Contact —** real, working email form

---

## 🚀 Setup and Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/manika7105/portfolio.git
```

### 2️⃣ Navigate to Project Directory
```bash
cd portfolio
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Set Up Environment Variables
```bash
cp .env.example .env.local
```
Then add a free API key from resend.com to enable the contact form:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

### 5️⃣ Run the Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to view it locally.

---

## 🧾 How to Edit

* ✍️ All text content (bio, skills, projects, experience, education, certifications, achievements) lives in one file: src/lib/data.ts — update it and the whole site reflects the change.
* 🖼️ Images live in public/images/ — swap a file (keeping the same name) to update a photo instantly.
* 🎨 Colors and fonts are defined as CSS variables in src/app/globals.css.

---

## ☁️ Deployment

Deployed on Vercel, connected directly to this GitHub repository. Every push to main triggers an automatic rebuild and redeploy.  
🔗 Live site: [add your Vercel URL here]

---

## 🔮 Future Improvements

* 🌍 Custom domain name
* ✍️ A blog/writing section
* 🖼️ Dedicated case-study pages for each project
* 🌐 Multi-language support
* 📊 Visitor analytics dashboard

---

## 👩‍💻 Author

**Manika Goel** 

* 🐙 GitHub: https://github.com/manika7105
* 💼 LinkedIn: https://www.linkedin.com/in/manika-goel-92201a286
* 📧 Email: goelmanika07@gmail.com

---

⭐ If you liked this portfolio or found the code useful, consider giving it a star on GitHub!

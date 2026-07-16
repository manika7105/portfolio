import type {
  SkillGroup,
  Project,
  ExperienceItem,
  EducationItem,
  Certification,
  Achievement,
  AchievementPhoto,
  SocialLink,
} from "@/types";

export const profile = {
  name: "Manika Goel",
  initials: "MG",
  roles: ["Python Developer", "Web Developer", "ML Enthusiast"],
  location: "Muzaffarnagar, Uttar Pradesh, India",
  email: "goelmanika07@gmail.com",
  phone: "+91 8445836110",
  bio: [
    "I'm a Computer Science Engineering student at Shobhit Institute of Engineering and Technology, Meerut, driven by curiosity and a passion for building practical software that solves real-world problems.",
    "I enjoy turning ideas into responsive web applications while continuously expanding my skills through hands-on projects. My current interests include web development, data structures & algorithms, and applied machine learning.",
    "I believe the best way to learn is by building. Every project begins with curiosity and ends with new lessons—whether it's writing cleaner code, solving unexpected problems, or discovering a better way to approach a challenge. That mindset keeps me learning, improving, and excited for what's next.",
  ],
  resumeUrl: "/resume/manika-goel-resume.pdf",
  photo: "/images/pp.jpg",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/manika7105", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manika-goel-92201a286/",
    icon: "linkedin",
  },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: "phone" },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "C", "JavaScript"],
  },
  {
    category: "Web",
    items: ["HTML5", "CSS3", "Responsive / Mobile-first UI"],
  },
  {
    category: "Data & ML",
    items: ["Scikit-Learn", "Pandas", "NumPy", "Streamlit"],
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "Git & GitHub"],
  },
];

export const projects: Project[] = [
  {
    slug: "disease-prediction-system",
    name: "Disease Prediction System",
    description:
      "A machine learning-powered web application that predicts diseases from symptom inputs using multiple classification models. Designed with an interactive Streamlit interface, it enables model evaluation, performance comparison, and reliable predictions through ensemble voting.",
    tech: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/manika7105/Disease-Prediction-System",
    features: [
      "Built disease prediction models with Decision Tree, Random Forest, Naive Bayes, KNN, and Ensemble Voting.",
      "Compared model performance using standard classification metrics.",
      "Created a Streamlit dashboard for real-time disease prediction.",
    ],
    image: "/images/project-disease-prediction.png",
    featured: true,
  },
  {
    slug: "bookverse",
    name: "BookVerse — Online Book Store",
    description:
      "A fully responsive front-end bookstore website designed to deliver a modern and engaging browsing experience with interactive UI components, smooth animations, and seamless navigation across all devices.",
    tech: ["HTML", "CSS", "JavaScript", "Swiper.js", "ScrollReveal.js"],
    githubUrl: "https://github.com/manika7105/BookVerse",
    features: [
      "Built a responsive, mobile-first UI with dark/light mode and smooth scrolling.",
      "Integrated Swiper.js and ScrollReveal.js for interactive sliders and animations.",
      "Implemented client-side form validation for a better user experience.",
    ],
    image: "/images/project-bookverse.png",
    featured: true,
  },
  {
    slug: "responsive-registration-form",
    name: "Responsive Registration Form",
    description:
      "A responsive full-stack registration system that streamlines user registration through real-time validation, asynchronous form submission, and seamless PHP–MySQL integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Fetch API"],
    githubUrl: "https://github.com/manika7105/Responsive-Registration-form",
    features: [
      "Combined JavaScript validation with PHP backend and MySQL database integration.",
      "Implemented Fetch API–based asynchronous form submission.",
      "Designed a responsive UI with real-time validation.",
    ],
    image: "/images/project-registration-form.png",
    featured: true,
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Prodesk IT and Engineering Services",
    role: "Front-End Development Intern",
    location: "Remote",
    start: "June 2025",
    end: "July 2025",
    bullets: [
      "Built reusable front-end components using HTML, CSS, and JavaScript.",
      "Resolved UI bugs and improved code quality for consistent user experiences.",
      "Collaborated with the development team to deliver responsive web features.",
    ],
  },
  {
    company: "CodSoft",
    role: "Python Programming Intern",
    location: "Remote",
    start: "February 2025",
    end: "March 2025",
    bullets: [
      "Developed 5+ Python applications, including a To-Do List, Calculator, Password Generator, and Contact Book.",
      "Implemented functions, loops, data structures, and exception handling.",
      "Built modular, console-based applications using structured programming principles.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Shobhit Institute of Engineering and Technology",
    location: "Meerut, Uttar Pradesh",
    degree: "B.Tech — Computer Science and Engineering",
    start: "Aug 2023",
    end: "May 2027",
    score: "CGPA 7.19",
    ongoing: true,
  },
  {
    institution: "Holy Angels' Convent School",
    location: "Muzaffarnagar, Uttar Pradesh",
    degree: "Senior Secondary (Class XII), CBSE",
    start: "Apr 2022",
    end: "Feb 2023",
    score: "60%",
  },
  {
    institution: "Holy Angels' Convent School",
    location: "Muzaffarnagar, Uttar Pradesh",
    degree: "Secondary (Class X), CBSE",
    start: "Apr 2020",
    end: "Feb 2021",
    score: "74%",
  },
];

export const certifications: Certification[] = [
  {
    name: "Google AI Essentials",
    issuer: "Google, via Coursera",
    date: "Jul 2024",
    image: "/images/certifications/google-ai-essentials.png",
  },
  {
    name: "Foundations of Cybersecurity",
    issuer: "Google, via Coursera",
    date: "Jun 2024",
    image: "/images/certifications/foundations-of-cybersecurity.png",
  },
  {
    name: "Play It Safe: Manage Security Risks",
    issuer: "Google, via Coursera",
    date: "Jun 2024",
    image: "/images/certifications/play-it-safe-manage-security-risks.png",
  },
  {
    name: "Deloitte Australia — Technology Job Simulation",
    issuer: "Forage (Deloitte)",
    date: "Jul 2025",
    image: "/images/certifications/deloitte-tech-job-simulation.png",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic Education",
    date: "Jun 2026",
    image: "/images/certifications/claude-101.png",
  },
  {
    name: "Claude Code 101",
    issuer: "Anthropic Education",
    date: "Jun 2026",
    image: "/images/certifications/claude-code-101.png",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic Education",
    date: "Jun 2026",
    image: "/images/certifications/introduction-to-mcp.png",
  },
  {
    name: "Introduction to MCP: Advanced Topics",
    issuer: "Anthropic Education",
    date: "Jun 2026",
    image: "/images/certifications/mcp-advanced-topics.png",
  },
  {
    name: "Python Fundamentals for Beginners",
    issuer: "Great Learning",
    date: "May 2024",
    image: "/images/certifications/python-fundamentals.png",
  },
  {
    name: "SU Coder Hunt I",
    issuer: "Shobhit Institute of Engineering and Technology",
    date: "August 2024",
    image: "/images/certifications/su-coder-hunt-1.png",
  },
  {
    name: "Typing Tycoon",
    issuer: "Shobhit Institute of Engineering and Technology",
    date: "March 2025",
    image: "/images/certifications/typing-tycoon.png",
  },
  {
    name: "SU Coder Hunt II",
    issuer: "Shobhit Institute of Engineering and Technology",
    date: "March 2025",
    image: "/images/certifications/su-coder-hunt-2.png",
  },
];

export const achievement: Achievement = {
  title: "Black Belt (1st Dan)",
  tag: "National-Level Karate Athlete",
  description:
    "An eleven-year journey from beginner to Black Belt (1st Dan), competing at district, state, and national-level championships. Years of dedicated training taught me resilience, patience, and the value of consistent effort—qualities that continue to shape the way I approach challenges, both in technology and in life.",
};

export const achievementPhotos: AchievementPhoto[] = [
  {
    src: "/images/achievements/karate-gi-belt.jpg",
    alt: "Manika Goel in her karate gi wearing her black belt",
    caption: "In the dojo — gi and black belt",
    aspect: "4/5",
  },
  {
    src: "/images/achievements/belt-certificate.jpg",
    alt: "Manika Goel's black belt alongside her official rank certificate",
    caption: "Black belt & official rank certificate",
    aspect: "4/3",
  },
  {
    src: "/images/achievements/receiving-belt.jpg",
    alt: "Manika Goel receiving her black belt",
    caption: "Receiving her black belt",
    aspect: "4/6",
  },
];

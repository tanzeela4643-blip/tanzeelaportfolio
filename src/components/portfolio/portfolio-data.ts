import smartFridge from "@/assets/projects/smart-fridge.webp";
import smartPantry from "@/assets/projects/smart-pantry.webp";
import carPrice from "@/assets/projects/car-price.webp";
import studyNotes from "@/assets/projects/study-notes.webp";
import luxora from "@/assets/projects/luxora.webp";
import dreamweave from "@/assets/projects/dreamweave.webp";
import chatbot from "@/assets/projects/chatbot.webp";
import sentiment from "@/assets/projects/sentiment.webp";

export type ProjectCategory = "All" | "Data Science" | "AI/ML" | "Python" | "Web Development";

export type Project = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  categories: ProjectCategory[];
  live?: string;
  github?: string;
  features?: string[];
};

export const projects: Project[] = [
  {
    title: "Smart Fridge AI",
    description: "An AI-powered smart kitchen assistant that analyzes food ingredients, suggests personalized recipes, provides step-by-step cooking instructions, generates final-dish visualizations and delivers nutrition insights such as protein, carbohydrates and health information.",
    image: smartFridge,
    alt: "AI-enabled smart refrigerator filled with fresh ingredients",
    tags: ["AI", "Generative AI", "Image Analysis", "Web Development"],
    categories: ["AI/ML", "Web Development"],
    live: "https://easy-fridge-cook.lovable.app/",
  },
  {
    title: "SmartPantry AI",
    description: "An intelligent pantry management application that recognizes ingredients, generates recipes, provides cooking assistance, tracks food expiry, delivers nutrition insights and helps users manage shopping more efficiently.",
    image: smartPantry,
    alt: "Smart pantry shelves with computer vision ingredient recognition",
    tags: ["AI", "Computer Vision", "Generative AI", "Web Development"],
    categories: ["AI/ML", "Web Development"],
  },
  {
    title: "Car Price Prediction",
    description: "A machine learning project that predicts used car prices using data cleaning, exploratory data analysis, feature engineering and regression models.",
    image: carPrice,
    alt: "Car surrounded by regression charts and analytics visualizations",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    categories: ["Data Science", "AI/ML", "Python"],
  },
  {
    title: "Study Smarter — AI Notes",
    description: "A modern AI-focused study application designed to help students organize notes and improve their learning experience through an interactive digital interface.",
    image: studyNotes,
    alt: "Digital study notebook with an AI knowledge network",
    tags: ["AI", "React", "Web Development", "UI/UX"],
    categories: ["AI/ML", "Web Development"],
    live: "https://notes-ninja-central.lovable.app/notes",
  },
  {
    title: "Luxora — Luxury Fashion",
    description: "A premium luxury fashion website concept featuring elegant visual design, modern product presentation and a high-end digital shopping experience.",
    image: luxora,
    alt: "Luxury couture dress displayed in a modern fashion showroom",
    tags: ["Web Development", "UI/UX", "Responsive Design", "AI-Assisted Development"],
    categories: ["Web Development"],
    live: "https://luxora-luxury-fashion-haute-couture.ai.studio/",
  },
  {
    title: "DreamWeave Voyages",
    description: "A modern travel website concept designed to create an immersive and visually engaging travel experience with a polished responsive interface.",
    image: dreamweave,
    alt: "Alpine lake landscape with a modern travel planning interface",
    tags: ["React", "Web Development", "UI/UX", "Responsive Design"],
    categories: ["Web Development"],
    live: "https://dreamweave-voyages.lovable.app/",
  },
  {
    title: "AI Chatbot Web Application",
    description: "A responsive AI chatbot web application featuring a modern chat interface, user messages, chatbot responses, typing/loading animation and Python backend integration.",
    image: chatbot,
    alt: "Glowing AI conversation bubbles connected by a neural network",
    tags: ["Python", "Flask", "AI", "REST API", "HTML", "CSS", "JavaScript"],
    categories: ["AI/ML", "Python", "Web Development"],
  },
  {
    title: "Sentiment Analysis API",
    description: "An AI-powered REST API designed to analyze English text and classify sentiment as positive, negative or neutral with a confidence score.",
    image: sentiment,
    alt: "Natural language data flowing into an analytics dashboard",
    tags: ["Python", "FastAPI", "NLP", "REST API", "Machine Learning"],
    categories: ["Data Science", "AI/ML", "Python"],
    features: ["Single text analysis", "Batch analysis", "Confidence score", "Health check endpoint"],
  },
];

export const experience = [
  {
    organization: "CodeAlpha",
    role: "Python Development Intern",
    description: "Worked on practical Python programming projects focused on application development, problem solving and programming fundamentals.",
    tasks: ["Hangman Game", "Stock Portfolio Tracker", "Basic Chatbot"],
    github: "https://github.com/tanzeela4643-blip/codealpha_tasks",
  },
  {
    organization: "Synent Technology",
    role: "Technology Intern",
    description: "Developed multiple beginner-friendly software projects while strengthening Python programming, logic building and application development skills.",
    tasks: ["Simple Calculator", "Number Guessing Game", "To-Do List", "Password Generator"],
    github: "https://github.com/tanzeela4643-blip/SYNET-Technology-Internship",
  },
  {
    organization: "AI & Web Development",
    role: "AI/Web Development Projects",
    description: "Built AI-powered and modern web applications using AI-assisted development workflows, responsive UI design and web technologies.",
    tasks: [],
  },
];

export const skillGroups = [
  { title: "Data Science & AI", skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Machine Learning", "NLP", "Generative AI", "AI Applications"] },
  { title: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "REST APIs", "Flask", "FastAPI"] },
  { title: "Programming", skills: ["Python", "C++", "Object-Oriented Programming", "Problem Solving", "Basic Algorithms"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter", "Microsoft Excel", "Microsoft Word", "PowerPoint"] },
];

export const technologies = ["Python", "React", "JavaScript", "Pandas", "NumPy", "Scikit-learn", "FastAPI", "Flask", "Git", "GitHub", "AI", "Machine Learning"];
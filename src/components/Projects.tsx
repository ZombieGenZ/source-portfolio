import React from "react";
import { Github, Calendar, Code, Globe } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  year: string;
  stars?: number;
  techIcons?: { [key: string]: string };
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FastFood Express - ASP.NET Core",
      description:
        "Fast food vending system with authentication, shopping cart, orders and realtime chat",
      longDescription:
        "Fast FoodExpress is a fast food sales system built on ASP.NET Core (.NET 8), focusing on e-commerce and operations: authentication (login/register/forgot password/verify account) with JWT + OAuth (Google, Facebook, Discord/GitHub), category and product management, discount code management, order and delivery management, points accumulation and redemption, statistics for admin/shipper, account and shopping cart management. The system supports real-time chat between customers and staff via SignalR, sending emails via MailKit, exporting documents (PDF) using iText7, ORM using Entity Framework Core (SQL Server), full DI and logging configuration.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&h=450&q=80",
      technologies: [
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
        "OAuth",
        "SignalR",
        "MailKit",
        "iText7",
        "Newtonsoft.Json",
        "DI & Logging",
      ],
      githubUrl: "https://github.com/ZombieGenZ/FastFoodExpress",
      difficulty: "Advanced",
      year: "2025",
    },
    {
      title: "Personal Portfolio - React TypeScript Starter",
      description: "Modern personal portfolio website",
      longDescription:
        "A modern, responsive personal portfolio website built with React and TypeScript. Features clean design with Tailwind CSS styling, smooth animations, and optimized performance. The project uses Vite for fast development and build processes, ESLint for code quality, and Lucide React for beautiful icons. Fully responsive design that showcases projects, skills, and professional experience with modern web development best practices.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450&q=80",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "Lucide React",
        "ESLint",
        "PostCSS",
        "Autoprefixer",
      ],
      githubUrl: "https://github.com/ZombieGenZ/source-portfolio",
      liveUrl: "https://buidangkhoa.dev/",
      difficulty: "Intermediate",
      year: "2025",
    },
    {
      title: "Forum - Discussion Platform",
      description: "Online forum platform with topic and post management",
      longDescription:
        "Forum is an online forum platform developed with a separate frontend-backend architecture. The frontend is built with Vue 3 and Vite, integrating CKEditor for advanced text editing, along with Vue Router and Toastification for a smooth user experience. The backend is developed with Express.js and MongoDB, integrating many technologies such as JWT authentication, Socket.io for realtime, Nodemailer for sending emails, Firebase Admin and Google API for extension support, along with file export (Excel, PDF) and automatic notification features. The main functions include: topic management, post management, user authentication, and realtime notification system.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&h=450&q=80",
      technologies: [
        "Vue 3",
        "Vite",
        "TypeScript",
        "CKEditor",
        "Express.js",
        "MongoDB",
        "JWT",
        "Socket.io",
        "Firebase",
        "Google API",
        "Nodemailer",
      ],
      githubUrl: "https://github.com/ZombieGenZ/forum",
      difficulty: "Intermediate",
      year: "2025",
    },
    {
      title: "Tank Food - Online Ordering Platform",
      description: "Online fast food ordering platform",
      longDescription:
        "Tank Food is an online fast food ordering system, supporting ordering, order management, vouchers/promotions, real-time notifications, revenue tracking with charts and payment integration. Separate client/server architecture: frontend React + Vite + Tailwind/Ant Design/MUI/Mantine and backend Express.js with Socket.io, Firebase, Nodemailer, Gemini API, cron jobs. MongoDB database, with auto-run tool (run-dev-all.*) for dev/prod.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&h=450&q=80",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "Ant Design",
        "Material UI",
        "Mantine",
        "Framer Motion",
        "Recharts",
        "React Router",
        "AOS",
        "Socket.io",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Nodemailer",
        "Gemini API",
        "Sepay",
      ],
      githubUrl: "https://github.com/ZombieGenZ/tank-food",
      liveUrl: "https://tank-food.io.vn/",
      difficulty: "Advanced",
      year: "2025",
    },
    {
      title: "Tank Travel - Website",
      description: "Online bus ticket booking platform",
      longDescription:
        "Tank Travel is an online bus ticket booking platform, providing convenient solutions for passengers and transport businesses. Outstanding functions include: ticket booking management, revenue tracking, real-time notifications and many other utilities.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&h=450&q=80",
      githubUrl: "https://github.com/ZombieGenZ/tank-travel-website",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "EJS",
        "Express.js",
        "TypeScript",
        "MongoDB",
        "JWT",
        "Firebase",
        "Socket.io",
        "Discord Bot",
        "Nodemailer",
        "Sepay",
      ],
      difficulty: "Advanced",
      year: "2024",
    },
    {
      title: "Tank Travel - Desktop App",
      description: "Desktop application for managing and booking bus tickets",
      longDescription:
        "Tank Travel is a desktop application used to manage and book bus tickets, supporting administrators, businesses,... with features for managing accounts, vehicles, routes, system notifications and statistical reports.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=450&q=80",
      githubUrl: "https://github.com/ZombieGenZ/tank-travel-app",
      technologies: [
        "C#",
        ".NET Framework",
        "WPF",
        "LiveCharts",
        "Material Design",
        "HttpClient",
        "Newtonsoft.Json",
        "JWT",
      ],
      difficulty: "Intermediate",
      year: "2025",
    },
    {
      title: "Student Management - Winform & SQL Server",
      description: "Winform application for student management with ADO.NET",
      longDescription:
        "A student management application built with Winform and SQL Server, using ADO.NET to connect to the database. The system provides authentication, student information management, and score management functions, helping to simplify management work at schools.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&h=450&q=80",
      technologies: ["C#", "Winform", "SQL Server", "ADO.NET"],
      githubUrl: "https://github.com/ZombieGenZ/StudentManagement",
      difficulty: "Intermediate",
      year: "2024",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-emerald-500 text-white";
      case "Intermediate":
        return "bg-blue-500 text-white";
      case "Advanced":
        return "bg-purple-500 text-white";
      case "Expert":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing modern web development, full-stack
            solutions, and innovative technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-700 overflow-hidden"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-slate-800/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-slate-700 hover:scale-110 transition-all duration-200 border border-slate-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-4 h-4 text-slate-300" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-slate-800/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-slate-700 hover:scale-110 transition-all duration-200 border border-slate-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 text-slate-300" />
                    </a>
                  )}
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(
                      project.difficulty
                    )}`}
                  >
                    {project.difficulty}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-300 border border-slate-600">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium bg-slate-700 text-slate-300 rounded-xl border border-slate-600 hover:bg-slate-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-900 to-purple-900 text-blue-300 rounded-xl border border-blue-700">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons - Moved to bottom */}
                <div className="flex gap-3 mt-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className={`${
                        project.liveUrl ? "flex-1" : "w-full"
                      } flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-slate-600`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

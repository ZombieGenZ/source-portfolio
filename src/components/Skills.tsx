import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills: Skill[] = [
    // Programming Languages
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 85,
      category: "Languages",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 85,
      category: "Languages",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: 60,
      category: "Languages",
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      level: 90,
      category: "Languages",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      level: 55,
      category: "Languages",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      level: 50,
      category: "Languages",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      level: 65,
      category: "Languages",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: 80,
      category: "Languages",
    },
    {
      name: "5HTM",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 85,
      category: "Languages",
    },

    // Frameworks & Libraries
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 75,
      category: "Frameworks",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 70,
      category: "Frameworks",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      level: 85,
      category: "Frameworks",
    },
    {
      name: "ASP.NET Core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      level: 90,
      category: "Frameworks",
    },
    {
      name: "Entity Framework",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      level: 85,
      category: "Frameworks",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      level: 85,
      category: "Frameworks",
    },
    {
      name: "WinForms",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      level: 85,
      category: "Frameworks",
    },
    {
      name: "WPF",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      level: 75,
      category: "Frameworks",
    },

    // Styling & UI
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      level: 65,
      category: "Styling",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      level: 75,
      category: "Styling",
    },

    // Databases
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: 80,
      category: "Databases",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: 75,
      category: "Databases",
    },
    {
      name: "SQL Server",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      level: 85,
      category: "Databases",
    },

    // DevOps & Infrastructure
    {
      name: "VPS Management",
      icon: "https://img.icons8.com/color/48/server.png",
      level: 65,
      category: "DevOps",
    },
    {
      name: "Domain Management",
      icon: "https://img.icons8.com/color/48/domain.png",
      level: 60,
      category: "DevOps",
    },
    {
      name: "Cloudflare",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      level: 55,
      category: "DevOps",
    },
    {
      name: "Cloudflared Tunnel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      level: 50,
      category: "DevOps",
    },

    // Tools
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: 75,
      category: "Tools",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      level: 75,
      category: "Tools",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      level: 80,
      category: "Tools",
    },

    // Office Tools
    {
      name: "Microsoft Word",
      icon: "https://img.icons8.com/color/48/microsoft-word-2019.png",
      level: 70,
      category: "Office",
    },
    {
      name: "Microsoft Excel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
      level: 75,
      category: "Office",
    },
    {
      name: "Microsoft PowerPoint",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg",
      level: 65,
      category: "Office",
    },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  const getLevelColor = (level: number) => {
    if (level >= 85) return "from-emerald-500 to-green-600";
    if (level >= 75) return "from-blue-500 to-indigo-600";
    if (level >= 65) return "from-yellow-500 to-orange-600";
    return "from-gray-400 to-gray-600";
  };

  const getLevelBorderColor = (level: number) => {
    if (level >= 85) return "border-emerald-500/30 hover:border-emerald-500/60";
    if (level >= 75) return "border-blue-500/30 hover:border-blue-500/60";
    if (level >= 65) return "border-yellow-500/30 hover:border-yellow-500/60";
    return "border-gray-500/30 hover:border-gray-500/60";
  };

  const getExperienceLabel = (level: number) => {
    if (level >= 85) return "Major projects";
    if (level >= 75) return "Several projects";
    if (level >= 65) return "Course projects";
    return "Academic study";
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      Languages: "🔧",
      Frameworks: "⚡",
      Styling: "🎨",
      Databases: "🗄️",
      Tools: "🛠️",
      Office: "📊",
    };
    return icons[category as keyof typeof icons] || "💻";
  };

  const getLevelLabel = (level: number) => {
    if (level >= 85) return "Advanced";
    if (level >= 75) return "Intermediate";
    if (level >= 65) return "Basic+";
    return "Basic";
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
              <span className="text-xl sm:text-2xl">🚀</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-slate-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
              Skills & Technologies
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
              Strong foundation in C# and web development with expanding
              knowledge across multiple technologies
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-16 sm:space-y-20">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="relative">
                {/* Category Header */}
                <div className="flex items-center justify-center mb-10 sm:mb-12">
                  <div className="flex items-center bg-slate-800 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg border border-slate-700">
                    <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">
                      {getCategoryIcon(category)}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200">
                      {category}
                    </h3>
                  </div>
                </div>

                {/* Skills Grid - Mobile optimized */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`group relative overflow-hidden bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 ${getLevelBorderColor(
                          skill.level
                        )} hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 sm:duration-500 text-center backdrop-blur-sm ${
                          isVisible ? "animate-fade-in-up" : ""
                        }`}
                        style={{
                          animationDelay: `${
                            categoryIndex * 200 + index * 100
                          }ms`,
                        }}
                      >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 sm:duration-500">
                          <div
                            className={`h-full w-full bg-gradient-to-br ${getLevelColor(
                              skill.level
                            )}`}
                          />
                        </div>

                        {/* Skill Icon */}
                        <div className="relative mb-3 sm:mb-6 flex justify-center">
                          <div className="relative p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-700 group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                              onError={(e) => {
                                (
                                  e.target as HTMLImageElement
                                ).src = `data:image/svg+xml,${encodeURIComponent(`
                                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                  </svg>
                                `)}`;
                              }}
                            />

                            {/* Icon Glow */}
                            <div
                              className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${getLevelColor(
                                skill.level
                              )} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                            />
                          </div>
                        </div>

                        {/* Skill Name */}
                        <h4 className="font-bold text-sm sm:text-base md:text-lg text-slate-200 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                          {skill.name}
                        </h4>

                        {/* Level Badge */}
                        <span
                          className={`inline-block px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getLevelColor(
                            skill.level
                          )} text-white`}
                        >
                          {getLevelLabel(skill.level)}
                        </span>

                        {/* Hover Tooltip - Hidden on mobile, shown on larger screens */}
                        <div className="hidden sm:block absolute -top-14 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-100 text-slate-900 text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                          {getExperienceLabel(skill.level)}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-100" />
                        </div>

                        {/* Card Shine Effect */}
                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

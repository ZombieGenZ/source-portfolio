import React from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse`}
      style={{
        top: `${20 + Math.random() * 60}%`,
        left: `${10 + Math.random() * 80}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }}
    />
  ));

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-full text-slate-400 font-medium border border-slate-700">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name with Gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-100 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2">
            Bui Dang Khoa
          </h1>

          {/* Profession */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-8 font-light">
            <span className="inline-block min-h-[1.2em]">
              Software Developer
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about creating innovative solutions with modern
            technologies. Specializing in full-stack development with a focus on
            clean code and exceptional user experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/ZombieGenZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700 hover:scale-110 hover:shadow-lg transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-blue-400" />
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700 hover:scale-110 hover:shadow-lg transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a> */}
            <a
              href="mailto:zombiegenzzz@gmail.com"
              className="p-4 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700 hover:scale-110 hover:shadow-lg transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-blue-400" />
            </a>
          </div>

          {/* CV Download Button */}
          <div className="mb-8">
            <a
              href="/cv.pdf"
              download="BuiDangKhoa_CV.pdf"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-xl hover:from-green-700 hover:to-emerald-700 focus:ring-4 focus:ring-green-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-3" />
              Get Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a
              href="#about"
              className="inline-block p-2 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

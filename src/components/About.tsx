import React from "react";
import { Code2, Wrench, Users, Award } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Code2, value: "6+", label: "Projects Completed" },
    { icon: Wrench, value: "20+", label: "Technologies Learned" },
    { icon: Users, value: "5+", label: "Team Collaborations" },
    { icon: Award, value: "2026", label: "Graduate Year" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-800"
    >
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Fresh graduate with fresh ideas and endless enthusiasm
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
                Ready to Build the Future with Code
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                I'm a fresh IT graduate with a passion for software development
                and a hunger to learn. Having just completed my degree, I bring
                modern knowledge of the latest technologies and a fresh
                perspective to problem-solving.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                During my studies, I've worked on various projects using
                technologies like React, ASP.NET Core, and Node.js. I've
                participated in team projects and internships that have shaped
                my understanding of software development best practices.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                I'm eager to apply my academic knowledge to real-world
                challenges and grow as a developer. I believe in continuous
                learning, clean code practices, and creating solutions that make
                a positive impact.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600 hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105 ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-100 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

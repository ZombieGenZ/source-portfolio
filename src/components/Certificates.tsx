import React from "react";
import { Award, ExternalLink, Calendar, Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  verifyUrl?: string;
  type: "Certificate" | "Award" | "Achievement";
  skills: string[];
}

const Certificates: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certificates: Certificate[] = [
    {
      title: "Café with my Beefriends",
      issuer: "Xưởng thực hành",
      date: "2025",
      description:
        "Collaborative project developing English communication, teamwork, video production and editing skills through creative café-themed content.",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&h=450&q=80",
      verifyUrl:
        "https://xuongthuchanh.poly.edu.vn/certificate/TB00417/6839570cc644eba594beac24",
      type: "Certificate",
      skills: ["Tiếng Anh", "Làm việc nhóm", "Quay video", "Edit video"],
    },
    {
      title: "Ezy English: A Week Without Screens",
      issuer: "Xưởng thực hành",
      date: "2025",
      description:
        "English language proficiency and creative design skills through the 'A Week Without Screens' challenge project.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&h=450&q=80",
      verifyUrl:
        "https://xuongthuchanh.poly.edu.vn/certificate/TB00417/68340a443f84d782022be648",
      type: "Certificate",
      skills: ["Tiếng Anh", "Thiết kế"],
    },
    {
      title: "Ezy English: Trip Titans",
      issuer: "Xưởng thực hành",
      date: "2025",
      description:
        "Development of English language and design skills through the interactive Trip Titans project.",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&h=450&q=80",
      verifyUrl:
        "https://xuongthuchanh.poly.edu.vn/certificate/TB00417/682d772a16194e35cb598116",
      type: "Certificate",
      skills: ["Tiếng Anh", "Thiết kế"],
    },
    {
      title: "Outstanding Academic Achievement - Fall 2024",
      issuer: "FPT Polyschool",
      date: "2024",
      description:
        "Recognition for exceptional academic performance and scholarly excellence during Fall 2024 semester. Achieved TOP 8 ranking school-wide.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&h=450&q=80",
      type: "Award",
      skills: [
        "Academic Excellence",
        "Time Management",
        "Self-study skills",
        "Teamwork skills",
      ],
    },
    {
      title: "Outstanding Academic Achievement - Summer 2024",
      issuer: "FPT Polyschool",
      date: "2024",
      description:
        "Recognition for exceptional academic performance and scholarly excellence during Summer 2024 semester. Achieved TOP 5 ranking school-wide.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=450&q=80",
      type: "Award",
      skills: ["Academic Excellence", "Time Management", "Self-study skills"],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Certificate":
        return "bg-blue-500 text-white";
      case "Award":
        return "bg-yellow-500 text-white";
      case "Achievement":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Certificate":
        return Award;
      case "Award":
        return Star;
      case "Achievement":
        return Award;
      default:
        return Award;
    }
  };

  return (
    <section id="certificates" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-yellow-400 bg-clip-text text-transparent">
              Certificates & Awards
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Recognition of skills and achievements in software development
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const TypeIcon = getTypeIcon(cert.type);

              return (
                <div
                  key={cert.title}
                  className={`group relative bg-slate-800 rounded-2xl border border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full ${getTypeColor(
                          cert.type
                        )}`}
                      >
                        <TypeIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{cert.type}</span>
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-300 border border-slate-600">
                        <Calendar className="w-3 h-3" />
                        <span className="text-sm font-medium">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-blue-400 font-medium mb-3">
                      {cert.issuer}
                    </p>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded-lg border border-slate-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Verify Button */}
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Verify Online
                      </a>
                    )}
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-yellow-500/20 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

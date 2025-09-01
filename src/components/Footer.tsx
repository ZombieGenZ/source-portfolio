import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ZombieGenZ", label: "GitHub" },
    // { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: "mailto:zombiegenzzz@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#certificates", label: "Certificates" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Bui Dang Khoa
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Passionate software developer crafting innovative solutions with
              modern technologies. Always eager to take on new challenges and
              create exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 group-hover:text-blue-400 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-slate-200 mb-4">Get in Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>Long Khanh, Dong Nai, Vietnam</p>
              <p>zombiegenzzz@gmail.com</p>
              <p>+84 783504540</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="flex items-center text-slate-400 mb-4 md:mb-0">
              <span>© 2024 Bui Dang Khoa. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

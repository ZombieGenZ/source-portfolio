import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zombiegenzzz@gmail.com",
      href: "mailto:zombiegenzzz@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+84 783504540",
      href: "tel:+783504540",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Long Khanh, Dong Nai, Vietnam",
      href: "",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-slate-900"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities and
                  exciting projects. Whether you have a question, want to
                  discuss a potential collaboration, or just want to say hello,
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex items-center space-x-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:shadow-lg transition-all duration-300 ${
                      isVisible ? "animate-fade-in-left" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100">
                        {item.label}
                      </h4>
                      <a
                        href={item.href}
                        className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-800">
                <h4 className="font-semibold text-slate-100 mb-2">
                  Quick Response Time
                </h4>
                <p className="text-slate-400">
                  I typically respond to messages within 24 hours. For urgent
                  matters, please don't hesitate to call directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-slate-100 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-slate-100 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-slate-100 transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-slate-100 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <div
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      submitStatus === "success"
                        ? "bg-green-900/20 text-green-400 border border-green-800"
                        : "bg-red-900/20 text-red-400 border border-red-800"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        <span>
                          Failed to send message. Please try again or email
                          directly.
                        </span>
                      </>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-800 transition-all duration-200 ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:scale-105 hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";
import { useState } from "react";
import { useLanguage, translations } from "../LanguageContext";

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        setErrorMessage(errorData.message || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="w-full py-16 bg-white flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white/80 rounded-3xl border border-[#81B29A]/30 p-8 backdrop-blur-xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center" style={{ color: '#3D405B' }}>{t.contactUs}</h2>
        
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <p className="font-semibold">Vielen Dank für Ihre Nachricht!</p>
            <p>Wir werden uns schnellstmöglich bei Ihnen melden.</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p className="font-semibold">Fehler beim Senden der Nachricht</p>
            <p>{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-[#3D405B]">{t.name}</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              required 
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition" 
              placeholder={t.namePlaceholder} 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-[#3D405B]">{t.email}</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition" 
              placeholder={t.emailPlaceholder} 
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block mb-1 font-semibold text-[#3D405B]">{t.company}</label>
            <input 
              id="company" 
              name="company" 
              type="text" 
              value={formData.company}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition" 
              placeholder={t.companyPlaceholder} 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-[#3D405B]">{t.message}</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition resize-none" 
              placeholder={t.messagePlaceholder}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="mt-2 bg-[#81B29A] hover:bg-[#6fa18a] disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition text-lg shadow-lg disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Wird gesendet..." : t.send}
          </button>
        </form>
      </div>
    </section>
  );
} 
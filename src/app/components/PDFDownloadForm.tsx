"use client";
import { useState } from "react";
import { useLanguage, translations } from "../LanguageContext";

export default function PDFDownloadForm() {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.name.trim() && 
                     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && 
                     privacyChecked;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/pdf-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        setErrorMessage(errorData.message || t.pdfFormErrorMessage);
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage(t.pdfFormErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenPDF = () => {
    window.open("/Documents/Förderkatalog_Deutschland_COzwei_10_2025.pdf", "_blank");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {submitStatus === "success" ? (
        <div className="text-center">
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <p className="font-semibold">{t.pdfFormSuccessTitle}</p>
            <p>{t.pdfFormSuccessMessage}</p>
          </div>
          <button
            onClick={handleOpenPDF}
            className="inline-flex items-center px-6 py-3 rounded-lg font-bold text-white text-lg transition bg-[#81B29A] hover:bg-[#6fa18a] focus:outline-none focus:ring-2 focus:ring-[#81B29A]/40"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            {t.pdfFormOpenPDFButton}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {submitStatus === "error" && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-semibold">{t.pdfFormErrorTitle}</p>
              <p>{errorMessage}</p>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-[#3D405B]">{t.pdfFormName}</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              required 
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition" 
              placeholder={t.pdfFormNamePlaceholder}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-[#3D405B]">{t.pdfFormEmail}</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition" 
              placeholder={t.pdfFormEmailPlaceholder}
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block mb-1 font-semibold text-[#3D405B]">{t.pdfFormCompany}</label>
            <input 
              id="company" 
              name="company" 
              type="text" 
              value={formData.company}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-[#81B29A]/30 focus:border-[#81B29A] focus:ring-2 focus:ring-[#81B29A]/20 outline-none transition" 
              placeholder={t.pdfFormCompanyPlaceholder}
            />
          </div>
          
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={privacyChecked}
              onChange={e => setPrivacyChecked(e.target.checked)}
              className="accent-[#81B29A] w-4 h-4 mt-0.5"
              required
            />
            <span>
              {t.pdfFormPrivacyText}<a href="/datenschutz" className="underline text-[#81B29A]">{t.pdfFormPrivacyLink}</a>{t.pdfFormPrivacySuffix}
            </span>
          </label>
          
          <button 
            type="submit" 
            disabled={isSubmitting || !isFormValid}
            className="mt-2 bg-[#81B29A] hover:bg-[#6fa18a] disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition text-lg shadow-lg disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.pdfFormSubmitting : t.pdfFormSubmitButton}
          </button>
        </form>
      )}
    </div>
  );
} 
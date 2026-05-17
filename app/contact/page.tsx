"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/context/language-context";
import { companyInfo } from "@/data/services";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      language === "en"
        ? "Thank you for your enquiry! We will get back to you soon."
        : "നിങ്ങളുടെ അന്വേഷണത്തിന് നന്ദി! ഉടൻ ഞങ്ങൾ നിങ്ങളെ ബന്ധപ്പെടും."
    );
  };

  return (
    <div className="flex flex-col pt-20 bg-black">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {t.contact.title}
            </h1>
            <div className="w-20 h-1 gold-gradient mx-auto mb-6" />
            <p className="text-xl text-[#D4AF37]/60">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black rounded-xl p-6 text-center border border-[#D4AF37]/30 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full border border-green-500 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-all duration-300">
                <MessageCircle className="w-7 h-7 text-green-500 group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-green-500 transition-colors">
                WhatsApp
              </h3>
              <p className="text-[#D4AF37]/60 text-sm">{t.contact.whatsapp}</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="group bg-black rounded-xl p-6 text-center border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full border border-[#D4AF37] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-all duration-300">
                <Phone className="w-7 h-7 text-[#D4AF37] group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                {t.contact.phone}
              </h3>
              <p className="text-[#D4AF37]/60 text-sm">{companyInfo.phone}</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${companyInfo.email}`}
              className="group bg-black rounded-xl p-6 text-center border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full border border-[#D4AF37] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-all duration-300">
                <Mail className="w-7 h-7 text-[#D4AF37] group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                {t.contact.email}
              </h3>
              <p className="text-[#D4AF37]/60 text-sm">{companyInfo.email}</p>
            </a>

            {/* Address */}
            <div className="bg-black rounded-xl p-6 text-center border border-[#D4AF37]/30">
              <div className="w-14 h-14 rounded-full border border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                {t.contact.address}
              </h3>
              <p className="text-[#D4AF37]/60 text-sm">
                {companyInfo.address[language]}
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black rounded-2xl p-8 md:p-10 border border-[#D4AF37]/30">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                {language === "en" ? "Send an Enquiry" : "അന്വേഷണം അയയ്ക്കുക"}
              </h2>
              <div className="w-16 h-1 gold-gradient mx-auto mb-8" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#D4AF37]">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === "en" ? "John Doe" : "പേര്"}
                      required
                      className="bg-black border-[#D4AF37]/30 text-white placeholder:text-[#D4AF37]/40 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#D4AF37]">{t.contact.form.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-black border-[#D4AF37]/30 text-white placeholder:text-[#D4AF37]/40 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#D4AF37]">{t.contact.form.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="bg-black border-[#D4AF37]/30 text-white placeholder:text-[#D4AF37]/40 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event" className="text-[#D4AF37]">{t.contact.form.event}</Label>
                    <Input
                      id="event"
                      name="event"
                      value={formData.event}
                      onChange={handleChange}
                      placeholder={
                        language === "en" ? "Wedding, Corporate, etc." : "വിവാഹം, കോർപ്പറേറ്റ്, etc."
                      }
                      className="bg-black border-[#D4AF37]/30 text-white placeholder:text-[#D4AF37]/40 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#D4AF37]">{t.contact.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      language === "en"
                        ? "Tell us about your event..."
                        : "നിങ്ങളുടെ ഇവന്റിനെക്കുറിച്ച് പറയൂ..."
                    }
                    rows={5}
                    required
                    className="bg-black border-[#D4AF37]/30 text-white placeholder:text-[#D4AF37]/40 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gold-gradient hover:opacity-90 text-black font-semibold shadow-lg gold-glow transition-all duration-300"
                >
                  {t.contact.form.submit}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

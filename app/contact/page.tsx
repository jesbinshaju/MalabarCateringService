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
    // Form submission is non-functional as per requirements
    alert(
      language === "en"
        ? "Thank you for your enquiry! We will get back to you soon."
        : "നിങ്ങളുടെ അന്വേഷണത്തിന് നന്ദി! ഉടൻ ഞങ്ങൾ നിങ്ങളെ ബന്ധപ്പെടും."
    );
  };

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.contact.title}
            </h1>
            <p className="text-xl text-muted-foreground">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-6 text-center border border-border hover:border-green-500/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm">{t.contact.whatsapp}</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="group bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {t.contact.phone}
              </h3>
              <p className="text-muted-foreground text-sm">{companyInfo.phone}</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${companyInfo.email}`}
              className="group bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {t.contact.email}
              </h3>
              <p className="text-muted-foreground text-sm">{companyInfo.email}</p>
            </a>

            {/* Address */}
            <div className="bg-card rounded-xl p-6 text-center border border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {t.contact.address}
              </h3>
              <p className="text-muted-foreground text-sm">
                {companyInfo.address[language]}
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                {language === "en" ? "Send an Enquiry" : "അന്വേഷണം അയയ്ക്കുക"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === "en" ? "John Doe" : "പേര്"}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.form.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event">{t.contact.form.event}</Label>
                    <Input
                      id="event"
                      name="event"
                      value={formData.event}
                      onChange={handleChange}
                      placeholder={
                        language === "en" ? "Wedding, Corporate, etc." : "വിവാഹം, കോർപ്പറേറ്റ്, etc."
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message}</Label>
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
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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

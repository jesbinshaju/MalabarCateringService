"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Building2, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { services } from "@/data/services";

const serviceIcons = {
  rings: Sparkles,
  building: Building2,
  party: PartyPopper,
};

export default function HomePage() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Kerala cuisine spread"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        {/* Decorative gold elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/30">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-sm font-medium tracking-wider uppercase">
                Malabar Catering
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight text-balance">
              {t.hero.tagline.split(" ").map((word, index) => (
                <span key={index}>
                  {index === 1 || index === 3 ? (
                    <span className="text-gold">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed text-pretty">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:via-gold-light hover:to-gold-dark text-black font-semibold px-8 shadow-lg shadow-gold/20 transition-all duration-300"
              >
                <Link href="/contact">
                  {t.hero.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold font-medium px-8 bg-transparent"
              >
                <Link href="/menu">{t.nav.menu}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-gold animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4 text-balance">
              {t.services.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light mx-auto mb-6" />
            <p className="text-cream/60 text-lg">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <div
                  key={service.id}
                  className="group bg-black rounded-xl p-8 border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10"
                >
                  <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors">
                    {service.title[language]}
                  </h3>
                  <p className="text-cream/60 leading-relaxed">
                    {service.description[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        {/* Gold gradient accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">
              Get Started
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6 text-balance">
              {language === "en"
                ? "Ready to Create Unforgettable Moments?"
                : "മറക്കാനാവാത്ത നിമിഷങ്ങൾ സൃഷ്ടിക്കാൻ തയ്യാറാണോ?"}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light mx-auto mb-6" />
            <p className="text-cream/60 text-lg mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Let us bring the authentic taste of Kerala to your next event. Contact us today to discuss your catering needs."
                : "നിങ്ങളുടെ അടുത്ത പരിപാടിയിലേക്ക് കേരളത്തിന്റെ ആധികാരിക രുചി ഞങ്ങളെ കൊണ്ടുവരാൻ അനുവദിക്കൂ."}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:via-gold-light hover:to-gold-dark text-black font-semibold px-8 shadow-lg shadow-gold/20 transition-all duration-300"
            >
              <Link href="/contact">
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

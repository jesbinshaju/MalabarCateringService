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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Kerala cuisine spread"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary-foreground text-sm font-medium">
                Malabar Catering
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight text-balance">
              {t.hero.tagline}
            </h1>

            <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed text-pretty">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
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
                className="border-background/30 text-background hover:bg-background/10 font-medium px-8"
              >
                <Link href="/menu">{t.nav.menu}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-background/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t.services.title}
            </h2>
            <p className="text-muted-foreground text-lg">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <div
                  key={service.id}
                  className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {service.title[language]}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance">
              {language === "en"
                ? "Ready to Create Unforgettable Moments?"
                : "മറക്കാനാവാത്ത നിമിഷങ്ങൾ സൃഷ്ടിക്കാൻ തയ്യാറാണോ?"}
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Let us bring the authentic taste of Kerala to your next event. Contact us today to discuss your catering needs."
                : "നിങ്ങളുടെ അടുത്ത പരിപാടിയിലേക്ക് കേരളത്തിന്റെ ആധികാരിക രുചി ഞങ്ങളെ കൊണ്ടുവരാൻ അനുവദിക്കൂ."}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
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

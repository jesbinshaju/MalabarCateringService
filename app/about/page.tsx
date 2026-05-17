"use client";

import Image from "next/image";
import { Star, Leaf, Heart, Flame } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { aboutData } from "@/data/about";

const valueIcons = {
  star: Star,
  leaf: Leaf,
  heart: Heart,
  flame: Flame,
};

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.about.title}
            </h1>
            <p className="text-xl text-muted-foreground">{t.about.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Malabar Catering kitchen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {language === "en" ? "Our Journey" : "ഞങ്ങളുടെ യാത്ര"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {aboutData.story[language]}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {aboutData.mission[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-background/70 text-sm md:text-base">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.about.values.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons];
              return (
                <div
                  key={value.id}
                  className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {value.title[language]}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {t.about.founder.title}
              </h2>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-1">
                  {aboutData.founder.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {aboutData.founder.title[language]}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {aboutData.founder.description[language]}
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute inset-4 rounded-2xl bg-primary/20" />
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt={aboutData.founder.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

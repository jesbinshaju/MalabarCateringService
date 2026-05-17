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
    <div className="flex flex-col pt-20 bg-black">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {t.about.title}
            </h1>
            <div className="w-20 h-1 gold-gradient mx-auto mb-6" />
            <p className="text-xl text-[#D4AF37]/60">{t.about.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Malabar Catering kitchen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="space-y-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                {language === "en" ? "Our Journey" : "ഞങ്ങളുടെ യാത്ര"}
              </h2>
              <div className="w-16 h-1 gold-gradient" />
              <p className="text-[#D4AF37]/70 leading-relaxed text-lg">
                {aboutData.story[language]}
              </p>
              <p className="text-[#D4AF37]/60 leading-relaxed">
                {aboutData.mission[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gold-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-black/70 text-sm md:text-base font-medium">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              {t.about.values.title}
            </h2>
            <div className="w-20 h-1 gold-gradient mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons];
              return (
                <div
                  key={value.id}
                  className="group bg-black rounded-xl p-6 text-center border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20"
                >
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#FFD700] mb-2">
                    {value.title[language]}
                  </h3>
                  <p className="text-[#D4AF37]/60 text-sm">
                    {value.description[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <span className="text-[#D4AF37] text-sm font-medium tracking-wider uppercase">Leadership</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                {t.about.founder.title}
              </h2>
              <div className="w-16 h-1 gold-gradient" />
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#FFD700] mb-1">
                  {aboutData.founder.name}
                </h3>
                <p className="text-[#D4AF37]/60 text-sm">
                  {aboutData.founder.title[language]}
                </p>
              </div>
              <p className="text-[#D4AF37]/70 leading-relaxed">
                {aboutData.founder.description[language]}
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute inset-4 rounded-2xl border border-[#D4AF37]/50" />
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#D4AF37]">
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

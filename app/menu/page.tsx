"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { menuItems, menuCategories, MenuCategory } from "@/data/menu";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

export default function MenuPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("breakfast");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  const categoryLabels: Record<MenuCategory, string> = {
    breakfast: t.menu.categories.breakfast,
    lunch: t.menu.categories.lunch,
    dinner: t.menu.categories.dinner,
    snacks: t.menu.categories.snacks,
    special: t.menu.categories.special,
  };

  return (
    <div className="flex flex-col pt-20 bg-black">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Menu
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 text-balance">
              {t.menu.title}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light mx-auto mb-6" />
            <p className="text-xl text-cream/60">{t.menu.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-black/95 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide gap-2 py-4">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
                  activeCategory === category
                    ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black shadow-lg shadow-gold/20"
                    : "bg-black-lighter text-cream/60 border border-gold/20 hover:border-gold/40 hover:text-cream"
                )}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-black-light rounded-xl p-6 border border-gold/20 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-serif text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                        {item.name[language]}
                      </h3>
                      {item.vegetarian && (
                        <span className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center" title="Vegetarian">
                          <Leaf className="w-3 h-3 text-green-500" />
                        </span>
                      )}
                    </div>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      {item.description[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-cream/60">
                {language === "en"
                  ? "No items found in this category."
                  : "ഈ വിഭാഗത്തിൽ ഇനങ്ങൾ കണ്ടെത്തിയില്ല."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-black-light border-t border-gold/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-cream/50 text-sm">
              {language === "en"
                ? "* Menu items and availability may vary based on season and event requirements. Contact us for customized menu options."
                : "* മെനു ഇനങ്ങളും ലഭ്യതയും സീസണും ഇവന്റ് ആവശ്യകതകളും അടിസ്ഥാനമാക്കി വ്യത്യാസപ്പെടാം. ഇഷ്ടാനുസൃത മെനു ഓപ്ഷനുകൾക്കായി ഞങ്ങളെ ബന്ധപ്പെടുക."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

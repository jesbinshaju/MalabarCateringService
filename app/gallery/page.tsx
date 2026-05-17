"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export default function GalleryPage() {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col pt-20 bg-black">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 text-balance">
              {t.gallery.title}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light mx-auto mb-6" />
            <p className="text-xl text-cream/60">{t.gallery.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300",
                  index % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                )}
                onClick={() => setSelectedImage(image.src)}
              >
                <div
                  className={cn(
                    "relative w-full",
                    index % 5 === 0 ? "aspect-square" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt[language]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-cream text-sm font-medium">
                      {image.alt[language]}
                    </p>
                  </div>
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-gold/30 border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

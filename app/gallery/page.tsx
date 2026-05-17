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
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.gallery.title}
            </h1>
            <p className="text-xl text-muted-foreground">{t.gallery.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-xl",
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
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-background text-sm font-medium">
                      {image.alt[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
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

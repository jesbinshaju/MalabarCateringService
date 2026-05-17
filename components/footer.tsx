"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { companyInfo } from "@/data/services";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-black border-t border-[#D4AF37]/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center gold-glow">
                <span className="text-black font-serif font-bold text-lg">
                  M
                </span>
              </div>
              <span className="font-serif text-xl font-semibold text-[#D4AF37]">
                Malabar Catering
              </span>
            </Link>
            <p className="text-[#D4AF37]/60 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#FFD700]">
              {t.footer.quickLinks}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-[#D4AF37]/60 hover:text-[#FFD700] transition-colors text-sm"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="text-[#D4AF37]/60 hover:text-[#FFD700] transition-colors text-sm"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/menu"
                className="text-[#D4AF37]/60 hover:text-[#FFD700] transition-colors text-sm"
              >
                {t.nav.menu}
              </Link>
              <Link
                href="/gallery"
                className="text-[#D4AF37]/60 hover:text-[#FFD700] transition-colors text-sm"
              >
                {t.nav.gallery}
              </Link>
              <Link
                href="/contact"
                className="text-[#D4AF37]/60 hover:text-[#FFD700] transition-colors text-sm"
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#FFD700]">
              {t.footer.contactInfo}
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-[#D4AF37]/60 hover:text-[#FFD700] transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-[#D4AF37]/60 hover:text-[#FFD700] transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-[#D4AF37]/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#D4AF37]" />
                <span>{companyInfo.address[language]}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-[#FFD700]">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-3">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#D4AF37]/30">
          <p className="text-center text-[#D4AF37]/40 text-sm">
            &copy; {new Date().getFullYear()} Malabar Catering. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

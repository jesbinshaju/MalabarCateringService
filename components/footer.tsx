"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { companyInfo } from "@/data/services";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-black-light border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark flex items-center justify-center">
                <span className="text-black font-serif font-bold text-lg">
                  M
                </span>
              </div>
              <span className="font-serif text-xl font-semibold text-cream">
                Malabar Catering
              </span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">
              {t.footer.quickLinks}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-cream/60 hover:text-gold transition-colors text-sm"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="text-cream/60 hover:text-gold transition-colors text-sm"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/menu"
                className="text-cream/60 hover:text-gold transition-colors text-sm"
              >
                {t.nav.menu}
              </Link>
              <Link
                href="/gallery"
                className="text-cream/60 hover:text-gold transition-colors text-sm"
              >
                {t.nav.gallery}
              </Link>
              <Link
                href="/contact"
                className="text-cream/60 hover:text-gold transition-colors text-sm"
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">
              {t.footer.contactInfo}
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-gold" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-cream/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span>{companyInfo.address[language]}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-3">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black text-cream/70 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black text-cream/70 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black text-cream/70 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/20">
          <p className="text-center text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Malabar Catering. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

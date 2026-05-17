"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/menu", key: "menu" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ml" : "en");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black border-b border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/10"
          : "bg-black/80 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-lg gold-glow">
              <span className="text-black font-serif font-bold text-lg">
                M
              </span>
            </div>
            <span className="font-serif text-xl font-semibold text-[#D4AF37] group-hover:text-[#FFD700] transition-colors">
              Malabar Catering
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  pathname === link.href
                    ? "text-[#FFD700]"
                    : "text-[#D4AF37]/70 hover:text-[#FFD700]"
                )}
              >
                {t.nav[link.key]}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 gold-gradient rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-[#D4AF37] hover:text-black hover:bg-[#D4AF37] border border-[#D4AF37]"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium uppercase">
                {language === "en" ? "മല" : "EN"}
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#D4AF37] hover:text-black hover:bg-[#D4AF37]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#D4AF37]/30">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-[#D4AF37] text-black"
                      : "text-[#D4AF37]/70 hover:bg-[#D4AF37]/10 hover:text-[#FFD700]"
                  )}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

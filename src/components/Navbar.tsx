import { useState, useEffect } from "react";
import { Menu, X, Phone, Moon, Sun, Languages, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import Logo from "../../src/assets/img/Logo-1.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { nameAr: "الرئيسية", nameEn: "Home", href: "#home" },
    { nameAr: "عن الطبيب", nameEn: "About", href: "#about" },
    { nameAr: "الخدمات", nameEn: "Services", href: "#services" },
    { nameAr: "الفريق", nameEn: "Team", href: "#team" },
    { nameAr: "الفيديوهات", nameEn: "Videos", href: "#videos" },
    { nameAr: "النتائج", nameEn: "Results", href: "#results" },
    { nameAr: "الفروع", nameEn: "Locations", href: "#locations" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center">
              <img
                src={Logo}
                alt="Abo Elnaga Clinic Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">
                {t("عيادات أبو النجا", "Premium Dental Clinic")}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t("لتقويم وزراعة الأسنان", "Excellence in Dental Care")}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light rounded-lg transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {t(link.nameAr, link.nameEn)}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+201227599182"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>01227599182</span>
            </a>
            {/* <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light rounded-lg transition-all duration-300"
              aria-label={t("تغيير اللغة", "Change Language")}
            >
              <Globe className="w-4 h-4" />
              <span>{language === "ar" ? "EN" : "ع"}</span>
            </button> */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light rounded-lg transition-all duration-300 hover:scale-105 hover:rotate-12"
              aria-label={t("تغيير الوضع", "Toggle Theme")}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <Button
              variant="hero"
              size="default"
              className="hover:scale-105 transition-transform duration-300"
            >
              {t("احجز موعد", "Book Appointment")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary-light transition-colors"
            aria-label="القائمة"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-strong animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full ${
                  language === "ar" ? "text-right" : "text-left"
                } px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light rounded-lg transition-colors`}
              >
                {t(link.nameAr, link.nameEn)}
              </button>
            ))}
            {/* <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "ar" ? "English" : "عربي"}</span>
            </button> */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light rounded-lg transition-colors"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4" />
                  <span>{t("الوضع الفاتح", "Light Mode")}</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span>{t("الوضع الداكن", "Dark Mode")}</span>
                </>
              )}
            </button>
            <div className="pt-4 border-t border-border">
              <Button
                variant="hero"
                size="lg"
                className="w-full hover:scale-105 transition-transform duration-300"
              >
                {t("احجز موعد", "Book Appointment")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

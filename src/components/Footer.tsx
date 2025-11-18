import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { Music2 } from "lucide-react"; // TikTok icon
import Logo from "../../src/assets/img/logo-1.png";

const Footer = () => {
  const quickLinks = [
    { text: "من نحن", href: "#about" },
    { text: "الخدمات", href: "#services" },
    { text: "الفريق", href: "#team" },
    { text: "قبل وبعد", href: "#gallery" },
    { text: "الفيديوهات", href: "#videos" },
    { text: "الفروع", href: "#locations" },
    { text: "اتصل بنا", href: "#contact" },
  ];

  const services = [
    { text: "طب الأسنان التجميلي", href: "#" },
    { text: "تبييض الأسنان", href: "#" },
    { text: "زراعة الأسنان", href: "#" },
    { text: "التقويم الشفاف والمتحرك", href: "#" },
    { text: "علاج الجذور", href: "#" },
    { text: "الرعاية الوقائية", href: "#" },
    { text: "طب أسنان الأطفال", href: "#" },
    { text: "القشور الخزفية", href: "#" },
  ];

  const locations = [
    " قويسنا - أمام البنك الأهلي - المنوفية",
    " طه شبرا - أمام البنك الزراعي - قويسنا",
    "العجايزة - أمام موقف أم خنان - قويسنا",
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-right animate-fade-in-up">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 justify-start">
              <span className="text-xl font-bold">عيادات أبو النجا</span>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={Logo}
                  alt="عيادات الدكتور أحمد أبو النجا"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              التميز في رعاية الأسنان مع لمسة شخصية.<br></br> شريكك الموثوق
              لابتسامة صحية وجميلة.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/AboelnagaDC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/aboelnagadc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@AboelnagaDC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                aria-label="TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.text}>
                  <a
                    href={service.href}
                    className="text-background/80 hover:text-accent transition-colors"
                  >
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 flex-row-reverse">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-right">
                  <a
                    href="tel:01227599182"
                    className="text-background/80 hover:text-accent transition-colors block"
                  >
                    هاتف: 01227599182
                  </a>
                </div>
              </div>

              <div className="flex gap-3 flex-row-reverse">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:ask@drahmedaboelnaga.com"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  ask@drahmedaboelnaga.com
                </a>
              </div>

              {locations.map((location, index) => (
                <div key={index} className="flex gap-3 flex-row-reverse">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-background/80 text-right">{location}</p>
                </div>
              ))}

              <div className="flex gap-3 flex-row-reverse">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-right">
                  <p className="text-background/80">
                    السبت - الخميس: 10 صباحاً - 10 مساءً
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 text-sm text-background/60">
            <p>جميع الحقوق محفوظة © 2025 عيادات أبو النجا</p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="hover:text-accent transition-colors"
              >
                سياسة الخصوصية
              </a>
              <a href="#terms" className="hover:text-accent transition-colors">
                شروط الخدمة
              </a>
              <a
                href="#cookies"
                className="hover:text-accent transition-colors"
              >
                سياسة الكوكيز
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

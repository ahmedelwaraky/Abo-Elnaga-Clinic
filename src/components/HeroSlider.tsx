import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    titleAr: "التميز في رعاية الأسنان",
    titleEn: "Excellence in Dental Care",
    subtitleAr: "ابتسامتك هي شغفنا. استمتع بعلاجات الأسنان عالمية المستوى في بيئة مريحة وعصرية.",
    subtitleEn: "Your smile is our passion. Experience world-class dental treatments in a comfortable, modern environment.",
  },
  {
    image: hero2,
    titleAr: "تقنية متقدمة",
    titleEn: "Advanced Technology",
    subtitleAr: "أحدث المعدات والتقنيات لإجراءات أسنان غير مؤلمة وفعالة.",
    subtitleEn: "State-of-the-art equipment and techniques for painless, effective dental procedures.",
  },
  {
    image: hero3,
    titleAr: "فريق رعاية متخصص",
    titleEn: "Expert Care Team",
    subtitleAr: "فريقنا من المحترفين ذوي الخبرة مكرس لصحة فمك وابتسامتك الجميلة.",
    subtitleEn: "Our team of experienced professionals is dedicated to your oral health and beautiful smile.",
  },
];

const HeroSlider = () => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] w-full overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/60 to-transparent" />
          </div>
          
          <div className={`relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-2xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight animate-slide-in-right">
                {t(slide.titleAr, slide.titleEn)}
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t(slide.subtitleAr, slide.subtitleEn)}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${language === 'ar' ? 'justify-end' : 'justify-start'} animate-scale-in`} style={{ animationDelay: '0.4s' }}>
                <Button
  variant="hero"
  size="xl"
  className="hover:scale-105 transition-transform duration-300"
  onClick={() => {
    window.open("https://wa.me/201227599182", "_blank");
  }}
>
  {t("احجز موعد", "Book Appointment")}
</Button>

                <Button variant="accent" size="xl" className="hover:scale-105 transition-transform duration-300">
                  {t("اعرف المزيد", "Learn More")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

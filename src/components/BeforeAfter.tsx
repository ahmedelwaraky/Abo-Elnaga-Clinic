import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import Autoplay from "embla-carousel-autoplay";
import { Sparkles } from "lucide-react";

// استيراد الصور من مجلد prev
import img1 from "@/assets/img/prev/1.jpg";
import img2 from "@/assets/img/prev/2.jpg";
import img3 from "@/assets/img/prev/3.jpg";
import img4 from "@/assets/img/prev/4.jpg";
import img5 from "@/assets/img/prev/5.jpg";
import img6 from "@/assets/img/prev/6.jpg";
import img7 from "@/assets/img/prev/7.jpg";
import img8 from "@/assets/img/prev/8.jpg";
import img9 from "@/assets/img/prev/9.jpg";
import img10 from "@/assets/img/prev/10.jpg";
import img11 from "@/assets/img/prev/11.jpg";
import img12 from "@/assets/img/prev/12.jpg";
import img13 from "@/assets/img/prev/13.jpg";
import img14 from "@/assets/img/prev/14.jpg";
import img15 from "@/assets/img/prev/15.jpg";
import img16 from "@/assets/img/prev/16.jpg";
import img17 from "@/assets/img/prev/17.jpg";
import img18 from "@/assets/img/prev/18.jpg";
import img19 from "@/assets/img/prev/19.jpg";
import img20 from "@/assets/img/prev/20.jpg";
import img21 from "@/assets/img/prev/21.jpg";
import img22 from "@/assets/img/prev/22.jpg";
import img23 from "@/assets/img/prev/23.jpg";
import img24 from "@/assets/img/prev/24.jpg";
import img25 from "@/assets/img/prev/25.jpg";
import img26 from "@/assets/img/prev/26.jpg";
import img27 from "@/assets/img/prev/27.jpg";
import img28 from "@/assets/img/prev/28.jpg";
import img29 from "@/assets/img/prev/29.jpg";
import img30 from "@/assets/img/prev/30.jpg";
import img31 from "@/assets/img/prev/31.jpg";
import img32 from "@/assets/img/prev/32.jpg";
import img33 from "@/assets/img/prev/33.jpg";
import img34 from "@/assets/img/prev/34.jpg";
import img35 from "@/assets/img/prev/35.jpg";
import img36 from "@/assets/img/prev/36.jpg";
import img37 from "@/assets/img/prev/37.jpg";
import img38 from "@/assets/img/prev/38.jpg";
import img39 from "@/assets/img/prev/39.jpg";
import img40 from "@/assets/img/prev/40.jpg";
import img41 from "@/assets/img/prev/41.jpg";

const cases = [
  {
    titleAr: "تحول تبييض الأسنان",
    titleEn: "Teeth Whitening Transformation",
    procedureAr: "تبييض احترافي",
    procedureEn: "Professional Whitening",
    image: img1,
  },
  {
    titleAr: "تجميل الابتسامة الكامل",
    titleEn: "Complete Smile Makeover",
    procedureAr: "قشور خزفية",
    procedureEn: "Porcelain Veneers",
    image: img2,
  },
  {
    titleAr: "زراعة أسنان متقدمة",
    titleEn: "Advanced Dental Implant",
    procedureAr: "زراعة فورية",
    procedureEn: "Immediate Implant",
    image: img3,
  },
  {
    titleAr: "تقويم الأسنان الشفاف",
    titleEn: "Clear Aligners Treatment",
    procedureAr: "تقويم شفاف",
    procedureEn: "Invisalign",
    image: img4,
  },
  {
    titleAr: "ابتسامة هوليود",
    titleEn: "Hollywood Smile",
    procedureAr: "فينير مخصص",
    procedureEn: "Custom Veneers",
    image: img5,
  },
  {
    titleAr: "علاج تسوس متقدم",
    titleEn: "Advanced Cavity Treatment",
    procedureAr: "حشوات تجميلية",
    procedureEn: "Cosmetic Fillings",
    image: img6,
  },
  {
    titleAr: "تركيبات الزيركون",
    titleEn: "Zirconia Crowns",
    procedureAr: "تيجان زيركون",
    procedureEn: "Zirconia Crowns",
    image: img7,
  },
  {
    titleAr: "علاج اللثة المتقدم",
    titleEn: "Advanced Gum Treatment",
    procedureAr: "جراحة لثة",
    procedureEn: "Gum Surgery",
    image: img8,
  },
  {
    titleAr: "تجميل الابتسامة",
    titleEn: "Smile Design",
    procedureAr: "تصميم الابتسامة",
    procedureEn: "Smile Design",
    image: img9,
  },
  {
    titleAr: "حشو العصب بالميكروسكوب",
    titleEn: "Microscopic Root Canal",
    procedureAr: "علاج العصب",
    procedureEn: "Root Canal",
    image: img10,
  },
  {
    titleAr: "تبييض بالليزر",
    titleEn: "Laser Whitening",
    procedureAr: "تبييض ليزر",
    procedureEn: "Laser Whitening",
    image: img11,
  },
  {
    titleAr: "جسر أسنان ثابت",
    titleEn: "Fixed Dental Bridge",
    procedureAr: "جسر ثابت",
    procedureEn: "Fixed Bridge",
    image: img12,
  },
  {
    titleAr: "قشور لومينير",
    titleEn: "Lumineers",
    procedureAr: "لومينير",
    procedureEn: "Lumineers",
    image: img13,
  },
  {
    titleAr: "تجميل الأسنان الأمامية",
    titleEn: "Front Teeth Makeover",
    procedureAr: "فينير أمامي",
    procedureEn: "Front Veneers",
    image: img14,
  },
  {
    titleAr: "علاج ضرس العقل",
    titleEn: "Wisdom Tooth Treatment",
    procedureAr: "خلع جراحي",
    procedureEn: "Surgical Extraction",
    image: img15,
  },
  {
    titleAr: "تركيبة متحركة",
    titleEn: "Removable Dentures",
    procedureAr: "طقم أسنان",
    procedureEn: "Dentures",
    image: img16,
  },
  {
    titleAr: "علاج التهاب اللثة",
    titleEn: "Gum Disease Treatment",
    procedureAr: "تنظيف عميق",
    procedureEn: "Deep Cleaning",
    image: img17,
  },
  {
    titleAr: "تجميل بالكومبوزيت",
    titleEn: "Composite Bonding",
    procedureAr: "كومبوزيت فينير",
    procedureEn: "Composite Veneers",
    image: img18,
  },
  {
    titleAr: "زراعة عظم الفك",
    titleEn: "Bone Grafting",
    procedureAr: "ترقيع عظمي",
    procedureEn: "Bone Graft",
    image: img19,
  },
  {
    titleAr: "تقويم معدني",
    titleEn: "Metal Braces",
    procedureAr: "تقويم تقليدي",
    procedureEn: "Traditional Braces",
    image: img20,
  },
  {
    titleAr: "إعادة بناء الأسنان",
    titleEn: "Tooth Reconstruction",
    procedureAr: "بناء كامل",
    procedureEn: "Full Reconstruction",
    image: img21,
  },
  {
    titleAr: "تجميل الابتسامة اللثوية",
    titleEn: "Gummy Smile Correction",
    procedureAr: "تصحيح اللثة",
    procedureEn: "Gum Contouring",
    image: img22,
  },
  {
    titleAr: "علاج الجذور المعقد",
    titleEn: "Complex Root Treatment",
    procedureAr: "علاج قنوات",
    procedureEn: "Endodontics",
    image: img23,
  },
  {
    titleAr: "تركيبات ثابتة متعددة",
    titleEn: "Multiple Fixed Prosthetics",
    procedureAr: "جسور متعددة",
    procedureEn: "Multiple Bridges",
    image: img24,
  },
  {
    titleAr: "ابتسامة رقمية",
    titleEn: "Digital Smile Design",
    procedureAr: "تصميم رقمي",
    procedureEn: "DSD",
    image: img25,
  },
  {
    titleAr: "زراعة All-on-4",
    titleEn: "All-on-4 Implants",
    procedureAr: "زراعة كاملة",
    procedureEn: "All-on-4",
    image: img26,
  },
  {
    titleAr: "تبييض كيميائي منزلي",
    titleEn: "Home Whitening",
    procedureAr: "تبييض منزلي",
    procedureEn: "Home Kit",
    image: img27,
  },
  {
    titleAr: "علاج الصرير",
    titleEn: "Bruxism Treatment",
    procedureAr: "واقي الأسنان",
    procedureEn: "Night Guard",
    image: img28,
  },
  {
    titleAr: "تركيب إيماكس",
    titleEn: "E-max Restoration",
    procedureAr: "إيماكس",
    procedureEn: "E-max",
    image: img29,
  },
  {
    titleAr: "علاج أسنان الأطفال",
    titleEn: "Pediatric Dentistry",
    procedureAr: "طب أطفال",
    procedureEn: "Pedodontics",
    image: img30,
  },
  {
    titleAr: "تعديل الإطباق",
    titleEn: "Occlusion Adjustment",
    procedureAr: "تعديل العضة",
    procedureEn: "Bite Adjustment",
    image: img31,
  },
  {
    titleAr: "علاج الحساسية",
    titleEn: "Sensitivity Treatment",
    procedureAr: "علاج الحساسية",
    procedureEn: "Desensitization",
    image: img32,
  },
  {
    titleAr: "تركيبات مؤقتة",
    titleEn: "Temporary Restorations",
    procedureAr: "تركيبات مؤقتة",
    procedureEn: "Temporary Crowns",
    image: img33,
  },
  {
    titleAr: "قشور السيراميك",
    titleEn: "Ceramic Veneers",
    procedureAr: "سيراميك",
    procedureEn: "Ceramic",
    image: img34,
  },
  {
    titleAr: "علاج الفراغات",
    titleEn: "Gap Closure",
    procedureAr: "إغلاق الفراغات",
    procedureEn: "Space Closure",
    image: img35,
  },
  {
    titleAr: "تقويم لينجوال",
    titleEn: "Lingual Braces",
    procedureAr: "تقويم خلفي",
    procedureEn: "Lingual Braces",
    image: img36,
  },
  {
    titleAr: "علاج الخراج",
    titleEn: "Abscess Treatment",
    procedureAr: "علاج الخراج",
    procedureEn: "Abscess Drainage",
    image: img37,
  },
  {
    titleAr: "تركيبة هجينة",
    titleEn: "Hybrid Prosthesis",
    procedureAr: "تركيبة مختلطة",
    procedureEn: "Hybrid Denture",
    image: img38,
  },
  {
    titleAr: "تصحيح الاعوجاج",
    titleEn: "Alignment Correction",
    procedureAr: "تعديل الاصطفاف",
    procedureEn: "Alignment",
    image: img39,
  },
  {
    titleAr: "ابتسامة مثالية",
    titleEn: "Perfect Smile",
    procedureAr: "تجميل شامل",
    procedureEn: "Full Makeover",
    image: img40,
  },
  {
    titleAr: "ابتسامة مثالية",
    titleEn: "Perfect Smile",
    procedureAr: "تجميل شامل",
    procedureEn: "Full Makeover",
    image: img41,
  },
];

const BeforeAfter = () => {
  const { t } = useLanguage();

  return (
    <section id="results" className="py-20 bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* العنوان الرئيسي */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t("قصص نجاح وابتسامات", "Success Stories & Smiles")}{" "}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "اكتشف قوة ابتسامتك الجديدة",
              "Discover the Power of Your New Smile"
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* الكاروسيل */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {cases.map((caseItem, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-strong animate-fade-in-up h-full">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image Section */}
                  <div className="relative h-96 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <img
                      src={caseItem.image}
                      alt={t(caseItem.titleAr, caseItem.titleEn)}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Before/After Badge */}
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                      <Sparkles className="w-3 h-3" />
                      {t("قبل وبعد", "Before & After")}
                    </div>
                  </div>

                  {/* Content Section */}
                  {/* <div className="relative p-5 space-y-3"> */}
                  {/* Title */}
                  {/* <div className="text-center space-y-1.5">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {t(caseItem.titleAr, caseItem.titleEn)}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {t(caseItem.procedureAr, caseItem.procedureEn)}
                      </p>
                    </div> */}

                  {/* Divider */}
                  {/* <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" /> */}

                  {/* View Details Button */}
                  {/* <button className="w-full py-2.5 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary font-medium text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {t("عرض التفاصيل", "View Details")}
                    </button>
                  </div> */}

                  {/* Bottom Accent Line */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      {/* دعوة للحجز */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-4 text-lg">
            {t("هل تريد نفس النتائج؟", "Want the same results?")}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-medium"
          >
            <Sparkles className="w-5 h-5" />
            {t("احجز استشارة مجانية", "Book Free Consultation")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

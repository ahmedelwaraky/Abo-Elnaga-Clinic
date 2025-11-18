import { Award, GraduationCap, Heart, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import doctorImage from "@/assets/img/naga.png";

const AboutDoctor = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: Award,
      labelAr: "سنوات الخبرة",
      labelEn: "Years Experience",
      value: "+12",
    },
    {
      icon: Users,
      labelAr: "المرضى السعداء",
      labelEn: "Happy Patients",
      value: "+2300",
    },
    {
      icon: GraduationCap,
      labelAr: "الشهادات",
      labelEn: "Certifications",
      value: "6",
    },
    {
      icon: Heart,
      labelAr: "نسبة النجاح",
      labelEn: "Success Rate",
      value: "100%",
    },
  ];

  const specializations = [
    { ar: "طب الأسنان التجميلي", en: "Cosmetic Dentistry" },
    { ar: "زراعة الأسنان", en: "Dental Implants" },
    { ar: "التقويم الشفاف", en: "Clear Aligners" },
    { ar: "التقويم المتحرك", en: "Removable Braces" },
    { ar: "الأطقم المتحركة", en: "Dentures" },
    { ar: "علاج الجذور", en: "Root Canal" },
    { ar: "تبييض الأسنان", en: "Teeth Whitening" },
    { ar: "القشور الخزفية", en: "Veneers" },
    { ar: "طب أسنان الأطفال", en: "Pediatric Dentistry" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* صورة الدكتور */}
          <div className="relative animate-scale-in order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-strong group bg-white dark:bg-white">
              <img
                src={doctorImage}
                alt={t("د. أحمد أبو النجا", "Dr. Ahmed Abo Elnaga")}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* البادج العائم */}
            <div
              className={`absolute -bottom-6 ${
                language === "ar" ? "-left-6" : "-right-6"
              } bg-accent text-accent-foreground p-6 rounded-xl shadow-strong animate-float`}
            >
              <div className="text-3xl font-bold">+12</div>
              <div className="text-sm font-medium">
                {t("سنة خبرة", "Years Experience")}
              </div>
            </div>
          </div>

          {/* معلومات الدكتور */}
          <div
            className={`animate-slide-in-left ${
              language === "ar" ? "text-right" : "text-left"
            } order-1 lg:order-2`}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t("تعرف على د. أحمد أبو النجا", "Meet Dr. Ahmed Abo Elnaga")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t(
                "أخصائي طب وجراحة الفم وتقويم الأسنان",
                "Specialist in Oral Surgery and Orthodontics"
              )}
            </p>

            {/* السيرة التعريفية */}
            <div className="space-y-4 mb-8">
              <p className="text-foreground leading-relaxed">
                {t(
                  "الدكتور أحمد أبو النجا بخبرة أكثر من 12 سنة في مجال طب الأسنان منذ تخرجه عام 2013. حاصل على بكالوريوس طب وجراحة الفم والأسنان، ودبلوم متقدم في زراعة الأسنان والتجميل ودبلوم متقدم في تقويم الأسنان. تخصص الدكتور أحمد في تقويم الأسنان، ويسعى دائمًا لمواكبة أحدث التقنيات لتقديم أفضل رعاية لمرضاه.",
                  "With over 12 years of experience in dentistry since graduating in 2013, Dr. Ahmed Abo Elnaga holds a Bachelor's degree in Dental Surgery, an advanced diploma in implantology and aesthetics, and an advanced diploma in orthodontics. He specializes in orthodontics and continuously keeps up with the latest technologies to provide the best care for his patients."
                )}
              </p>
            </div>

            {/* التخصصات */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t("التخصصات", "Specializations")}
              </h3>
              <div
                className={`grid gap-3 ${
                  language === "ar"
                    ? "grid-cols-3 justify-items-start"
                    : "grid-cols-3 justify-items-end"
                }`}
              >
                {specializations.map((spec, index) => (
                  <span
                    key={spec.ar}
                    className="px-4 py-2 bg-primary-light text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {t(spec.ar, spec.en)}
                  </span>
                ))}
              </div>
            </div>

            {/* الإحصائيات */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-card rounded-xl shadow-soft hover:shadow-strong hover:-translate-y-1 transition-all duration-300 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t(stat.labelAr, stat.labelEn)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;

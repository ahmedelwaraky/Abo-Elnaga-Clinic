import { Smile, Sparkles, Shield, Zap, Activity, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Shield, // ممكن تغيّر الأيقونة حسب اختيارك
    titleAr: "زراعة الأسنان",
    titleEn: "Dental Implants",
    descriptionAr: "استرجع ابتسامتك بقوة وثقة! زراعة الأسنان في عيادات أبو النجا هي الحل الأمثل لتعويض الأسنان المفقودة بدقة عالية وثبات يشبه الأسنان الطبيعية تمامًا. نستخدم أحدث التقنيات لضمان مظهر طبيعي ووظيفة مثالية تمكّنك من المضغ والتحدث دون أي قلق.",
    descriptionEn: "Restore your smile with confidence! Abu Naga Clinics' dental implants are the perfect solution to replace missing teeth with high precision and natural-like stability. We use the latest technology to ensure a natural appearance and perfect function for worry-free chewing and speaking.",
  },
  {
    icon: Zap,
    titleAr: "تقويم الأسنان",
    titleEn: "Orthodontics",
    descriptionAr: "نمنحك ابتسامة مستقيمة ترفع ثقتك بنفسك! سواء كان لديك تزاحم في الأسنان أو بروز أو فراغات، نوفر جميع حلول التقويم الحديثة مثل التقويم الشفاف والمعدني والسيراميك، بخطة علاج مصممة خصيصًا لك.",
    descriptionEn: "Straighten your teeth and boost your confidence! Whether you have crowding, protrusion, or gaps, we provide all modern orthodontic solutions like clear, metal, and ceramic braces with a treatment plan tailored just for you.",
  },
  {
    icon: Smile,
    titleAr: "طب أسنان الأطفال",
    titleEn: "Pediatric Dentistry",
    descriptionAr: "نهتم بابتسامة طفلك منذ يومه الأول! جلسات مريحة وداعمة تمنع الخوف من طبيب الأسنان مع أحدث طرق الوقاية والعلاج للحفاظ على الأسنان اللبنية والدائمة قوية وصحية.",
    descriptionEn: "Caring for your child's smile from day one! Comfortable and supportive sessions prevent fear of the dentist, using the latest prevention and treatment methods to keep primary and permanent teeth strong and healthy.",
  },
  {
    icon: Sparkles,
    titleAr: "تجميل الأسنان",
    titleEn: "Cosmetic Dentistry",
    descriptionAr: "لسه مبتسم؟ خليه أجمل! عدسات الأسنان – تبييض – تنسيق خط الابتسامة… فريق متخصص يمنحك جمال الأسنان اللي يليق بيك ويظهر شخصيتك.",
    descriptionEn: "Still smiling? Make it even better! Veneers, whitening, and smile line design… Our specialized team gives you the perfect smile that reflects your personality.",
  },
  {
    icon: Star,
    titleAr: "تركيبات الأسنان",
    titleEn: "Dental Restorations",
    descriptionAr: "حلول متقدمة لتعويض الأسنان المفقودة أو الضعيفة بتصميم دقيق يشبه الطبيعي تمامًا، لراحة ومضغ أفضل ومظهر أكثر جمالًا.",
    descriptionEn: "Advanced solutions to replace missing or weak teeth with precise designs that mimic natural teeth for better comfort, chewing, and aesthetics.",
  },
  {
    icon: Activity,
    titleAr: "حشو العصب",
    titleEn: "Root Canal Treatment",
    descriptionAr: "من غير ألم.. ننقذ سنك! تقنية علاج العصب الحديثة تخلّصك من الالتهاب وتحافظ على الأسنان لسنوات طويلة بدل خلعها.",
    descriptionEn: "Pain-free root canal treatment! Modern techniques eliminate infection and preserve your teeth for years instead of extraction.",
  },

];


const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t("خدماتنا لطب الأسنان", "Our Dental Services")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("رعاية أسنان شاملة بأحدث التقنيات وخطط علاج شخصية", "Comprehensive dental care with advanced technology and personalized treatment plans")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-strong transition-all duration-300 border-border hover:border-primary/50 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {t(service.titleAr, service.titleEn)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t(service.descriptionAr, service.descriptionEn)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

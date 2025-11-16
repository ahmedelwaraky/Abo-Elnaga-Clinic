import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import User from "../../src/assets/img/userIcon.png";

const testimonials = [
  {
    nameAr: "أحمد محمود",
    nameEn: "Ahmed Mahmoud",
    treatmentAr: "زراعة أسنان",
    treatmentEn: "Dental Implants",
    rating: 5,
    commentAr: "تجربة رائعة جداً! الدكتور محترف للغاية والعيادة نظيفة ومريحة. النتيجة فاقت توقعاتي بكثير.",
    commentEn: "Amazing experience! The doctor is very professional and the clinic is clean and comfortable. The result exceeded my expectations.",
    image: User
  },
  {
    nameAr: "فاطمة علي",
    nameEn: "Fatma Ali",
    treatmentAr: "تبييض الأسنان",
    treatmentEn: "Teeth Whitening",
    rating: 5,
    commentAr: "خدمة ممتازة وطاقم طبي محترف جداً. ابتسامتي أصبحت أجمل بكثير وأنا سعيدة جداً بالنتيجة.",
    commentEn: "Excellent service and very professional medical staff. My smile has become much more beautiful and I am very happy with the result.",
    image: User
  },
  {
    nameAr: "خالد السيد",
    nameEn: "Khaled Al-Sayed",
    treatmentAr: "تقويم الأسنان",
    treatmentEn: "Orthodontics",
    rating: 5,
    commentAr: "أفضل عيادة أسنان في المنطقة! الدكاترة متعاونين جداً والمواعيد دائماً في وقتها.",
    commentEn: "Best dental clinic in the area! The doctors are very cooperative and appointments are always on time.",
    image: User
  },
  {
    nameAr: "مريم حسن",
    nameEn: "Mariam Hassan",
    treatmentAr: "علاج العصب",
    treatmentEn: "Root Canal",
    rating: 5,
    commentAr: "كنت خائفة جداً لكن الدكتور طمني وكانت العملية سهلة وبدون ألم. شكراً لكم على الاهتمام.",
    commentEn: "I was very scared but the doctor reassured me and the procedure was easy and painless. Thank you for your care.",
    image: User
  },
  {
    nameAr: "عمر إبراهيم",
    nameEn: "Omar Ibrahim",
    treatmentAr: "ابتسامة هوليود",
    treatmentEn: "Hollywood Smile",
    rating: 5,
    commentAr: "النتيجة أكثر من رائعة! ابتسامتي تغيرت بالكامل وأصبحت أكثر ثقة بنفسي. أنصح بشدة!",
    commentEn: "The result is more than wonderful! My smile has completely changed and I have become more confident. Highly recommend!",
    image: User
  },
  {
    nameAr: "نور محمد",
    nameEn: "Nour Mohamed",
    treatmentAr: "حشو تجميلي",
    treatmentEn: "Cosmetic Filling",
    rating: 5,
    commentAr: "عيادة راقية جداً وخدمة ممتازة. الحشو التجميلي طبيعي جداً ومحدش لاحظه.",
    commentEn: "Very elegant clinic and excellent service. The cosmetic filling is very natural and no one noticed it.",
    image: User
  }
];

const Testimonials = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Quote className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t("آراء عملائنا", "Patient Testimonials")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("اكتشف تجارب المرضى الذين اختاروا عيادتنا لرعاية أسنانهم", "Discover the experiences of patients who chose our clinic for their dental care")}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                        <img 
                          src={testimonial.image} 
                          alt={t(testimonial.nameAr, testimonial.nameEn)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 bg-primary rounded-full p-1">
                        <Quote className="w-3 h-3 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="font-bold text-lg mb-1">
                        {t(testimonial.nameAr, testimonial.nameEn)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t(testimonial.treatmentAr, testimonial.treatmentEn)}
                      </p>
                      <div className="flex gap-1 justify-end">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-right">
                    "{t(testimonial.commentAr, testimonial.commentEn)}"
                  </p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselNext className="static transform-none" />
            <CarouselPrevious className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
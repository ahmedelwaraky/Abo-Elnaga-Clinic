import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import Salah from "../../src/assets/Salah.png";
import Abbas from "../../src/assets/Abbas.png";
import Omar from "../../src/assets/Omar.png";
import Galal from "../../src/assets/Galal.png";
import Ibrahim from "../../src/assets/img/ibrahim.png";
import yousef from "../../src/assets/img/yousef.png";
import Afnan from "../../src/assets/Afnan.png";
import wafa from "../../src/assets/Wafa.png";
import Aya from "../../src/assets/Aya.png";
import nada from "../../src/assets/Nada.png";
import maraim from "../../src/assets/Mariam.png";
import Hader from "../../src/assets/Hadeer.png";

const teamMembers = [
  {
    id: 1,
    nameAr: "د. أحمد جلال",
    nameEn: "Dr. Ahmed Galal",
    roleAr: "أخصائي تجميل الأسنان",
    roleEn: "Cosmetic Dentist",
    specialtyAr: "أخصائي الحشوات التجميلية وحشو العصب والتركيبات",
    specialtyEn: "Aesthetic fillings, root canal & prosthetics specialist",
    img: Galal,
  },
  {
    id: 2,
    nameAr: "د. محمد عباس",
    nameEn: "Dr. Mohamed Abbas",
    roleAr: "أخصائي علاج الجذور",
    roleEn: "Endodontist",
    specialtyAr: "أخصائي حشو العصب",
    specialtyEn: "Root canal specialist",
    img: Abbas,
  },
  {
    id: 3,
    nameAr: "د. محمد صلاح",
    nameEn: "Dr. Mohamed Salah",
    roleAr: "أخصائي تجميل الأسنان",
    roleEn: "Cosmetic Dentist",
    specialtyAr: "اخصائي الحشوات التجميلية",
    specialtyEn: "Aesthetic fillings specialist",
    img: Salah,
  },
  {
    id: 4,
    nameAr: "د. يوسف أسامة",
    nameEn: "Dr. Youssef Osama",
    roleAr: "أخصائي تجميل الأسنان",
    roleEn: "Cosmetic Dentist",
    specialtyAr: "أخصائي الحشوات التجميلية وحشو العصب والتركيبات",
    specialtyEn: "Aesthetic fillings, root canal & prosthetics specialist",
    img: yousef,
  },
  {
    id: 5,
    nameAr: "د. أحمد إبراهيم",
    nameEn: "Dr. Ahmed Ibrahim",
    roleAr: "أخصائي علاج الجذور والتركيبات",
    roleEn: "Endodontist & Prosthodontist",
    specialtyAr: "أخصائي حشو العصب والحشوات التجميلية والتركيبات",
    specialtyEn: "Root canal, aesthetic fillings & prosthetics specialist",
    img: Ibrahim,
  },
  {
    id: 6,
    nameAr: "د. عمر سمير",
    nameEn: "Dr. Omar Samir",
    roleAr: "أخصائي جراحة وزراعة الأسنان",
    roleEn: "Implantologist",
    specialtyAr: "أخصائي جراحة وزراعة الاسنان",
    specialtyEn: "Dental surgery & implant specialist",
    img: Omar,
  },
  {
    id: 7,
    nameAr: "د. أفنان حازم",
    nameEn: "Dr. Afnan Hazem",
    roleAr: "أخصائي التركيبات المتحركة",
    roleEn: "Removable Prosthodontist",
    specialtyAr: "أخصائي التركيبات المتحركة",
    specialtyEn: "Removable dentures & prosthetics specialist",
    img: Afnan,
  },
  {
    id: 8,
    nameAr: "د. هدير الفقي",
    nameEn: "Dr. Hadeer El Feky",
    roleAr: "أخصائي تركيبات الأسنان",
    roleEn: "Prosthodontist",
    specialtyAr: "أخصائي تركيبات الأسنان",
    specialtyEn: "Dental prosthetics specialist",
    img: Hader,
  },
  {
    id: 9,
    nameAr: "د. مريم ناجي",
    nameEn: "Dr. Mariam Nagi",
    roleAr: "أخصائي تجميل الأسنان",
    roleEn: "Cosmetic Dentist",
    specialtyAr: "أخصائيه الحشوات التجميلية و التركيبات",
    specialtyEn: "Aesthetic fillings & prosthetics specialist",
    img: maraim,
  },
  {
    id: 10,
    nameAr: "د. ندى فرحات",
    nameEn: "Dr. Nada Farahat",
    roleAr: "أخصائية علاج الجذور والتجميل",
    roleEn: "Endodontist & Aesthetic Dentist",
    specialtyAr: "أخصائية حشو العصب والحشوات التجميلية والتركيبات الثابتة",
    specialtyEn:
      "Root canal, aesthetic fillings & fixed prosthetics specialist",
    img: nada,
  },
  {
    id: 11,
    nameAr: "د. وفاء قاسم",
    nameEn: "Dr. Wafaa Kassem",
    roleAr: "أخصائي طب أسنان الأطفال",
    roleEn: "Pediatric Dentist",
    specialtyAr:
      "أخصائي طب أسنان الأطفال - ماجيستير طب أسنان الأطفال جامعة طنطا",
    specialtyEn: "Pediatric dentistry specialist - MSc, Tanta University",
    img: wafa,
  },
  {
    id: 12,
    nameAr: "د. آيه أشرف",
    nameEn: "Dr. Aya Ashraf",
    roleAr: "أخصائية تجميل الأسنان",
    roleEn: "Aesthetic Dentist",
    specialtyAr: "أخصائية الحشوات والتركيبات التجميلية",
    specialtyEn: "Aesthetic fillings & prosthetics specialist",
    img: Aya,
  },
];

const Team = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-20 bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t("تعرف على فريقنا المتخصص", "Meet Our Expert Team")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "محترفون ملتزمون بصحتك وراحتك في طب الأسنان",
              "Dedicated professionals committed to your dental health and comfort"
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-strong animate-fade-in-up">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 dark:bg-white">
                    {/* Doctor Image */}
                    <img
                      src={member.img}
                      alt={t(member.nameAr, member.nameEn)}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLElement;
                        target.style.display = "none";
                        if (target.nextElementSibling) {
                          (target.nextElementSibling as HTMLElement).style.display = "flex";
                        }
                      }}
                    />

                    {/* Fallback: Initials Circle (hidden by default) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/60 dark:from-gray-800 dark:to-gray-700 items-center justify-center hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-16 translate-x-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/10 rounded-full translate-y-12 -translate-x-12" />

                      <div className="relative z-10 w-40 h-40 bg-primary-foreground rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                        <span className="text-5xl font-bold text-primary">
                          {t(member.nameAr, member.nameEn)
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 space-y-4">
                    {/* Name & Role */}
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {t(member.nameAr, member.nameEn)}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {t(member.roleAr, member.roleEn)}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                    {/* Social Links */}
                    {/* <div className="flex justify-center gap-3">
                      <button className="group/btn p-3 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-6">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="group/btn p-3 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-rotate-6">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div> */}
                  </div>

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
    </section>
  );
};

export default Team;

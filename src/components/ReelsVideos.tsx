import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Vedio1 from "../../src/assets/vedios/omar3.mp4";
import Vedio2 from "../../src/assets/vedios/aya.mp4";
import Vedio3 from "../../src/assets/vedios/wafaa.mp4";
import Vedio4 from "../../src/assets/vedios/mariam.mp4";
import Vedio5 from "../../src/assets/vedios/ahmed.mp4";
import Vedio6 from "../../src/assets/vedios/nada.mp4";
import Vedio7 from "../../src/assets/vedios/mariam1.mp4";
import Vedio8 from "../../src/assets/vedios/omar2.mp4";
import Vedio9 from "../../src/assets/vedios/wafaa1.mp4";
import Vedio10 from "../../src/assets/vedios/aya1.mp4";
import Vedio11 from "../../src/assets/vedios/omar.mp4";
import Vedio12 from "../../src/assets/vedios/wafaa2.mp4";

const videos = [
  {
    id: 1,
    titleAr: "زراعة الأسنان",
    titleEn: "Dental Implants",
    duration: "0:50",
    categoryAr: "زراعة الأسنان",
    categoryEn: "Dental Implants",
    src: Vedio1,
  },
  {
    id: 2,
    titleAr: "التسوس الخفي",
    titleEn: "Hidden Cavities",
    duration: "1:45",
    categoryAr: "التسوس الخفي",
    categoryEn: "Hidden Cavities",
    src: Vedio2,
  },
  {
    id: 3,
    titleAr: "حشو العصب",
    titleEn: "Root Canal Treatment",
    duration: "3:15",
    categoryAr: "حشو العصب",
    categoryEn: "Root Canal Treatment",
    src: Vedio3,
  },
  {
    id: 4,
    titleAr: "كسور الأسنان",
    titleEn: "Tooth Fractures",
    duration: "2:00",
    categoryAr: "كسور الأسنان",
    categoryEn: "Tooth Fractures",
    src: Vedio4,
  },
  {
    id: 5,
    titleAr: "نزيف اللثة",
    titleEn: "Gum Bleeding",
    duration: "4:20",
    categoryAr: "نزيف اللثة",
    categoryEn: "Gum Bleeding",
    src: Vedio5,
  },
  {
    id: 6,
    titleAr: "الالتهابات",
    titleEn: "Dental Infections",
    duration: "2:30",
    categoryAr: "الالتهابات",
    categoryEn: "Dental Infections",
    src: Vedio6,
  },
  {
    id: 7,
    titleAr: "ابتسامة هوليود",
    titleEn: "Hollywood Smile",
    duration: "1:55",
    categoryAr: "ابتسامة هوليود",
    categoryEn: "Hollywood Smile",
    src: Vedio7,
  },
  {
    id: 8,
    titleAr: "التهابات ضرس العقل",
    titleEn: "Wisdom Tooth Inflammation",
    duration: "3:40",
    categoryAr: "التهابات ضرس العقل",
    categoryEn: "Wisdom Tooth Inflammation",
    src: Vedio8,
  },
  {
    id: 9,
    titleAr: "التخدير الكلي",
    titleEn: "General Anesthesia",
    duration: "2:15",
    categoryAr: "التخدير الكلي",
    categoryEn: "General Anesthesia",
    src: Vedio9,
  },
  {
    id: 10,
    titleAr: "حشو العصب",
    titleEn: "Root Canal Treatment",
    duration: "1:30",
    categoryAr: "حشو العصب",
    categoryEn: "Root Canal Treatment",
    src: Vedio10,
  },
  {
    id: 11,
    titleAr: "زراعة الأسنان",
    titleEn: "Dental Implants",
    duration: "4:00",
    categoryAr: "زراعة الأسنان",
    categoryEn: "Dental Implants",
    src: Vedio11,
  },
  {
    id: 12,
    titleAr: "أسنان القرش",
    titleEn: "Shark Teeth",
    duration: "2:45",
    categoryAr: "أسنان القرش",
    categoryEn: "Shark Teeth",
    src: Vedio12,
  },
];
const ReelsVideos = () => {
  const { t, language } = useLanguage();
  const videoRefs = useRef([]);

  // لما فيديو يشتغل → نوقف الباقي
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  return (
    <section id="videos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t("فيديوهات تعليمية وريلز", "Educational Videos & Reels")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "تعلم عن رعاية الأسنان وشاهد إجراءاتنا عملياً",
              "Learn about dental care and see our procedures in action"
            )}
          </p>
        </div>

        {/* الكاروسيل */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: language === "ar" ? "rtl" : "ltr",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video, index) => (
              <CarouselItem
                key={video.id}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Card
                  className="group hover:shadow-strong transition-all duration-300 border-border hover:border-primary/50 overflow-hidden cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/16] overflow-hidden">
                      {/* ✅ الفيديو */}
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video.src}
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover"
                        onPlay={() => handlePlay(index)}
                      />

                      {/* المدة */}
                      <div className="absolute bottom-2 right-2 bg-foreground/80 text-primary-foreground px-2 py-0.5 rounded text-xs font-medium">
                        {video.duration}
                      </div>

                      {/* الفئة */}
                      <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium">
                        {t(video.categoryAr, video.categoryEn)}
                      </div>
                    </div>

                    {/* العنوان */}
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {t(video.titleAr, video.titleEn)}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
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

export default ReelsVideos;
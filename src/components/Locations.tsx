import { MapPin, Phone, Clock, Mail, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const locations = [
  {
    nameAr: "عيادات قويـسنا",
    addressAr: "أمام البنك الأهلي القديم - قويسنا - المنوفية",
    nameEn: "Quesna Clinic",
    addressEn: "In front of the National Bank - Quesna - Menoufia",
    tel: "0482575564",
    phone: "01227599182",
    email: "downtown@dentalcare.com",
    hoursAr: "السبت-الخميس :-  10 صباحاً : 10 مساءً",
    hoursEn: "Sat-Thu: 10am : 10pm",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27487.60659373256!2d31.1044828743164!3d30.550693400000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d9f56e16e0d5%3A0xd3ec8f3b8e96f084!2z2KfZhNio2YbZgyDYp9mE2KfZh9mE2Ykg2KfZhNmF2LXYsdmKINmB2LHYuSDZgtmI2YrYs9mG2KcgLSBOQkUgUXdlc25hIEJyYW5jaA!5e0!3m2!1sen!2seg!4v1762806816125!5m2!1sen!2seg",
  },
  {
    nameAr: "عيادات طه شبرا",
    addressAr: "أمام البنك الزراعي - طه شبرا - قويسنا - المنوفية",
    nameEn: "Taha Shubra Branch",
    addressEn: "In front of the Agricultural Bank - Taha Shubra - Menoufia",
    tel: "0482487272",
    phone: "01040467770",
    email: "maadi@dentalcare.com",
    hoursAr: "السبت-الخميس :-  10 صباحاً : 10 مساءً",
    hoursEn: "Sat-Thu: 10am : 10pm",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d429.57415070783975!2d31.09682001622604!3d30.53253997620538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d9e1b5629d97%3A0x8aab8f10f0257c73!2z2KfZhNmI2K3Yr9ipINin2YTZhdit2YTYqSDYqNi32Ycg2LTYqNix2Kc!5e0!3m2!1sen!2seg!4v1762807081766!5m2!1sen!2seg",
  },
  {
    nameAr: "عيادات العجايزة",
    nameEn: "Om Khenan Clinic",
    addressAr: " أمام موقف أم خنان - بجوار صيدلية دكتورة صابرين",
    addressEn: "Al - Quesna - Menoufia",
    tel: "0482567634",
    phone: "01070103436",
    email: "",
    hoursAr: "السبت-الخميس :-  10 صباحاً : 10 مساءً",
    hoursEn: "Sat-Thu: 10am : 10pm",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19444.36181272969!2d31.091908766486135!3d30.512271495424578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d83b8e312205%3A0x460d9424d911dc48!2z2YXYsdmD2LIg2LTYqNin2Kgg2KfZhNi52KzYp9mK2LLZhw!5e0!3m2!1sar!2seg!4v1762808165744!5m2!1sar!2seg",
  },
];

const Locations = () => {
  const { t, language } = useLanguage();

  return (
    <section id="locations" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t("فروعنا المريحة", "Our Convenient Locations")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "قم بزيارتنا في أي من فروعنا الحديثة للحصول على أفضل تجربة طبية",
              "Visit any of our modern branches for the best dental experience"
            )}
          </p>
        </div>

        {/* الكروت */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-strong transition-all duration-300 border-border hover:border-primary/50 hover:-translate-y-2 animate-fade-in-up bg-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {t(location.nameAr, location.nameEn)}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* الخريطة */}
                <div className="w-full h-56 rounded-xl overflow-hidden border border-border">
                  {location.map ? (
                    <iframe
                      src={location.map}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0"
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 text-muted-foreground text-sm">
                      {t("الخريطة غير متاحة حالياً", "Map not available yet")}
                    </div>
                  )}
                </div>

                {/* البيانات */}
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <span>{t(location.addressAr, location.addressEn)}</span>
                  </div>

                  <div className="flex gap-3">
                    <Headphones className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    {location.tel && location.tel !== "قريباً" ? (
                      <a
                        href={`tel:${location.tel}`}
                        className="text-primary hover:underline"
                      >
                        {location.tel}
                      </a>
                    ) : (
                      <span>{t("قريباً", "Coming soon")}</span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    {location.phone && location.phone !== "قريباً" ? (
                      <a
                        href={`tel:${location.phone}`}
                        className="text-primary hover:underline"
                      >
                        {location.phone}
                      </a>
                    ) : (
                      <span>{t("قريباً", "Coming soon")}</span>
                    )}
                  </div>

                  {/* {location.email && (
                    <div className="flex gap-3">
                      <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-primary hover:underline"
                      >
                        {location.email}
                      </a>
                    </div>
                  )} */}

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <span>{t(location.hoursAr, location.hoursEn)}</span>
                  </div>
                </div>

                {/* زر الاتجاهات */}
                {location.map && (
                  <Button variant="default" className="w-full mt-4" asChild>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        location.addressEn || location.addressAr
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("احصل على الاتجاهات", "Get Directions")}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;

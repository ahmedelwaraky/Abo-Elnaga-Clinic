import { useEffect, useState } from "react";
import logo from "@/assets/img/Logo-1.png";

const Loading = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 animate-fade-in">
        {/* اللوجو */}
        <div className="relative">
          {/* دائرة متوهجة خلف اللوجو */}
          <div className="absolute inset-0 bg-primary-foreground/20 rounded-full blur-2xl animate-pulse scale-150" />

          {/* اللوجو */}
          <div className="relative bg-white rounded-full p-8 shadow-strong animate-scale-in">
            <img
              src={logo}
              alt="Dental Clinic Logo"
              className="w-32 h-32 object-contain animate-pulse"
            />
          </div>

          {/* دائرة دوارة */}
          <div className="absolute -inset-2 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
        </div>

        {/* الشعار */}
        <div className="text-center space-y-2 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary-foreground leading-tight">
            عيادات أبو النجا لتقويم وزراعة الأسنان
            <br />
            <span className="text-xl text-primary-foreground/90 font-medium block mt-1">
              Abo Elnaga Dental Clinics
            </span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-2">
            خبراء طب الأسنان
          </p>
        </div>

        {/* شريط التقدم */}
        <div className="w-80 space-y-2 animate-fade-in delay-500">
          <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-accent rounded-full transition-all duration-300 ease-out shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center text-primary-foreground/90 text-sm font-medium">
            {progress}%
          </div>
        </div>

        {/* نقاط متحركة */}
        <div className="flex gap-2 animate-fade-in delay-700">
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce delay-150" />
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce delay-300" />
        </div>
      </div>
    </div>
  );
};

export default Loading;

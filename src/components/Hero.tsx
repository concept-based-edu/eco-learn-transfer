import { BookOpen, Target, CheckCircle, Lightbulb } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            이해중심 교육과정 설계
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Understanding by Design (UbD) Framework
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            목표–평가–학습 경험의 정합성을 갖춘 프로젝트 기반 단원 설계
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Target, title: "1단계: 목표", desc: "핵심 개념과 이해" },
              { icon: CheckCircle, title: "2단계: 평가", desc: "이해의 증거" },
              { icon: Lightbulb, title: "3단계: 학습 경험", desc: "교수학습 계획" }
            ].map((stage, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <stage.icon className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{stage.title}</h3>
                <p className="text-sm text-white/80">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

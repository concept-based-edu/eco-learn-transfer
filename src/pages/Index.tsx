import Hero from "@/components/Hero";
import ProjectHeader from "@/components/ProjectHeader";
import StageOne from "@/components/StageOne";
import StageTwo from "@/components/StageTwo";
import StageThree from "@/components/StageThree";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <ProjectHeader />
        </div>
      </section>

      <StageOne />
      <StageTwo />
      <StageThree />

      <footer className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            이해중심 교육과정 설계 (Understanding by Design Framework)
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            목표–평가–학습 경험의 정합성을 갖춘 프로젝트 기반 단원 설계
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

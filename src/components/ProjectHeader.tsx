import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectHeader = () => {
  return (
    <Card className="p-8 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          🌍
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className="bg-primary text-primary-foreground">초등 6학년</Badge>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">통합 교과</Badge>
            <Badge variant="outline">사회 · 국어 · 미술</Badge>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-foreground">우리가 지키는 지속가능한 지구</h2>
          <p className="text-xl text-muted-foreground mb-4">프로젝트명: 그린 NGO 홍보대사</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 rounded-xl bg-card border">
          <div className="text-sm text-muted-foreground mb-1">핵심 개념</div>
          <div className="font-semibold text-foreground">지속가능성 · 책임</div>
        </div>
        <div className="p-4 rounded-xl bg-card border">
          <div className="text-sm text-muted-foreground mb-1">핵심 역량</div>
          <div className="font-semibold text-foreground">창의융합 · 공동체</div>
        </div>
        <div className="p-4 rounded-xl bg-card border">
          <div className="text-sm text-muted-foreground mb-1">수업 형태</div>
          <div className="font-semibold text-foreground">프로젝트 기반 학습</div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectHeader;

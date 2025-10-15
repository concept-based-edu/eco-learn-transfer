import { Card } from "@/components/ui/card";
import { Lightbulb, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const StageThree = () => {
  const timeline = [
    { stage: "관계맺기", code: "Relate", sessions: "1–3", subject: "국어", activity: "환경영화 감상 → 감상문 작성 → 감상 공유 및 주제 연결", achievement: "[6국03-02]", color: "primary" },
    { stage: "집중하기", code: "Focus", sessions: "4–5", subject: "사회", activity: "지구촌 환경 문제의 유형 및 지속가능성 개념 탐색", achievement: "[6사08-05]", color: "secondary" },
    { stage: "조사하기", code: "Investigate", sessions: "6–8", subject: "사회", activity: "환경 문제 조사 및 지도 제작, 자료 분석, 토의", achievement: "[6사08-05]", color: "accent" },
    { stage: "일반화하기", code: "Generalize", sessions: "9–10", subject: "사회", activity: "'우리의 지속가능한 미래 선언문' 작성 및 발표(공개수업)", achievement: "[6사08-05]", color: "primary", highlight: true },
    { stage: "집중·조사·조직", code: "Multiple", sessions: "11–15", subject: "국어", activity: "캠페인 영상 사례 분석 → 대본 작성 → 발표 구성", achievement: "[6국01-05]", color: "secondary" },
    { stage: "전이하기", code: "Transfer", sessions: "16–18", subject: "미술", activity: "영상 제작(공익광고, 브이로그 등) 및 상영회", achievement: "[6미02-05], [6국01-05]", color: "accent" },
    { stage: "성찰하기", code: "Reflect", sessions: "19", subject: "사회", activity: "'6개월 후 나에게 보내는 편지' 쓰기 (개인 실천 다짐)", achievement: "[6사08-05]", color: "primary" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg">
            <Lightbulb className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">3단계. 학습 경험</h2>
            <p className="text-muted-foreground">Teaching & Learning Plan</p>
          </div>
        </div>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">학습 단계별 활동</h3>
          </div>

          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div 
                key={i} 
                className={`relative pl-8 pb-8 ${i !== timeline.length - 1 ? 'border-l-2 border-border' : ''} ${item.highlight ? 'bg-accent/5 -ml-4 pl-12 pr-4 py-4 rounded-xl' : ''}`}
              >
                <div className={`absolute left-0 -ml-2 w-4 h-4 rounded-full bg-${item.color} ring-4 ring-background`}></div>
                
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge className={`bg-${item.color} text-${item.color}-foreground`}>
                    {item.sessions}차시
                  </Badge>
                  <Badge variant="outline">{item.subject}</Badge>
                  <h4 className="font-bold text-lg text-foreground">
                    {item.stage} <span className="text-muted-foreground text-sm font-normal">({item.code})</span>
                  </h4>
                  {item.highlight && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      공개수업
                    </Badge>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-2">{item.activity}</p>
                <p className="text-xs text-muted-foreground">성취기준: {item.achievement}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
            <h4 className="font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
              <span className="text-2xl">🧠</span>
              학습 흐름 요약
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">국어(매체 감상)</strong> → <strong className="text-foreground">사회(개념 탐구)</strong> → <strong className="text-foreground">국어(표현 구성)</strong> → <strong className="text-foreground">미술(창의적 시각화)</strong> → <strong className="text-foreground">사회(실천 성찰)</strong></p>
              <p className="mt-3 leading-relaxed">언어로 사고하고, 개념으로 탐구하며, 예술로 실천하는 통합적 사고 여정</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/5 to-transparent">
            <h4 className="font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
              <span className="text-2xl">✨</span>
              설계의 핵심
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p>학생이 <strong className="text-foreground">지속가능성과 책임의 개념을 탐구</strong>하고, 그 이해를 <strong className="text-foreground">매체와 예술로 표현</strong>하며, <strong className="text-foreground">공동체 차원의 선언</strong>과 <strong className="text-foreground">개인 차원의 실천 다짐</strong>으로 마무리하는 전이 중심 프로젝트</p>
              <p className="mt-3">평가는 단순한 결과물이 아니라, 개념의 이해 → 탐구의 깊이 → 표현의 설득력 → 실천의 진정성이라는 <strong className="text-secondary">학습자의 성장 궤적</strong>을 본질적으로 드러내는 도구로 작동합니다.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StageThree;

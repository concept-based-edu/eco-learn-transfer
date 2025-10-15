import { Card } from "@/components/ui/card";
import { CheckCircle, FileText, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const StageTwo = () => {
  const rubric = [
    {
      area: "개념 이해",
      subtitle: "지속가능성과 책임의 의미와 관계 이해",
      levels: {
        A: "지속가능성과 책임의 관계를 구체적 사례로 설명하고, 개인과 공동체의 관점을 통합적으로 제시한다.",
        B: "지속가능성과 책임의 개념을 정확히 설명하고, 관련 사례를 구체적으로 제시한다.",
        C: "개념의 의미를 부분적으로 이해하거나, 사례 설명이 불분명하다."
      }
    },
    {
      area: "탐구 및 문제 해결",
      subtitle: "환경 문제의 원인 분석과 해결 방안 탐색",
      levels: {
        A: "환경 문제의 원인과 결과를 논리적으로 분석하며, 창의적이고 실천 가능한 해결 방안을 제시한다.",
        B: "환경 문제의 원인과 결과를 근거를 들어 설명하고, 타당한 해결 방안을 제시한다.",
        C: "환경 문제의 원인이나 해결 방안 중 하나만 언급하거나 단순 나열 수준에 머문다."
      }
    },
    {
      area: "표현 및 소통",
      subtitle: "매체를 활용한 메시지 구성과 전달",
      levels: {
        A: "영상의 구조가 논리적이며, 언어적·시각적 표현이 창의적이고 설득력 있다. 청중을 고려한 메시지 전달이 탁월하다.",
        B: "영상의 주제가 명확하고 구성과 표현이 일관되며, 메시지가 청중에게 잘 전달된다.",
        C: "영상의 주제가 불분명하거나, 표현이 단조롭고 설득력이 부족하다."
      }
    },
    {
      area: "실천 및 성찰",
      subtitle: "학습을 통한 책임 의식과 행동 전이",
      levels: {
        A: "학습 경험을 바탕으로 구체적 실천 방안을 제안하고, 공동체의 책임 있는 행동으로 확장한다.",
        B: "개인의 실천 의지를 구체적으로 표현하고, 환경 보호의 필요성을 인식한다.",
        C: "학습 내용을 단순히 언급하거나, 실천 의지가 구체적이지 않다."
      }
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">2단계. 평가</h2>
            <p className="text-muted-foreground">Evidence of Understanding</p>
          </div>
        </div>

        <Card className="p-8 mb-8 bg-gradient-to-br from-accent/5 to-transparent">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold text-foreground">수행 과제 (GRASPS)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "G (Goal)", content: "지속가능한 미래를 위해 환경 보호의 중요성을 시민에게 알리고, 책임 있는 행동을 촉구한다.", color: "primary" },
              { label: "R (Role)", content: "'그린 NGO 홍보대사'로서 환경 문제를 조사하고 홍보 영상을 제작한다.", color: "secondary" },
              { label: "A (Audience)", content: "학교 구성원(학생·교사·학부모) 및 지역사회 시민", color: "accent" },
              { label: "S (Situation)", content: "학교에서 '지속가능한 지구' 주제의 환경 캠페인을 기획 중이며, 각 모둠이 주제를 선정해 영상으로 홍보해야 한다.", color: "primary" },
              { label: "P (Product)", content: "공익광고, 브이로그, 뮤직비디오 등 형태의 영상(1~3분)과 포스터 메시지", color: "secondary" },
              { label: "S (Standard)", content: "지속가능성·책임 개념 반영, 설득력 있는 구성, 매체 활용의 창의성, 협력적 수행, 실천 의지", color: "accent" }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={`bg-${item.color} text-${item.color}-foreground`}>{item.label.split(' ')[0]}</Badge>
                  <span className="text-sm font-medium text-muted-foreground">{item.label.substring(item.label.indexOf('('))}</span>
                </div>
                <p className="text-sm text-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">수행평가 루브릭</h3>
          </div>

          <div className="space-y-6">
            {rubric.map((item, i) => (
              <div key={i} className="border rounded-xl overflow-hidden">
                <div className="bg-muted p-4">
                  <h4 className="font-semibold text-lg text-foreground">{i + 1}. {item.area}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {Object.entries(item.levels).map(([level, desc], j) => (
                    <div key={j} className={`p-4 ${j !== 2 ? 'border-r border-border' : ''}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={level === 'A' ? 'default' : level === 'B' ? 'secondary' : 'outline'}>
                          {level === 'A' ? '기대 이상' : level === 'B' ? '기대 충족' : '기대 접근'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-muted/50">
            <h4 className="font-semibold mb-3 text-foreground">평가 해석</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <Badge className="mb-2">A - 기대 이상</Badge>
                <p className="text-muted-foreground">개념 이해가 전이되어 행동과 실천으로 확장됨</p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">B - 기대 충족</Badge>
                <p className="text-muted-foreground">성취기준을 충실히 달성하고 논리적으로 표현함</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-2">C - 기대 접근</Badge>
                <p className="text-muted-foreground">개념 이해와 표현이 부분적으로 드러남</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StageTwo;

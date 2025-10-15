import { Card } from "@/components/ui/card";
import { Target, HelpCircle, BookOpen, CheckSquare } from "lucide-react";

const StageOne = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
            <Target className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">1단계. 목표</h2>
            <p className="text-muted-foreground">Desired Results</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">핵심 질문</h3>
            </div>
            <ul className="space-y-3">
              {[
                "'지속가능한 미래'란 무엇일까?",
                "한 사람의 행동이 지구의 미래에 어떤 영향을 줄까?",
                "우리는 왜 책임 있는 시민으로 행동해야 할까?"
              ].map((question, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary font-semibold mt-0.5">•</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-semibold text-foreground">일반화 문장</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              지속가능성은 개인과 공동체가 환경에 대한 <strong className="text-secondary">책임 있는 선택</strong>을 할 때 유지될 수 있다.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <CheckSquare className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">학생이 이해해야 할 것</h3>
            </div>
            <ul className="space-y-2">
              {[
                "환경 문제는 개인의 행동과 사회 구조가 서로 얽혀 있다",
                "지속가능한 미래를 위해 공동체의 책임 있는 선택이 필요하다",
                "매체와 예술은 사회적 메시지를 전달하는 효과적인 도구가 될 수 있다"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-secondary font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <CheckSquare className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">학생이 할 수 있어야 하는 일</h3>
            </div>
            <ul className="space-y-2">
              {[
                "환경 문제를 조사·분석하고 해결 방안을 탐색한다",
                "지속가능성과 책임의 개념을 사례로 설명한다",
                "매체를 활용하여 환경 보호 메시지를 효과적으로 전달한다"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="p-6 mt-6 bg-muted/30">
          <h3 className="text-lg font-semibold mb-3 text-foreground">성취기준 정렬</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">사회:</strong> [6사08-05] 지구촌의 주요 환경 문제를 조사하여 해결 방안을 탐색하고, 환경 문제 해결에 협력하는 세계 시민의 자세를 기른다.</p>
            <p><strong className="text-foreground">국어:</strong> [6국03-02] 글이나 매체를 읽고 내용과 주제를 파악하며 자신의 생각과 느낌을 말하거나 쓴다. [6국01-05] 매체 자료를 활용하여 내용을 효과적으로 발표한다.</p>
            <p><strong className="text-foreground">미술:</strong> [6미02-05] 다양한 표현 방법의 특징과 과정을 탐색하여 활용할 수 있다.</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default StageOne;

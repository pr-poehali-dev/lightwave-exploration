import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Практика с первого дня",
    description: "Учитесь на реальном рынке под контролем наставника — реальные сделки, а не только теория.",
    icon: "target",
    badge: "Практика",
  },
  {
    title: "Стратегии, которые работают",
    description: "Готовые торговые системы для разных стилей: скальпинг, интрадей и среднесрок.",
    icon: "zap",
    badge: "Стратегии",
  },
  {
    title: "Риск-менеджмент",
    description: "Научим сохранять капитал и торговать с холодной головой — основа стабильного заработка.",
    icon: "lock",
    badge: "Защита",
  },
  {
    title: "Технический анализ",
    description: "Читайте графики, находите точки входа и выхода по свечам, уровням и индикаторам.",
    icon: "brain",
    badge: "Анализ",
  },
  {
    title: "Поддержка наставника",
    description: "Персональный куратор, разбор ваших сделок и обратная связь на каждом этапе обучения.",
    icon: "link",
    badge: "Ментор",
  },
  {
    title: "Доступ 24/7",
    description: "Все уроки, записи вебинаров и материалы доступны в личном кабинете в любое время.",
    icon: "globe",
    badge: "Онлайн",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нашу школу</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё, что нужно, чтобы начать зарабатывать на Forex осознанно и системно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
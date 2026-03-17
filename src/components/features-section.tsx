import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Население страны",
    description: "В Канаде проживает около 40 миллионов человек. Страна занимает 2-е место в мире по площади, но остаётся одной из наименее населённых.",
    icon: "users",
    badge: "40 млн",
  },
  {
    title: "Официальные языки",
    description: "Канада — двуязычная страна: английский и французский являются официальными языками. Квебек — главный франкоязычный регион.",
    icon: "globe",
    badge: "2 языка",
  },
  {
    title: "Площадь территории",
    description: "9,98 млн км² — Канада вторая по величине страна мира после России. Простирается от Атлантики до Тихого океана.",
    icon: "map",
    badge: "9,98 млн км²",
  },
  {
    title: "Государственный строй",
    description: "Канада — конституционная монархия и федеральная парламентская демократия. Официальный глава государства — монарх Великобритании.",
    icon: "landmark",
    badge: "Монархия",
  },
  {
    title: "Экономика",
    description: "Входит в G7 — клуб крупнейших экономик мира. Основу составляют природные ресурсы, финансы, технологии и сельское хозяйство.",
    icon: "trending-up",
    badge: "G7",
  },
  {
    title: "Природные богатства",
    description: "Канада обладает крупнейшими запасами пресной воды, нефтяных песков и лесных ресурсов на планете.",
    icon: "leaf",
    badge: "Ресурсы",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Канада в цифрах</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ключевые факты о второй по величине стране мира
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
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
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

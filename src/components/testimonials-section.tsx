import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Жак Картье",
    role: "Французский мореплаватель, 1534 год",
    avatar: "/placeholder-user.jpg",
    content:
      "Я назвал эту великую землю по слову местных жителей — «каната». Здесь я увидел реку Святого Лаврентия и понял: это не просто остров, это целый мир.",
  },
  {
    name: "Самюэль де Шамплен",
    role: "Основатель Квебека, «отец Канады»",
    avatar: "/placeholder-user.jpg",
    content:
      "В 1608 году я основал Квебек-Сити — первый постоянный европейский город в Северной Америке. Эта земля полна рек, лесов и возможностей.",
  },
  {
    name: "Джон Макдональд",
    role: "Первый премьер-министр Канады, 1867",
    avatar: "/placeholder-user.jpg",
    content:
      "1 июля 1867 года Канада стала независимым доминионом. Мы объединили четыре провинции и построили страну, которой суждено стать великой.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Голоса истории</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Люди, которые открывали, основывали и строили Канаду
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

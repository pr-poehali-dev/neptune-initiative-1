import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какова столица Канады?",
      answer:
        "Столица Канады — Оттава, расположенная в провинции Онтарио на берегу реки Оттава. Многие ошибочно считают столицей Торонто или Монреаль, однако именно Оттава является административным и политическим центром страны.",
    },
    {
      question: "Сколько провинций и территорий в Канаде?",
      answer:
        "Канада состоит из 10 провинций: Онтарио, Квебек, Британская Колумбия, Альберта, Манитоба, Саскачеван, Новая Шотландия, Нью-Брансуик, остров Принца Эдуарда, Ньюфаундленд и Лабрадор — и 3 территорий: Юкон, Северо-Западные территории и Нунавут.",
    },
    {
      question: "Какой символ является главным для Канады?",
      answer:
        "Кленовый лист — главный национальный символ Канады, изображённый на флаге страны. Кроме того, символами Канады считаются бобёр (официальное животное-символ) и лосось. Флаг с красным кленовым листом был принят в 1965 году.",
    },
    {
      question: "Когда Канада получила независимость?",
      answer:
        "1 июля 1867 года Канада стала самоуправляемым доминионом Британской империи — этот день отмечается как День Канады. Полную правовую независимость страна получила в 1982 году, когда была принята Конституция Канады и Хартия прав и свобод.",
    },
    {
      question: "Какие животные живут в Канаде?",
      answer:
        "Канада богата дикой природой: здесь обитают белые медведи (Арктика), гризли и чёрные медведи, лоси, карибу, бизоны, волки, рыси, бобры и тюлени. Страна является домом для сотен видов птиц, в том числе белоголового орлана.",
    },
    {
      question: "Какой климат в Канаде?",
      answer:
        "Климат Канады очень разнообразен. На юге — умеренный, со снежными зимами и тёплым летом. На западном побережье (Ванкувер) — мягкий морской климат. На севере — субарктический и арктический. Зимой в центре страны температура может опускаться до −40°C.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Самые популярные вопросы о Канаде — стране кленового листа, трёх океанов и бескрайней природы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

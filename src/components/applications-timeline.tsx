import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Открытие Канады",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            В 1497 году итальянский мореплаватель Джон Кабот (Джованни Кабото) на службе английской короны достиг
            берегов Северной Америки. В 1534 году французский исследователь Жак Картье исследовал залив Святого
            Лаврентия и провозгласил эти земли владением Франции.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              1497 — экспедиция Джона Кабота
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              1534 — Жак Картье называет землю «Канада» (от ирокезского «каната» — деревня)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              1608 — Самюэль де Шамплен основывает Квебек
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Крупнейшие города",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Канада — высокоурбанизированная страна: более 80% населения живёт в городах. Крупнейшие мегаполисы
            сосредоточены вдоль южной границы с США, где климат мягче всего.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Торонто — 2,7 млн жит. (крупнейший город), финансовый центр
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Монреаль — 1,7 млн жит., культурная столица франкоязычной Канады
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Калгари, Ванкувер, Оттава (столица) — крупнейшие центры страны
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Моря и океаны",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Канаду омывают три океана — уникальная особенность, которой могут похвастаться лишь немногие страны
            мира. Береговая линия страны — самая протяжённая в мире: более 202 000 км.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              🌊 Тихий океан — на западе (побережье Британской Колумбии)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              🌊 Атлантический океан — на востоке (Ньюфаундленд, Новая Шотландия)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              🧊 Северный Ледовитый океан — на севере (арктическое побережье)
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Реки и озёра",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Канада — страна с крупнейшими запасами пресной воды на Земле. Здесь находится около 20% всех мировых
            запасов пресной воды и более 2 миллионов озёр.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Маккензи — самая длинная река (4 241 км), впадает в Северный Ледовитый океан
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Святой Лаврентий — главная транспортная артерия страны, исторический путь первооткрывателей
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Великие озёра (Верхнее, Гурон, Эри, Онтарио) — крупнейшая система пресных озёр в мире
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">История и география</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От первых европейских экспедиций до современных мегаполисов — история Канады, её реки, океаны и города.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}

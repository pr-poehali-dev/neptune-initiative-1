export function SafetySection() {
  const waterways = [
    {
      name: "Река Маккензи",
      type: "Река",
      length: "4 241 км",
      desc: "Самая длинная река Канады, впадает в Северный Ледовитый океан. Протекает через Северо-Западные территории.",
    },
    {
      name: "Река Святого Лаврентия",
      type: "Река",
      length: "1 197 км",
      desc: "Главная историческая артерия страны. По ней плыл Жак Картье. Соединяет Великие озёра с Атлантическим океаном.",
    },
    {
      name: "Река Юкон",
      type: "Река",
      length: "3 185 км",
      desc: "Берёт начало в Британской Колумбии, протекает через Аляску. Главная река эпохи золотой лихорадки 1890-х.",
    },
    {
      name: "Озеро Верхнее",
      type: "Озеро",
      length: "82 103 км²",
      desc: "Крупнейшее пресноводное озеро в мире по площади. Входит в систему Великих озёр на границе с США.",
    },
    {
      name: "Тихий океан",
      type: "Океан",
      length: "Запад",
      desc: "Омывает западное побережье Британской Колумбии. Мягкий климат, фьорды, острова Ванкувер и Хайда-Гвайи.",
    },
    {
      name: "Атлантический океан",
      type: "Океан",
      length: "Восток",
      desc: "Омывает восточные провинции. Богатые рыболовные банки, скалистые берега Новой Шотландии и Ньюфаундленда.",
    },
  ]

  return (
    <section id="safety" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Воды Канады</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Три океана, крупнейшая система пресных озёр и миллионы рек — Канада владеет 20% мировых запасов пресной воды
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {waterways.map((w, index) => (
            <div
              key={index}
              className="border border-red-500/20 rounded-xl p-6 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{w.name}</h3>
                <span className="text-blue-400 text-xs font-mono bg-blue-500/10 px-2 py-1 rounded whitespace-nowrap ml-2">{w.length}</span>
              </div>
              <p className="text-red-400 text-xs mb-3 font-mono uppercase tracking-wider">{w.type}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

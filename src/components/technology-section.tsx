export function TechnologySection() {
  const cities = [
    { name: "Торонто", province: "Онтарио", pop: "2,7 млн", fact: "Финансовый и деловой центр Канады. Самый многонациональный город мира — здесь живут люди из 200+ стран." },
    { name: "Монреаль", province: "Квебек", pop: "1,7 млн", fact: "Второй крупнейший франкоязычный город после Парижа. Мировая столица джаза и гастрономии." },
    { name: "Ванкувер", province: "Брит. Колумбия", pop: "675 тыс.", fact: "«Голливуд Севера» — здесь снимают сотни фильмов и сериалов. Мягкий климат и горы прямо у города." },
    { name: "Калгари", province: "Альберта", pop: "1,3 млн", fact: "Нефтяная столица Канады. Ближайший крупный город к Скалистым горам и Национальному парку Банф." },
    { name: "Оттава", province: "Онтарио", pop: "1,0 млн", fact: "Столица Канады. Здесь находится парламент, резиденция генерал-губернатора и главные музеи страны." },
    { name: "Эдмонтон", province: "Альберта", pop: "1,0 млн", fact: "«Фестивальный город» — здесь проходит более 30 крупных фестивалей в год, включая Fringe Theatre." },
  ]

  return (
    <section id="technology" className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Крупнейшие города</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Канада — урбанизированная страна: 80% населения живёт в городах вдоль южной границы с США
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="border border-red-500/20 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-white font-orbitron">{city.name}</h3>
                <span className="text-red-400 text-sm font-mono bg-red-500/10 px-2 py-1 rounded">{city.pop}</span>
              </div>
              <p className="text-red-400 text-sm mb-3 font-mono">{city.province}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{city.fact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

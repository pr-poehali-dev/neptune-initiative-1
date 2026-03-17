import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Кана<span className="text-red-500">да</span> 🍁
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Вторая по площади страна мира. Три океана, 40 миллионов жителей, два официальных языка и самая протяжённая береговая линия на Земле.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Разделы */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#technology"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Крупнейшие города
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  История открытия
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Реки и океаны
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Частые вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Факты */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Быстрые факты</h3>
            <ul className="space-y-2">
              <li className="font-space-mono text-gray-400 text-sm">🏛️ Столица: Оттава</li>
              <li className="font-space-mono text-gray-400 text-sm">👥 Население: ~40 млн</li>
              <li className="font-space-mono text-gray-400 text-sm">📐 Площадь: 9,98 млн км²</li>
              <li className="font-space-mono text-gray-400 text-sm">🌊 3 океана</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">Презентация о Канаде · 2026</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Поделиться
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Источники
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

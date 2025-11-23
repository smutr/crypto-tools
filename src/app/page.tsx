"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col relative overflow-hidden">
      {/* ФОНОВАЯ СЕТКА */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(34, 197, 94, 0.1) 25%, rgba(34, 197, 94, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, 0.1) 75%, rgba(34, 197, 94, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 197, 94, 0.1) 25%, rgba(34, 197, 94, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, 0.1) 75%, rgba(34, 197, 94, 0.1) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* ДЕКОРАТИВНЫЕ УГЛЫ */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-green-500/30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-cyan-500/30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-cyan-500/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-green-500/30"></div>

      {/* ШАПКА */}
      <header className="w-full py-8 px-4 border-b-2 border-green-500/50 bg-black/30 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 flex justify-center gap-2">
            <span className="text-green-400 text-2xl">▌</span>
            <span className="text-cyan-400 text-2xl">▌</span>
            <span className="text-green-400 text-2xl">▌</span>
          </div>
          <h1 className="font-cyberpunk text-6xl font-bold glow-green mb-2">
            🚀 CRYPTO TOOLS
          </h1>
          <p className="font-mono text-green-400 text-lg">
            [ НАБОР ИНСТРУМЕНТОВ ДЛЯ КРИПТОВАЛЮТ ]
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="text-green-400 text-2xl">▌</span>
            <span className="text-cyan-400 text-2xl">▌</span>
            <span className="text-green-400 text-2xl">▌</span>
          </div>
        </div>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
          {/* КОНВЕРТЕР */}
          <Link href="/converter" className="block group">
            <div className="border-4 border-cyan-500/50 bg-black/60 p-8 rounded-lg hover:border-cyan-400 hover:bg-black/40 transition-all cursor-pointer shadow-2xl border-glow-cyan relative overflow-hidden">
              {/* ФОНОВЫЙ ЭФФЕКТ */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5 transition-all"></div>

              {/* ИКОНКА */}
              <div className="text-6xl mb-4 text-cyan-400 relative z-10">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M 20 32 L 32 20 L 44 32 M 20 32 L 32 44 L 44 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="32" cy="32" r="4" fill="currentColor" />
                </svg>
              </div>

              <h2 className="font-cyberpunk text-3xl glow-cyan mb-4 text-cyan-300 relative z-10">
                💱 КОНВЕРТЕР
              </h2>
              <p className="font-mono text-cyan-400 text-sm leading-relaxed relative z-10">
                Преобразование криптовалют в реальном времени с актуальными
                курсами
              </p>
              <div className="mt-6 pt-4 border-t border-cyan-500/30 relative z-10">
                <p className="font-mono text-cyan-300/70 text-xs">
                  ▶ НАЖМИ ДЛЯ ВХОДА
                </p>
              </div>
            </div>
          </Link>

          {/* КАЛЬКУЛЯТОР */}
          <Link href="/calculator" className="block group">
            <div className="border-4 border-green-500/50 bg-black/60 p-8 rounded-lg hover:border-green-400 hover:bg-black/40 transition-all cursor-pointer shadow-2xl border-glow relative overflow-hidden">
              {/* ФОНОВЫЙ ЭФФЕКТ */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/5 transition-all"></div>

              {/* ИКОНКА */}
              <div className="text-6xl mb-4 text-green-400 relative z-10">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="10"
                    width="44"
                    height="44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    rx="4"
                  />
                  <line
                    x1="16"
                    y1="24"
                    x2="48"
                    y2="24"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="36"
                    x2="48"
                    y2="36"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="48"
                    x2="48"
                    y2="48"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="28" cy="28" r="3" fill="currentColor" />
                  <circle cx="40" cy="28" r="3" fill="currentColor" />
                  <circle cx="28" cy="40" r="3" fill="currentColor" />
                  <circle cx="40" cy="40" r="3" fill="currentColor" />
                </svg>
              </div>

              <h2 className="font-cyberpunk text-3xl glow-green mb-4 text-green-300 relative z-10">
                🧮 КАЛЬКУЛЯТОР
              </h2>
              <p className="font-mono text-green-400 text-sm leading-relaxed relative z-10">
                Инженерный калькулятор для точных расчётов и математических
                операций
              </p>
              <div className="mt-6 pt-4 border-t border-green-500/30 relative z-10">
                <p className="font-mono text-green-300/70 text-xs">
                  ▶ НАЖМИ ДЛЯ ВХОДА
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* ПОДВАЛ */}
      {/* ПОДВАЛ */}
      <footer className="w-full py-6 px-4 bg-black/60 border-t-2 border-green-500/50 mt-auto relative z-10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-green-400 text-sm">
            © 2025 CRYPTO TOOLS | Version 2.0 CYBERPUNK
          </p>
          <p className="font-mono text-cyan-400/50 text-xs mt-2">
            [ СИСТЕМА АКТИВНА ]
          </p>
          <div className="mt-4">
            <a
              href="https://www.buymeacoffee.com/igorsamutil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
            >
              ☕ Support Me
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

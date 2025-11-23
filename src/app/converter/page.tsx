"use client";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export default function ConverterPage() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("BTC");
  const [result, setResult] = useState("");
  const [rates, setRates] = useState({
    BTC: 45000,
    ETH: 2500,
    USDT: 1,
    DOGE: 0.4,
  });
  const [loading, setLoading] = useState(false);

  const refreshRates = () => {
    setLoading(true);
    fetch("/api/rates")
      .then((response) => response.json())
      .then((data) => {
        setRates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching rates:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshRates();
  }, []);

  const handleConvert = () => {
    if (!amount) {
      setResult("⚠️ Введи сумму!");
      return;
    }

    const amountNumber = parseFloat(amount);
    const selectedRate = rates[currency as keyof typeof rates];
    const calculatedResult = amountNumber * selectedRate;
    setResult(
      `✓ ${amount} ${currency} = $${calculatedResult.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col relative overflow-hidden">
      {/* ФОНОВАЯ СЕТКА */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(50, 184, 198, 0.1) 25%, rgba(50, 184, 198, 0.1) 26%, transparent 27%, transparent 74%, rgba(50, 184, 198, 0.1) 75%, rgba(50, 184, 198, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(50, 184, 198, 0.1) 25%, rgba(50, 184, 198, 0.1) 26%, transparent 27%, transparent 74%, rgba(50, 184, 198, 0.1) 75%, rgba(50, 184, 198, 0.1) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* ДЕКОРАТИВНЫЕ УГЛЫ */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/30"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-500/30"></div>

      {/* ШАПКА */}
      <header className="w-full py-6 px-4 border-b-2 border-cyan-500/50 bg-black/30 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm mb-4 hover:gap-3 transition-all"
          >
            ← ВЕРНУТЬСЯ
          </Link>

          <div className="text-center">
            <h1 className="font-cyberpunk text-5xl font-bold glow-cyan mb-2">
              💱 КОНВЕРТЕР
            </h1>
            <p className="font-mono text-cyan-400 text-sm">
              [ ПРЕОБРАЗОВАНИЕ КРИПТОВАЛЮТ В РЕАЛЬНОМ ВРЕМЕНИ ]
            </p>
          </div>
        </div>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md space-y-6">
          {/* ФОРМА КОНВЕРТЕРА */}
          <div className="border-2 border-cyan-500/50 bg-black/40 p-8 rounded-lg border-glow-cyan">
            <h2 className="font-cyberpunk text-2xl glow-cyan mb-6 text-center text-cyan-300">
              $ ВВЕДИ ДАННЫЕ
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {/* INPUT СУММА */}
                <div>
                  <label className="block text-cyan-400 text-xs font-mono mb-2 uppercase">
                    Сумма
                  </label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full px-3 py-2 bg-black/60 border-2 border-cyan-500/50 text-cyan-400 placeholder-cyan-500/50 rounded font-mono text-sm focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/30 transition-all"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleConvert()}
                  />
                </div>

                {/* SELECT ВАЛЮТА */}
                <div>
                  <label className="block text-cyan-400 text-xs font-mono mb-2 uppercase">
                    Валюта
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-3 py-2 bg-black/60 border-2 border-cyan-500/50 text-cyan-400 rounded font-mono text-sm focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/30 transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2320b8c6' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.5rem center",
                      backgroundSize: "1.2em 1.2em",
                      paddingRight: "2rem",
                    }}
                  >
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                    <option value="DOGE">DOGE</option>
                  </select>
                </div>
              </div>

              {/* КНОПКА КОНВЕРТИРОВАТЬ */}
              <button
                onClick={handleConvert}
                className="w-full px-4 py-3 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-300 font-mono font-bold rounded hover:bg-cyan-500/40 hover:border-cyan-400 transition-all duration-300 uppercase text-sm"
              >
                ▶ КОНВЕРТИРОВАТЬ
              </button>

              {/* РЕЗУЛЬТАТ */}
              {result && (
                <div
                  className={`mt-4 p-4 rounded text-center border-2 transition-all ${
                    result.includes("⚠️")
                      ? "bg-red-500/20 border-red-500/50 text-red-300"
                      : "bg-green-500/20 border-green-500/50 text-green-300"
                  }`}
                >
                  <p className="font-mono font-bold text-sm">{result}</p>
                </div>
              )}
            </div>
          </div>

          {/* ТАБЛИЦА КУРСОВ */}
          <div className="border-2 border-cyan-500/50 bg-black/40 p-8 rounded-lg border-glow-cyan">
            <h3 className="text-cyan-300 text-xs font-mono mb-4 text-center uppercase">
              [ 📊 ТЕКУЩИЕ КУРСЫ ]
            </h3>

            <div className="space-y-2">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="border-b-2 border-cyan-500/30">
                    <th className="text-cyan-400 text-left py-2 px-2">ВАЛЮТА</th>
                    <th className="text-cyan-400 text-right py-2 px-2">USD</th>
                    <th className="text-cyan-400 text-right py-2 px-2">RUB</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: "BTC", name: "Bitcoin" },
                    { code: "ETH", name: "Ethereum" },
                    { code: "USDT", name: "Tether" },
                    { code: "DOGE", name: "Dogecoin" },
                  ].map((coin) => (
                    <tr
                      key={coin.code}
                      className="border-b border-cyan-500/20 hover:bg-cyan-500/10 transition-colors"
                    >
                      <td className="text-cyan-300 py-2 px-2">{coin.code}</td>
                      <td className="text-cyan-300 text-right py-2 px-2">
                        ${rates[coin.code as keyof typeof rates].toLocaleString()}
                      </td>
                      <td className="text-cyan-300 text-right py-2 px-2">
                        {(
                          rates[coin.code as keyof typeof rates] * 100
                        ).toLocaleString()}
                        ₽
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* КНОПКА ОБНОВИТЬ */}
            <button
              onClick={refreshRates}
              disabled={loading}
              className="mt-4 w-full px-6 py-2 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-300 font-mono font-bold rounded hover:bg-cyan-500/40 transition-all uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "⟳ ЗАГРУЗКА..." : "🔄 ОБНОВИТЬ КУРСЫ"}
            </button>
          </div>
        </div>
      </main>

      {/* ПОДВАЛ */}
      <footer className="w-full py-4 px-4 bg-black/60 border-t-2 border-cyan-500/50 mt-auto relative z-10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-cyan-400 text-xs">
            © 2025 CRYPTO TOOLS | Конвертер V2.0 CYBERPUNK
          </p>
        </div>
      </footer>
    </div>
  );
}

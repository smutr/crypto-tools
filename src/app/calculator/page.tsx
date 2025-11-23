"use client";
import Link from "next/link";
import { useState } from "react";

export default function CalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        return prev / current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay("0.");
      setWaitingForNewValue(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* ШАПКА */}
      <header className="w-full py-8 px-4 border-b-2 border-green-500/50 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block mb-4 text-green-400 hover:text-green-300 font-mono"
          >
            ← Вернуться на главную
          </Link>

          <h1 className="font-cyberpunk text-6xl font-bold glow-green mb-2">
            🧮 КАЛЬКУЛЯТОР
          </h1>

          <p className="font-mono text-green-400 text-lg">
            [ ИНЖЕНЕРНЫЙ РАСЧЁТЧИК ]
          </p>
        </div>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="border-2 border-green-500/50 bg-black/40 p-6 rounded-lg">
            {/* ДИСПЛЕЙ */}
            <div className="bg-black/60 border-2 border-green-500/50 rounded p-4 mb-4">
              <p className="text-green-300 font-mono text-right text-4xl font-bold truncate">
                {display}
              </p>
            </div>

            {/* КНОПКИ */}
            <div className="grid grid-cols-4 gap-2">
              {/* РЯД 1 */}
              <button
                onClick={handleClear}
                className="col-span-2 px-4 py-3 bg-red-500/20 border-2 border-red-500/50 text-red-300 font-mono font-bold rounded hover:bg-red-500/40 transition-all"
              >
                AC
              </button>
              <button
                onClick={handleBackspace}
                className="px-4 py-3 bg-orange-500/20 border-2 border-orange-500/50 text-orange-300 font-mono font-bold rounded hover:bg-orange-500/40 transition-all"
              >
                ⌫
              </button>
              <button
                onClick={() => handleOperation("/")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                ÷
              </button>

              {/* РЯД 2 */}
              <button
                onClick={() => handleNumber("7")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                7
              </button>
              <button
                onClick={() => handleNumber("8")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                8
              </button>
              <button
                onClick={() => handleNumber("9")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                9
              </button>
              <button
                onClick={() => handleOperation("*")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                ×
              </button>

              {/* РЯД 3 */}
              <button
                onClick={() => handleNumber("4")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                4
              </button>
              <button
                onClick={() => handleNumber("5")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                5
              </button>
              <button
                onClick={() => handleNumber("6")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                6
              </button>
              <button
                onClick={() => handleOperation("-")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                −
              </button>

              {/* РЯД 4 */}
              <button
                onClick={() => handleNumber("1")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                1
              </button>
              <button
                onClick={() => handleNumber("2")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                2
              </button>
              <button
                onClick={() => handleNumber("3")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                3
              </button>
              <button
                onClick={() => handleOperation("+")}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all row-span-2"
              >
                +
              </button>

              {/* РЯД 5 */}
              <button
                onClick={() => handleNumber("0")}
                className="col-span-2 px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                0
              </button>
              <button
                onClick={handleDecimal}
                className="px-4 py-3 bg-green-500/20 border-2 border-green-500/50 text-green-300 font-mono font-bold rounded hover:bg-green-500/40 transition-all"
              >
                .
              </button>
              <button
                onClick={handleEquals}
                className="px-4 py-3 bg-cyan-500/20 border-2 border-cyan-500/50 text-cyan-300 font-mono font-bold rounded hover:bg-cyan-500/40 transition-all"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ПОДВАЛ */}
      <footer className="w-full py-6 px-4 bg-black/60 border-t-2 border-green-500/50 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-green-400 text-sm">
            © 2025 CRYPTO TOOLS | Калькулятор V1.0
          </p>
        </div>
      </footer>
    </div>
  );
}

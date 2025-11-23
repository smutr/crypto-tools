export async function GET() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,dogecoin&vs_currencies=usd",
      { 
        cache: "no-store",
        headers: {
          "Accept": "application/json"
        }
      }
    );

    if (!response.ok) {
      // Если CoinGecko недоступен — возвращаем дефолтные значения
      return Response.json({
        BTC: 45000,
        ETH: 2500,
        USDT: 1,
        DOGE: 0.4,
      });
    }

    const data = await response.json();

    return Response.json({
      BTC: data.bitcoin.usd,
      ETH: data.ethereum.usd,
      USDT: data.tether.usd,
      DOGE: data.dogecoin.usd,
    });
  } catch (error) {
    // При ошибке также возвращаем дефолтные значения
    return Response.json({
      BTC: 45000,
      ETH: 2500,
      USDT: 1,
      DOGE: 0.4,
    });
  }
}


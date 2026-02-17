const { useState, useMemo } = React;

export function CurrencyConverter() {
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // Memoize converted amounts for the current `amount` and `fromCurrency`.
  // Changing `toCurrency` will NOT recompute this map.
  const convertedMap = useMemo(() => {
    const amt = Number(amount) || 0;
    const fromRate = rates[fromCurrency] || 1;
    const map = {};
    Object.keys(rates).forEach((target) => {
      map[target] = amt * (rates[target] / fromRate);
    });
    return map;
  }, [amount, fromCurrency]);

  const displayed = `${(convertedMap[toCurrency] || 0).toFixed(2)} ${toCurrency}`;

  return (
    <div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          From:
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          To:
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
      </div>

      <div>{displayed}</div>
    </div>
  );
}

import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [money, setMoney] = useState([])
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, [])

  const onChange = (event) => {
    setMoney(event.target.value)
  }

  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      <input
        onChange={onChange}
        value={money}
        type="number"
        placeholder="Write u r USD"
      />

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin, index) => {
            return (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) : {money / coin.quotes.USD.price}
              </option>
            )
          })}
        </select>
      )}
      <h4>가지고 있는 금액을 입력하면 그에 맞게 구입할 수 있는 코인 가격이 표출됩니다.</h4>
    </div>
  )
}

export default App

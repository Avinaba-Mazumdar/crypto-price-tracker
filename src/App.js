import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Coin from './Coin'
import Footer from './Footer'

function App() {
      const [coins, setCoins] = useState([]);
      const [search, setSearch] = useState('');

      useEffect(() => {
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                  setCoins(res.data);
            })
            .catch(() => alert('error'))
      }, []);

      const handleChange =  e => {
            setSearch(e.target.value)
      };

      const filteredCoins = coins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())
      );

      return (
            <div className="app">
                  <div className="coin-search">
                        <h1 className="coin-text">Search a Crypto</h1>
                        <form>
                              <input type='text' placeholder='search' className='coin-input' onChange={handleChange}/>
                        </form>
                  </div>
                  <table className='table' cellPadding={0} cellSpacing={0}>
                        <thead>
                              <tr className='table-th'>
                                    <th className='table-th'>Icon</th>
                                    <th className='table-th'>Name</th>
                                    <th className='table-th'>Symbol</th>
                                    <th className='table-th'>Price</th>
                                    <th className='table-th volume'>Volume</th>
                                    <th className='table-th'>⬆⬇</th>
                                    <th className='table-th mktcap'>Mkt. Cap</th>
                              </tr>
                        </thead>
                        <tbody>
                        {filteredCoins.map(coin => {
                              return (
                                    <Coin
                                          key={coin.id} 
                                          name={coin.name} 
                                          image={coin.image}
                                          symbol={coin.symbol}
                                          volume={coin.total_volume}
                                          price={coin.current_price}
                                          priceChange={coin.price_change_percentage_24h}
                                          marketcap={coin.market_cap}
                                    />
                              )
                        })}
                        </tbody>
                  </table>
                  <Footer/>
            </div>
      );
}

export default App;
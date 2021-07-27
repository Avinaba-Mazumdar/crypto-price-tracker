import React from 'react'
import './Coin.css'

const Coin = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
      return (
            <tr>
                  <th className='coin-th'><img src={image} alt='crypto'/></th>
                  <th className='coin-th'><h1>{name}</h1></th>
                  <th className='coin-th'><p className='coin-symbol'>{symbol}</p></th>
                  <th className='coin-th'><p>${price}</p></th>
                  <th className='coin-th volume'><p>${volume.toLocaleString()}</p></th>
                  <th className='coin-th'>
                        {priceChange < 0 ? (
                              <p className='red'>{priceChange.toFixed(2)}%</p>
                                    ) : (
                                          <p className='green'>{priceChange.toFixed(2)}%</p>
                                    )
                              }
                  </th>
                  <th className='coin-th mktcap'>
                        <p className="coin-marketcap">
                                    ${marketcap.toLocaleString()}
                        </p>
                  </th>
            </tr>
      )
}

export default Coin
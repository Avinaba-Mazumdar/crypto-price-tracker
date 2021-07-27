import React from 'react'
import './Footer.css'

function Footer() {
      return (
            <div className='footer'>
                  <p>© {new Date().getFullYear()} - Crypto Price Tracker - No rights reserved</p>
            </div>
      )
}

export default Footer

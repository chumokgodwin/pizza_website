import React from 'react'
import '../styles/MenuItem.css'

function MenuItem({image,name,price}) {
  
  return (
    <div className='menuItem' >
        <div style={{backgroundImage:`url(${image})`}}> </div>
        <h1>{name}</h1>
        <p>${price}</p>
        <div className='buy'>
          <button>Buy</button>
          <button>Add to cart</button>
        </div>
       
    </div>
  )
}

export default MenuItem
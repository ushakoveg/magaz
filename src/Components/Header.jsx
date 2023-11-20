import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import Orders from './Orders'
import { useState } from 'react'

const showOrders = (props) =>{
  let summa = 0
  props.orders.forEach(e => summa += Number.parseFloat(e.price)
    
  );
  return (
    <div className="f">
  {props.orders.map(e=>(
    <Orders onDelete={props.onDelete} key={e.id} item ={e}/>
  ))}
  <p className='summa'>Сумма: {summa}$</p>
  </div>
  )
}
const showNothing = () =>{
  return(
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  )
}

export default function (props) {
    let[cartOpen,setCartOpen] = useState(false)
  return (
    <header>
    <div>
        <span className='logo'>что-то</span>
        <ul className='nav'>
            <li>Про нас</li>
            <li>Магазины</li>
            <li>Гарантия</li>
        </ul>
        <FaShoppingCart className={`shop-cart ${cartOpen && 'active'}`} onClick={() => setCartOpen(cartOpen = !cartOpen)}/>
        {cartOpen &&(
            <div className="shop-cart-open">
              {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
            </div>
        )}
    </div>
    <div className="presentation"></div>
    </header>
  )
}

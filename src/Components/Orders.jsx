import React, { Component } from 'react'
import { AiTwotoneDelete } from "react-icons/ai";

export class Orders extends Component {
  render() {
    return (
      <div className='item'>
         <img className='order-img' src={"./img" + this.props.item.img}  />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        < AiTwotoneDelete className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Orders
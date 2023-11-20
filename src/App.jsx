
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from './Components/Items'
import Zakaz from './Components/Zakaz'
import './style/App.scss'

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    orders:[],
    items:[
      {
        id:1,
        title:"Косметичка непромокаемая, 31/22/11 см",
        img:'1.jpg',
        desc:'Косметичка непромокаемая, 31/22/11 см',
        category:'Косметичка',
        price:'123'
      },
      {
        id:2,
        title:"Косметичка непромокаемая, 31/22/11 см",
        img:'1-37.png',
        desc:'Косметичка непромокаемая, 31/22/11 см',
        category:'Косметичка',
        price:'122'
      },
      {
        id:3,
        title:"Косметичка непромокаемая, 31/22/11 см",
        img:'2.jpg',
        desc:'Косметичка непромокаемая, 31/22/11 см',
        category:'Косметичка',
        price:'121'
      },
      {
        id:4,
        title:"Косметичка непромокаемая, 31/22/11 см",
        img:'3.jpg',
        desc:'Косметичка непромокаемая, 31/22/11 см',
        category:'Косметичка',
        price:'120'
      },
      {
        id:5,
        title:"Косметичка непромокаемая, 31/22/11 см",
        img:'4.jpg',
        desc:'Косметичка непромокаемая, 31/22/11 см',
        category:'Косметичка',
        price:'119'
      }
      
    ]
  }
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
}

render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Items items={this.state.items} onAdd ={this.addToOrder} />
      <Zakaz/>
      <Footer/>
    </div>
  )
}

deleteOrder(id){
this.setState({orders: this.state.orders.filter(e => e.id !== id)})
}

addToOrder(item){
  let InArray = false
  this.state.orders.forEach(e =>{
    if(e.id === e.id)
    InArray = true
  })
  if(!InArray)
this.setState({orders:[...this.state.orders, item]})
}
}

export default App

import { useState } from 'react'

export default function Form(props) {
    const[name,setName] = useState("")
    const[secondName,setSecondName] = useState("")
    const[telephone,setTelephone] = useState("")
    const[mail,setMail] = useState("")
    const[adress,setAdress] = useState("")
  return (
    <form >
    <div className='container'>
        <div className="top">
            <label>Name</label>
            <input name='Name'  type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Second name</label>
            <input name='secondName' type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)}/>
        </div>
        <div className="middle">
            <label>Telephone</label>
            <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
            <label>Mail</label>
            <input type="text" value={mail}onChange={(e) => setMail(e.target.value)}/>
        </div>
        <div className="footer">
            <label>Adress</label>
            <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)}/>
        </div>
    </div>
    <button type='button' onClick={() => console.log(name,secondName,telephone,mail,adress)}>Сделать заказ</button>
    </form>
  )
}
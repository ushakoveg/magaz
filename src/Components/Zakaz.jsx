import { useState } from 'react'
import Form from './Form'

function Zakaz() {
const[arr,setArr] = useState('')



const addPost = (name,telephone,secondName,mail,adress) => {
  setArr([...arr,{name,telephone,secondName,mail,adress}])
}



  return (
    <div>
      
      <div className="modal">
      <div className="content-modal">
        <Form addPost={addPost}/>
      </div>
      </div>
  
    
    </div>
  )
}


export default Zakaz
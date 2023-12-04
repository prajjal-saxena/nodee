import React, {useState} from 'react'
import Axios from 'axios'

const Form2 = () => {
  const url = "http://localhost:5000";
  const [data, setData] = useState({
    name : "",
    number : "",
    mail : ""
  })


  function submit(e){
     e.preventDefault();
     Axios.post(url,{
        name : data.name,
        number : data.number,
        mail : data.mail
     })
     .then(res =>{
        console.log("This",res.data)
     })
  }

  function handle(e) {
     const newdata = {...data}
     newdata[e.target.id] = e.target.value
     setData(newdata)
      
  }
  return (
    <div>
        <form onSubmit={(e) => submit(e)}>
            <input onChange={(e) => handle(e)} id= "name" value={data.name} placeholder='name' type="text" />
            <input onChange={(e) => handle(e)} id= "number" value={data.number} placeholder='mobile'  type="text" />
            <input onChange={(e) => handle(e)} id= "mail" value={data.mail} placeholder='email'  type="text"/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form2
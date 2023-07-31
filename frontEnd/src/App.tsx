
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  useEffect(()=>{
    fetch('http://localhost:8081/data')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, []);

  const [dataa, setData] = useState([]);






//   // const [values,setValues] = useState([
//   //   userName:'',
//   // ]);

//   const [data, setValue] = useState({
//     name: '',
//     email:'',
//     password: ''
//   })

//   const {name,email,password} = data;

//   const changehandler = (ee) =>{
//     setValue({...data,[ee.target.name]:ee.target.value});
// }

// const submithadler = (ee) =>{
//   ee.preventDefault();
//   axios.post('https://kevin-8dd6d-default-rtdb.firebaseio.com/register.json',data).then(() => alert('data submited'))
//   // console.log(data)
// }
  return (
    <>
    <div>
      <table>
      
      <thead>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Age</th>
        <th>RegisterNo</th>
        <th>Addres</th>
      
      </thead>
      <tbody>
        {dataa.map((d, i)=>{
        return(
          <tr key={i}>
            <td>{d.FirstName}</td>
            <td>{d.LastName}</td>
            <td>{d.Email}</td>
            <td>{d.Age}</td>
            <td>{d.RegisterNo}</td>
            <td>{d.addres}</td>
          </tr>
        )
        })}
      </tbody>
      </table>

    </div>

<br />


  
{/* <form action="" onSubmit={submithadler}>
<div>
                <label htmlFor="">Name</label>
                <input type="text" value={name} name='name' onChange={changehandler}/>
            </div>
            <div>
                <label htmlFor="">Name</label>
                <input type="email" value={email} name='email' onChange={changehandler}/>
            </div>
            <div>
                <label htmlFor="">Name</label>
                <input type="password" value={password} name='password' onChange={changehandler}/>
            </div>
            <button type='submit'> Sign up</button>
</form> */}
     
    </>
  )
}

export default App

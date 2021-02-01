import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Form(){
  const [userData,setUserData] = useState({
    fName : '',
    lName :'',
    email : '',
    phone : ''
  })

  function submitData(event){
    event.preventDefault();
    alert('Form Submitted')
  }
  function InputEvent(event){
    const {value,name} = event.target;

    setUserData((preVal)=>{
      if (name === 'fName') {
        return{
          fName : value,
          lName : preVal.lName,
          email : preVal.email,
          phone : preVal.phone
      }
      }
      else if (name === 'lName') {
        return{
          fName : preVal.fName,
          lName : value,
          email : preVal.email,
          phone : preVal.phone
      }
      }
      else if (name === 'email') {
        return{
          fName : preVal.fName,
          lName : preVal.lName,
          email : value,
          phone : preVal.phone
      }
      }
      else if (name === 'phone') {
        return{
          fName : preVal.fName,
          lName : preVal.lName,
          email : preVal.email,
          phone : value
      }
      }
    });
  };


  return(
    <form onSubmit={submitData}>
      <h1>Hello {userData.fName} {userData.lName}</h1>
      <h1>{userData.email} {userData.phone}</h1>
      <input type="text"  placeholder="Enter Your Name" name="fName" onChange={InputEvent} value={userData.name} required/>
      <input type="text"  placeholder="Enter Your Last Name" name="lName" onChange={InputEvent} value={userData.lName} required/>
      <input type="email" placeholder="Enter Your Email" name="email" onChange={InputEvent} value={userData.email} required/>
      <input type="phone" placeholder="Enter Your Phone" name="phone" onChange={InputEvent} value={userData.phone} required/>
      <button type="submit">Submit</button>
    </form>
  )




}


ReactDOM.render(
  <>
  <Form/>
  </>,
  document.getElementById('root')
);


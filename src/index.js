import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Form(){
  const [name,setName] = useState('')
  const [fullName,setFullName] = useState('')
  const [name2,setName2] = useState('')
  const [fullName2,setFullName2] = useState('')

  function submitData(event){
    event.preventDefault();
    setFullName(name)
    setFullName2(name2)
  }
  function InputEvent(event){
    setName(event.target.value)
  }
  function InputEvent2(event){
    setName2(event.target.value)
  }


  return(
    <form onSubmit={submitData}>
      <h1>Hello {fullName} {fullName2}</h1>
      <input type="text" onChange={InputEvent} value={name} required/>
      <input type="text" onChange={InputEvent2} value={name2} required/>
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


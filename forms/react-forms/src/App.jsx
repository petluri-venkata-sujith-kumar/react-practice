// import React from 'react'
// import { createRef } from 'react'
// //uncontrolled component
// //we need react ref for uncontrolled component
// //foe the element we need to add ref attribute
// const App = () => {
//   let emailRef=createRef()
//   let passwordRef=createRef()
//   let handleSubmit= e=>{
//     e.preventDefault()
//     let email=emailRef.current.value
//     let password=passwordRef.current.value
//     console.log({email ,password});
//   }
//   return (
//     <div>
//       <section id='form'>
//         <article>
//           <h2>login</h2>
//           <form action="">
//             <div className='form-group'>
//                 <label htmlFor="email">email :</label>
//                 <input type="email" placeholder='email' name="" id="email" ref={emailRef}/>
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="password">password :</label>
//                 <input type="password" placeholder='password' name="" id="password" ref={passwordRef}/>
//             </div>
//             <div className='form-group'>
//               <button onClick={handleSubmit}>login</button>
//             </div>
//           </form>
//         </article>
//       </section>
//     </div>
//   )
// }

// export default App

// import {useState} from 'react'
// //controlled component
// //initialize state object
// //add value attritube to the input of form element
// //state mutation or state update // add onChange event to the elements
// const App = () => {
//   let [email,setEmail]=useState("")
//   let [password,setPassword]=useState("")
//   let handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log({email,password});
//   }
//   return (
//     <div>
//       <h2>Login</h2>
//       <form action="" onSubmit={handleSubmit}>
//         <input type="email" name="" id="" placeholder='enter email' value={email} onChange={e=> setEmail(e.target.value)}/><br/>
//         <input type="password" name="" id="" placeholder='enter password' value={password} onChange={e=>setPassword(e.target.value)}/><br/>
//         <button>Login</button>
//       </form>
//     </div>
//   )
// }

// export default App

// //uncontrolled component by class based component
// import { createRef } from 'react'
// import { Component } from 'react'
// //uncontrolled component
// //add ref to element
// export default class App extends Component {
//   emailRef=createRef("")
//   passwordRef=createRef("")
//   handleSubmit=(e)=>{
//     e.preventDefault()
//     let email=this.emailRef.current.value
//     let password=this.passwordRef.current.value
//     console.log((email,password));
//   }
//   render() {
//     return (
//       <div>
//         <form action="">
//           <div className="form-group">
//             <label htmlFor="email">email :</label>
//             <input type="email" placeholder='email' name="" id="email" ref={this.emailRef}/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">password :</label>
//             <input type="password" placeholder='password' name="" id="password" ref={this.passwordRef}/>
//           </div>
//           <div className="form-group">
//             <button onClick={this.handleSubmit}>login</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//       loading: false,
//     };
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     // this.setState({loading :true})
//     console.log(this.state);
//   };
//   handleChange = (e) => {
//     // console.log(e);
//     this.setState({[e.target.name]:e.target.value})
//   };
//   render() {
//     return (
//       <div>
//         <form action="" onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">email :</label>
//             <input
//               type="email"
//               placeholder="email"
//               name="email"
//               id="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">password :</label>
//             <input
//               type="password"
//               placeholder="password"
//               name="password"
//               id="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <button>{this.state.loading ? "loading" : "login"}</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }


// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//  let[state,setState]=useState({
//   email:"",
//   password:"",
//   loading:false
//  })
//  let {email,password,loading}=state
//  let handleChange=e=>{
//   let {name ,value}=e.target
//   setState({...state ,[name]:value})
//  }
//  let handleSubmit=e=>{
//   e.preventDefault()
//   console.log({email,password});
//  }

// //  let x={name:"sujith"}
// //  let y={company:"testyantra"}
// //  let mergeTheseValues=Object.assign(x,y)
// //  console.log(mergeTheseValues);
// //  let mergeTheseValuesWithSpread={...x,...y}
// //  console.log(mergeTheseValuesWithSpread);
//   return (
//     <div>
//       <h1>login</h1>
//         <form action="" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">email :</label>
//             <input
//               type="email"
//               placeholder="email"
//               name="email"
//               id="email"
//               value={email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">password :</label>
//             <input
//               type="password"
//               placeholder="password"
//               name="password"
//               id="password"
//               value={password}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <button>{loading ? "loading" : "submit"}</button>
//           </div>
//         </form>
//       </div>
//   )
// }

// export default App


import {Fragment, useState} from 'react'
import COUNTRY from "./country.json"

const App = () => {
  let [state,setState]=useState({
    title:"",
    comment:"",
    gender:"",
    loading:false,
    js_lib:"",
    country:"",
    price_range:0,
    date:"",
    time:"",
    theme_color:""
  })
  let countries=COUNTRY
  let [skills,setSkills]=useState("")
  let {title,comment,loading,gender,js_lib,country,price_range,date,time,theme_color}=state
  let handleChange=e=>{
    let {name,value}=e.target
    setState({...state,[name]:value ,loading:true})
  }
  let handleSubmit=e=>{
    e.preventDefault()
    try{
      console.log({...state,skills});
      setState({loading:false,title:"",comment:""})
    }
    catch(error){
      console.log(error);
    }
    finally{
      setState({title:"",comment:""})
    }
  }
  // let handleCountryChange=e=>{
  //   let {name,value}=e.target
  //   setCountries([e.target.value])
  // }
  let handleCheckbox=e=>{
    let {value}=e.target
    // console.log(value);
    if(e.target.checked){
      setSkills(oldChecked =>{
        // console.log("if"+ [...oldChecked]);
        return [...oldChecked,value]
      })
    }
    else{
      setSkills(skills.filter(item => {
        return(
          item !== value
        )}))
    }
  }
  return (
    <div className='container'>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name='title' placeholder='title' id='title' value={title} onChange={handleChange}/>
        </div>
        <div className="form-group" name="gender" value={gender} onChange={handleChange}>
          <label htmlFor="gender">Select Gender</label>
          <input type="radio" name="gender" value="male"/>Male
          <input type="radio" name="gender" value="female"/>Female
          <input type="radio" name="gender" value="others"/>Others
        </div>
        <div className="form-group" name="skills" value={skills} onChange={handleCheckbox}>
          <label htmlFor="skills">Select Skills</label>
          <input type="checkbox" name="skills" id="skills" value="javascript" />JavaScript
          <input type="checkbox" name="skills" id="skills" value="java" />Java
          <input type="checkbox" name="skills" id="skills" value="nodejs" />Nodejs
          <input type="checkbox" name="skills" id="skills" value="react" />React
        </div>
        <div className="form-group">
          <label htmlFor="choose javascript libraries">choose javascript libraries</label>
          <select name="js_lib" value={js_lib} onChange={handleChange}>
            <option value=""></option>
            <option value="react">React</option>
            <option value="momentjs">Momentjs</option>
            <option value="jquery">Jquery</option>
          </select>
        </div>

        {/* COUNTRY BLOCK */}
        <div className="form-group">
          <label htmlFor="country">select country</label>
          <select name="country" id="country" value={country} onChange={handleChange}>
            {
              countries.map(country=>{
                return <Fragment key={country.code}>
                  <option value={country.code}>
                    <Fragment>
                      <span>
                        {country.country}
                      </span>
                    </Fragment>
                  </option>
                </Fragment>
              })
            }
          </select>
        </div>

        {/* price range */}
        <div className="form-group">
          <label htmlFor="price_range">price range</label>
          <span>{price_range.length>0 && price_range}</span>
          <input type="range" name="price_range" id="price_range" min={0} max={100} value={price_range} onChange={handleChange}/>
        </div>

        {/* date object */}
        <div className="form-group">
          <label htmlFor="date">Select date</label>
          <input type="date" name="date" id="date"  value={date} onChange={handleChange}/>
        </div>

        {/* time object */}
        <div className="form-group">
          <label htmlFor="time">Select time</label>
          <input type="time" name="time" id="time"  value={time} onChange={handleChange}/>
        </div>

        {/* color*/}
        <div className="form-group">
          <label htmlFor="theme_color">Select time</label>
          <input type="theme_color" name="theme_color" id="theme_color"  value={theme_color} onChange={handleChange}/>
        </div>

        {/*textarea*/}
        <div className="form-group">
          <label htmlFor="comment">Write your comment</label>
          <textarea name="comment" id="comment" cols="30" rows="10" value={comment} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <button disabled={!state.title && !state.comment ? true :false}>{loading ?"loading":"submit"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
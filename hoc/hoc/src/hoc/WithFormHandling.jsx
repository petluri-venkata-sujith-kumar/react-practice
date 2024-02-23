import React, { useState } from 'react'

const withFormHandling = (WrappedComponent) => {
  return function comp(){
    let [state,setState]=useState({
        values:{},
        errors:{}
    })
    let handleChange=e=>{
        const {name,value}=e.target
        setState({...state,[name]:value})
        // setState(preveState=>{
        //     let email=preveState.values.email
        //     let password=preveState.values.password
        //     preveState={email,password}
        //     console.log(preveState);
        // })
        // console.log(name);
        // console.log(value);
    }
    let handleSubmit=e=>{
        e.preventDefault()
        // const errors=validateErrors()
        // setState({errors})
        // if(Object.keys(errors).length===0){
        //     props.onSubmit(state.values)
        // }
        console.log(state);

    }
    function validateErrors(){
        return {}
    }
    return <WrappedComponent  values={state.values} errors={state.errors} handleChange={handleChange} handleSubmit={handleSubmit}/>
  }
}

export default withFormHandling
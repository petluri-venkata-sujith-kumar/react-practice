import React from 'react'
import withFormHandling from '../../hoc/WithFormHandling'


const Login = ({handleChange,handleSubmit,values,errors}) => {
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder='enter email' name="email" id="" value={values.email} onChange={handleChange}/>
            <input type="password" name="password" id="" placeholder='enter password' value={values.password} onChange={handleChange}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default withFormHandling(Login)
import React from 'react'
import Hoc from '../../hoc/Hoc'
import withFetch from '../../hoc/Hoc'

const Profile = ({data,loading,error}) => {
    console.log(data);
  if(loading===true || data===null){
    return "loading...."
  }
  else{
   return data.length>0 && data.map(user=>{
        return (
            <li>
                <picture>
                    <img src={user.avatar_url} alt={user.login} height={200} width={200} />
                </picture>
                <h2>{user.login}</h2>
            </li>
        )
    })
  }
}

export default withFetch(Profile)
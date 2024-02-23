import { useState } from 'react'
import USER from "../../data.json"
import { Link } from 'react-router-dom';
const AllUsers = () => {
  let [state,setstate]=useState(USER)
  return (
    <div className='users'>
      {
        state.map.length >0 && state.map(user=>{
          return (
            <>
              <div className="users_container">
                <figure>
                  <picture>
                    <img src={user.avatar_url} alt={user.login} height= {150} width={150}/>
                  </picture>
                  <Link to={`/users/${user.login}`} state={user}>View More</Link>
                </figure>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default AllUsers
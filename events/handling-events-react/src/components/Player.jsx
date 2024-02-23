import React from 'react'

const Player = (props) => {
    let {link,imageUrl,movie_name}=props.data
    let handleClick=()=>{
        const audio=new Audio(link)
        audio.play()
    }
  return (
        <div>
            <h1>{movie_name}</h1>
            <figure>
                <picture>
                    <img src={imageUrl} alt="photo" onClick={handleClick}/>
                </picture>
            </figure>
        </div>

  )
}

export default Player
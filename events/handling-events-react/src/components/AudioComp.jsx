import { Fragment } from "react"
import Player from "./Player"


const AudioComp = ({audioArr}) => {
  return (
    <article className="container">
        {
            audioArr.map((audio,index)=>{
                return (
                    <Fragment key={index+1}>
                        <Player data={audio}/>
                    </Fragment>
                )
            })
        }
    </article>
  )
}

export default AudioComp
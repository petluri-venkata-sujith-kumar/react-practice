import { useState } from "react"
import PLAYERS from "../../Player.json"

const Player = () => {
    let [state,setState]=useState(PLAYERS)
    console.log(state);
  return (
    <div>
        <h1>ALL INDIAN CRICKET PLAYERS LIST</h1>
        <div className="players">
            {
                state.Players.map.length >0 && state.Players.map(player=>{
                    return (
                      <>
                        <div className="player_container">
                          <figure>
                            <picture>
                              <img src={player.photo} alt={player.name} height= {150} width={150}/>
                            </picture>
                          </figure>
                          <div className="info">
                          <p>Name: {player.name}</p>
                          <p>Runs: {player.runs}</p>
                          </div>
                        </div>
                      </>
                    )
                  })
            }
        </div>
    </div>
  )
}

export default Player
import { AirtelContextApi } from "../../context/AirtelContext"
// console.log(AirtelContextApi);
const Shashi = () => {
    let {Consumer}=AirtelContextApi
  return (
    <>
        <div>
            <h1>Shashi is using Airtel network for data and extra things</h1>
        </div>
        <div>
            <Consumer>
                {
                    (value)=>{
                        let {network_name,price,duration,nearest_tower,sim_type}=value
                        return (
                            <>
                                <h1>Network :{network_name}</h1>
                                <p>Price :&#8377;{price}</p>
                                <p>validity :{duration}</p>
                                <p>nearest tower :{nearest_tower}</p>
                                <p>sim type :{sim_type}</p>
                            </>
                        )
                    }
                }
            </Consumer>
        </div>
    </>
  )
}

export default Shashi
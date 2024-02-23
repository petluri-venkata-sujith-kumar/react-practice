import { AirtelContextApi } from "../../context/AirtelContext";

const Lavan = () => {
  return (
    <>
      <div>
        <h1>lavan is using Airtel network for data and extra things</h1>
      </div>
      <div>
        <AirtelContextApi.Consumer>
          {(value) => {
            let { network_name, price, duration, nearest_tower, sim_type } =
              value;
            return (
              <>
                <h1>Network :{network_name}</h1>
                <p>Price :&#8377;{price}</p>
                <p>validity :{duration}</p>
                <p>nearest tower :{nearest_tower}</p>
                <p>sim type :{sim_type}</p>
              </>
            );
          }}
        </AirtelContextApi.Consumer>
      </div>
    </>
  );
};

export default Lavan;

import React from "react";

const Child = ({data}) => {
    // console.log(props);
    // return (
    //     <div>
    //         {props.data.fun()}
    //     </div>
    // )
    // console.log(Object.entries(data.address));
  return (
    <div>
      {data.map((data) => {
        return (  
          <div className="container">
            <p>{data.name}</p>
            <p>age:{data.age}</p>
            <div className="shit">{Object.entries(data.address).map(([add,dd])=>(
                <div className="space">
                    <p>Address:{add},{dd}</p>
                </div>
            ))}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Child;

import React, { useMemo, useState } from "react";

let factorial = (n) => {
  let i = 0;
  while(i<10000)i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
const MemoExample = () => {
  let [count, setCount] = useState(1);
  let [name, setName] = useState("");
  const result =useMemo(()=> factorial(count),[count]);
  return (
    <div>
      <h1>Memo Example</h1>
      <strong>
        Please check count value : {count} along with factorial value : {result}
      </strong><br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <hr />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr />
        <MemorizedName name={name}/>
    </div>
  );
};

export default MemoExample;

const DisplayName=({name})=>{
    return (
        <div>
            {console.log("I am child component please look at me once...")}
            <h1>{name}</h1>
        </div>
    )
}
let MemorizedName=React.memo(DisplayName)
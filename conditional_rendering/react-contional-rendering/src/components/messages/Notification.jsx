import Info from "./Info"

const Notification = ({state}) => {
    // if(state[0].status==="info"){
    //   console.log("hello info text");
    // }
  return (
    <div>
        {state.map(data=>{
            return (
                <Info  {...data}/>
            )
        })}
    </div>
  )
}

export default Notification
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var data=[
    {
        id:1,
        username:"sujith",
        skills:["java","reactjs"],
        batch:"nov",
        image_src:"https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1703676211~exp=1703676811~hmac=7acc20bbb622f4805b1efc70e5833787341cb8a22061de5d0763a4b5be0b0b20"
    },
    {
        id:2,
        username:"dhanush",
        skills:["java","reactjs"],
        batch:"nov",
        image_src:"https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1703676211~exp=1703676811~hmac=7acc20bbb622f4805b1efc70e5833787341cb8a22061de5d0763a4b5be0b0b20"
    },
    {
        id:3,
        username:"chirag",
        skills:["java","reactjs"],
        batch:"nov",
        image_src:"https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1703676211~exp=1703676811~hmac=7acc20bbb622f4805b1efc70e5833787341cb8a22061de5d0763a4b5be0b0b20"
    },
    {
        id:4,
        username:"imran",
        skills:["java","reactjs"],
        batch:"nov",
        image_src:"https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1703676211~exp=1703676811~hmac=7acc20bbb622f4805b1efc70e5833787341cb8a22061de5d0763a4b5be0b0b20"
    },
    {
        id:5,
        username:"ankitha",
        skills:["java","reactjs"],
        batch:"nov",
        image_src:"https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1703676211~exp=1703676811~hmac=7acc20bbb622f4805b1efc70e5833787341cb8a22061de5d0763a4b5be0b0b20"
    },
    {
        id:6,
        username:"ramya",
        skills:["java","reactjs"],
        batch:"nov",
        image_src:"https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1703676211~exp=1703676811~hmac=7acc20bbb622f4805b1efc70e5833787341cb8a22061de5d0763a4b5be0b0b20"
    }
]

// console.log(x());
console.log(data);
export default class  extends Component {
    state={data} 
    remove=(index)=>{
        const update=[...this.state.data]
        update.splice(index,1)
        this.setState({data:update})
    }
  render() {
    // console.log(this.state.data);
    return (
      <div id='trainercontainer'>
        {
            this.state.data.map((details,index)=>{
                return (
                    <section className='card'>
                        <img src={details.image_src} alt="image" />
                        <h1>Trainer name: {details.username}</h1>
                        <h2>skills : {details.skills.join(", ")}</h2>
                        <h2>Batch : {details.batch}</h2>
                        <button onClick={()=>this.remove(index)}>Delete</button>
                    </section>
                )
            })
        }
      </div>
    )
  }
}


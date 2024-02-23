import { useContext, useRef, useState } from "react";
import { ThemeContextApi } from "../context/ThemeContext";

const Container = () => {
    const [toggle,setToggle]=useState(true)
    let {light,dark}=useContext(ThemeContextApi)
    let elemRef=useRef()
    let handleTheme=()=>{
        setToggle(!toggle)
        if(toggle==true){
            elemRef.current.style.background=dark.background
            elemRef.current.style.color=dark.color
        }
        else{
            elemRef.current.style.background=light.background
            elemRef.current.style.color=light.color
        }
    }
  return (
    <div ref={elemRef}>
        <button onClick={handleTheme}>{toggle ?"dark":"light"}</button>
      <h1>I am container block</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis unde
        suscipit commodi amet delectus sapiente! Molestias facilis iste sit
        pariatur, quisquam explicabo culpa? Nesciunt ea dolorum quo,
        praesentium, dolores sit, provident eligendi beatae soluta placeat enim
        natus quisquam recusandae magnam! Dolores non eius sapiente cum
        voluptatem aliquid laudantium possimus vel dicta sequi, nam repudiandae
        dignissimos incidunt, est hic quo? Deserunt officia placeat sunt harum
        deleniti voluptates natus unde ut necessitatibus obcaecati, at eos
        eligendi qui voluptatibus sequi, ducimus id quae quos tempore ipsum,
        blanditiis amet. Aperiam, similique maxime, vero, architecto nostrum rem
        repudiandae aliquid necessitatibus consectetur officiis quasi voluptas
        minus.
      </p>
    </div>
  );
};

export default Container;

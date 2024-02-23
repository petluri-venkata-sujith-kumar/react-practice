import Login from './components/Login';
import Register from './components/Register';
import CssInJs from './components/CssInJs';
// import styled from 'styled-components';
import ContactForm from './components/ContactForm';
// console.log(styled);
// we have limitations in css-in-js -you cant use pseudo-selectors,media queries,keyframes etc...
let styles={
  background:"#673ab7",
  color:"#111",
  fontSize:25,
  margin:20
}
// const H1=styled.h1`
// color:red;
// font-size:20px`
const App = () => {
  return (
    <div >
        {/* <Login/>
        <Register/> */}
        {/* <H1>hello h1</H1> */}
        {/* <CssInJs/> */}
        <ContactForm color="#111"/>
    </div>
  )
}

export default App
// import { Fragment } from "react";

import { Fragment } from "react"

// import { Fragment } from "react";

// const Navbar = (props) => {
//   console.log(props);
//   let { isLoggedIn, isSetLoggedIn } = props.data;

//   let changeState = () => {
//     isSetLoggedIn(false);
//   };
//   //   if(isLoggedIn) {
//   //     return (
//   //       <Fragment>
//   //         <section id="navbar">
//   //           <article className="container">
//   //             <div className="logoBlock">LOGO</div>
//   //             <div className="menuBlock">
//   //               <ul>
//   //                 <li>
//   //                   <a href="#">Home</a>
//   //                 </li>
//   //                 <li>
//   //                   <a href="#">Services</a>
//   //                 </li>
//   //                 <li>
//   //                   <a href="" onClick={changeState}>Logout</a>
//   //                 </li>
//   //               </ul>
//   //             </div>
//   //           </article>
//   //         </section>
//   //       </Fragment>
//   //     );
//   //   }
//   //   else{
//   //     return (
//   //       <Fragment>
//   //         <section id="navbar">
//   //           <article className="container">
//   //             <div className="logoBlock">LOGO</div>
//   //             <div className="menuBlock">
//   //               <ul>
//   //                 <li>
//   //                   <a href="#">Home</a>
//   //                 </li>
//   //                 <li>
//   //                   <a href="#">Services</a>
//   //                 </li>
//   //                 <li>
//   //                   <a href="#">Login</a>
//   //                 </li>
//   //                 <li>
//   //                   <a href="#">Register</a>
//   //                 </li>
//   //               </ul>
//   //             </div>
//   //           </article>
//   //         </section>
//   //       </Fragment>
//   //     );
//   //   };
//   return (
//     <Fragment>
//       <section id="navbar">
//         <article className="container">
//           <div className="logoBlock">LOGO</div>
//           <div className="menuBlock">
//             <ul>
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">Services</a>
//               </li>
//               <li>
//                 <a href="" onClick={changeState}>
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </article>
//       </section>
//     </Fragment>
//   );
// };

// export default Navbar;

// const Navbar = ({data:{isLoggedIn,isSetLoggedIn}}) => {
//     if(!isLoggedIn){
//         return (
//             <Fragment>
// <li>
//     <a href="">Login</a>
// </li>
// <li>
//     <a href="">Register</a>
// </li>
//             </Fragment>
//         )
//     }
//   return (
//     <Fragment>
//         <li>
//             <a href="">Logout</a>
//         </li>
//     </Fragment>
//   )
// }

// export default Navbar

// import { Fragment } from "react";

// const Navbar = ({ data: { isLoggedIn, isSetLoggedIn } }) => {
//   let changeState = (e) => {
//     e.preventDefault()
//     isSetLoggedIn(!isLoggedIn);
//   };
 
//   return (
//     <Fragment>
//       <section id="navbar">
//         <article className="container">
//           <div className="logoBlock">LOGO</div>
//           <div className="menuBlock">
//             <ul>
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">Services</a>
//               </li>

//               {isLoggedIn ? (
//                 <Fragment>
//                   <li>
//                     <a href="" onClick={changeState}>Login</a>
//                   </li>
//                   <li>
//                     <a href="" onClick={changeState}>Register</a>
//                   </li>
//                 </Fragment>
//               ) : (
//                 <Fragment>
//                   <li>
//                     <a href="" onClick={changeState}>
//                       Logout
//                     </a>
//                   </li>
//                 </Fragment>
//               )}
//             </ul>
//           </div>
//         </article>
//       </section>
//     </Fragment>
//   );
// };

// export default Navbar;


const Navbar = ({data:{isLoggedIn , isSetLoggedIn}}) => {
  const IsAuthenticated =()=>{
    return (
      <Fragment>
        <li>
          <button>LOGOUT</button>
        </li>
      </Fragment>
    )
  }
  const IsAnonymousUser =()=>{
    return (
      <Fragment>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Register</a>
        </li>
      </Fragment>
    )
  }
  return (
    <section id="navbar">
      <article className="container">
        <div className="logoBlock">LOGO</div>
        <div className="menuBlock">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            {isLoggedIn ? <IsAuthenticated/> : <IsAnonymousUser/>}
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Navbar
import { lazy, Suspense } from "react";
const Login = lazy(() => delayForDemo(import("./Login")));
console.log(Login);
function delayForDemo(promise){
  return new Promise(resolve=>{
    setTimeout(resolve,2000)
  }).then(()=>promise)
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Login />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
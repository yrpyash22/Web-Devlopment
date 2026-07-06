import "./App.css"
import Title from "./Title.jsx"
import Product from "./Product.jsx";
import Activity1 from "./Activity1.jsx";

function Description() {
  let name = "SANOJ";
  return <>
    <h3>I am the Description - 5*5 = {5*5}</h3>
    <h2>Hi, {name.toLowerCase()} </h2>
  </>
}

function App() {
  // here <> </> - react fragment to return multiple tags without making the extra nodes of DOM
  //let options = ["hi-tech", "durable", "fast"];
  //let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];

  return (
    <>
      {/* <Title />
      <Description/>
      <Title />
      <Description/> */}
      {/* Here option will be used as list item */}
      <Product title = "Computer" price = {50000}/>
      <Product title = "Monitor" price = {10000} />
      <Product title = "Mouse" price = {1000} />
      <Activity1 userName = "Sanoj" textColor = "red" />
      <Activity1 userName = "Kumar"  />
      <Activity1 userName = "Supriya" textColor = "blue" />

    <button>Hello World!</button>
    </>
  ); 
}

export default App

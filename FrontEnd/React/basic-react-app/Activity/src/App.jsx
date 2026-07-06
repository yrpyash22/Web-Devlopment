import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Amazoncard from './Amazoncard'
import "./Product.css"
import Button from './Button'
import Form from './Form'



function App() {
  //let descriptionsArr = ["8,000DPI", "5 Programming Button"]
  return (
    <>
    {/* <div className="products">
    {/* <Amazoncard title="Logitech MX Master 3S" imgSrc="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1" description = {descriptionsArr} oldPrice={12495} newPrice={8990} />
    <Amazoncard title="Apple Pencil (2nd Gen)" imgSrc="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1" description = {descriptionsArr} oldPrice={12495} newPrice={8990} />
    <Amazoncard title="Logitech MX Master 3S" imgSrc="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1" description = {descriptionsArr} oldPrice={12495} newPrice={8990} />
    <Amazoncard title="Logitech MX Master 3S" imgSrc="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1" description = {descriptionsArr} oldPrice={12495} newPrice={8990} />
    </div> */}
    {/* <Button /> */}
    <Form/>
    </>
  )
}

export default App

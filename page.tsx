"use client"

import { useState } from "react"

 export default function Number() {
  const [number , setNumber] = useState(0);
  const handleIncrement = () => {
    setNumber(number + 1);
    console.log(number);
  }
    
      return(
        <>
        <div className="flex b-full h-(700px) justify-centre items-centre">
         
          
           <button className="bg-blue-600  px-4 py-1 rounded-[10px] text-[24px]">-</button>
          <p className="mx-3 text[34px] ">{number}</p>          
          <button onClick={handleIncrement} className="bg-blue-600 px-4 py-1 rounded-[10px] text-[24px]">+</button>
          </div>

<div>
  <h2 className="intro">** This game will define your heighst number of clicks and increase your speed share your highest number**</h2>
</div>
        </>
      )
    }
  

    
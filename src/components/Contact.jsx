import { useState, useEffect } from "react";

function Contact(){
    
  const [clicked, setClicked] = useState(false);
   useEffect(()=>{
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  },[clicked])

    return(
        <div className="py-4 px-3">
            <div className="my-3">
                <p className="font-semibold">Your Name</p>
                <input type="text" className="my-2 bg-gray-200 h-10"/>
            </div>

            <div className="my-3">
                <p className="font-semibold">Your E-Mail</p>
                <input type="text" className="my-2 bg-gray-200 h-10"/>
            </div>

            <div className="my-3">
                <p className="font-semibold">Your Question</p>
                <textarea name="" id="" cols="30" rows="10" className="my-2 w-80 bg-gray-200"></textarea>
            </div>

            <div className={` border-2 ${clicked? 'border-white bg-amber-950':'border-amber-950'} ${clicked? 'text-white':'text-amber-950'} font-bold py-2 my-8 w-4/6 text-center mx-auto`} onClick={()=>setClicked(true)}>Send a message</div>
        </div>
    )
} 

export default Contact
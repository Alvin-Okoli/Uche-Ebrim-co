import { useState, useEffect } from "react";

function Contact(){
    
  const [clicked, setClicked] = useState(false);
   useEffect(()=>{
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  },[clicked])

    return(
        <>
            <div className="text-gray-400 lg:text-lg my-16 mb-18 flex justify-center gap-2 lg:my-28"> &#8212;&#8212;&#8212;&#8212; Send us a Message &#8212;&#8212;&#8212;&#8212; </div>
            <div className="py-4 px-3 grid gap-4 lg:px-28 md:grid-cols-2 lg:gap-10">
                <div className="lg:my-3">
                    <p className="font-semibold lg:text-2xl">Your Name</p>
                    <input type="text" className="px-3 my-2 bg-gray-200 text-xl h-10 w-full lg:h-16"/>
                </div>

                <div className="lg:my-3">
                    <p className="font-semibold lg:text-2xl">Your E-Mail</p>
                    <input type="text" className="px-3 my-2 bg-gray-200 text-xl h-10 w-full lg:h-16"/>
                </div>

                <div className="lg:my-3">
                    <p className="font-semibold lg:text-2xl">Number</p>
                    <input type="text" className="px-3 my-2 bg-gray-200 text-xl h-10 w-full lg:h-16"/>
                </div>

                <div className="lg:my-3">
                    <p className="font-semibold lg:text-2xl">Location</p>
                    <input type="text" className="px-3 my-2 bg-gray-200 text-xl h-10 w-full lg:h-16"/>
                </div>

                <div className="my-3 col-span-full">
                    <p className="font-semibold">Your Question</p>
                    <textarea name="" id="" cols="30" rows="10" className="my-2 w-full bg-gray-200"></textarea>
                </div>

            </div>

            <div className={` border-2 ${clicked? 'border-white bg-amber-950':'border-amber-950'} ${clicked? 'text-white':'text-amber-950'} font-bold py-2 my-8 w-4/6 text-center mx-auto cursor-pointer`} onClick={()=>setClicked(true)}>{clicked? 'message sent': 'Send a message'}</div>
        </>
    )
} 

export default Contact
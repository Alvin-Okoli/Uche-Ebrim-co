import { useState, useEffect } from "react";

function About() {

  const [clicked, setClicked] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  },[clicked])
    
  return (
    <div className="py-10 px-3">
      <h1 className="text-gray-400 text-md my-4 mb-18 flex justify-center gap-2">&#8212;&#8212;&#8212;&#8212; <span>About us</span> &#8212;&#8212;&#8212;&#8212;</h1>
      <p className="text-3xl text-center font-serif font-bold py-2 mb-12">A leading Nigerian Law Firm</p>
      <p className="text-gray-700 py-1">At The Uche Ebrim & co Chamber, we are a dynamic team built on a winning culture of excellence, integrity, and results. We are passionately committed to defending your cause with the highest standard of legal expertise. Our approach is rooted in continuous improvement, strategic thinking, and innovation—ensuring that every client receives tailored, forward-thinking legal solutions. Whether you're facing a complex legal challenge or seeking sound counsel, The Chamber stands by you with clarity and confidence.</p>
      <p className="text-gray-700 py-1 mb-4">We are not just lawyers, we are your partners in navigating the legal landscape, dedicated to achieving the best outcomes for you. With a legacy of success and a commitment to excellence, The Uche Ebrim & co Chamber is your trusted ally in the pursuit of justice.</p>

      <p className="font-semibold italic">sir Gregor</p>
      <p>Founder of The Chamber</p>
      
      <img src="313696_1345417880_vintage-lawyers-1.jpeg" alt="team" className="text my-12 rounded-br-[80px]"/>

      <div className={` border-2 ${clicked? 'border-white bg-amber-950':'border-amber-950'} ${clicked? 'text-white':'text-amber-950'} font-bold py-2 my-8 w-4/6 text-center mx-auto`} onClick={()=>setClicked(true)}>Know More About Us </div>
    </div>
    )
}

export default About;

// {showInfo&&
//         <div className="bg-white fixed overflow-scroll max-h-screen w-full top-0 z-30 pt-10 px-3">
//         <img src="cancel-blacksvgrepo-com.svg" alt="cancel" width={30} className="fixed right-4 top-4" onClick={()=>setShowInfo(false)}/>
//         <div className="h-auto overflow-auto">
//           <div className="font-bold font-serif text-3xl text-center my-4">{title}</div>
//           <div className="text-black">{serviceInfo}</div>
//           <div className="text-black">{serviceInfo}</div>
//           <div className="text-black">{serviceInfo}</div>
//         </div>
//       </div>}
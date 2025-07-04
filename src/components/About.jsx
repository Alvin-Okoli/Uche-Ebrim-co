import { useState } from "react";

function About() {

  const [clicked, setClicked] = useState(false);
  return (
    <div className="py-10 px-3">
      <h1 className="text-gray-400 text-md my-4 mb-18 flex justify-center gap-2">&#8212;&#8212;&#8212;&#8212; <span>About us</span> &#8212;&#8212;&#8212;&#8212;</h1>
      <p className="text-3xl text-center font-serif font-bold py-2 mb-12">A leading Nigerian Law Firm</p>
      <p className="text-gray-700 py-2 my-2">We are a great team and winning culture dedicated to defending your course. Our team is committed to continuous improvement and innovation. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum at iusto sed dolores recusandae! Pariatur fuga aut illum fugit aspernatur porro temporibus, accusamus alias maiores tenetur repellat, quo perspiciatis doloremque!</p>
      <p>sir Gregor</p>
      <p>Founder of The Chamber</p>
      <img src="313696_1345417880_vintage-lawyers-1.jpeg" alt="team" className="text my-12 rounded-br-[80px]"/>
      <div className={` border-2 ${clicked? 'border-white bg-amber-950':'border-amber-950'} ${clicked? 'text-white':'text-amber-950'} font-bold py-2 my-8 w-4/6 text-center mx-auto`} onClick={()=>setClicked(true)}>Know More About Us </div>
    </div>
    )
}

export default About;
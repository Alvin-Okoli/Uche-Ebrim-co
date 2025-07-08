

function Hero() {
  return (
    <div className="relative h-160 pt-32 mb-10 text-center text-white  bg-[url(/ed052804-29d3-4800-91a6-471b486808ed.jpeg)] bg-cover bg-center bg-no-repeat">

        <div className=" absolute inset-0 top-0 h-160 bg-black/50 "></div>

        <div className="relative z-10">
            <h1 className="text-5xl font-bold py-2">Uche Ebrim & co Chambers</h1>
            <p className="text-2xl font-bold py-2 px-3">Where Justice Meets Expertise</p>
            <p className="font-light py-2 px-3 mb-8">We don't just represent you—we stand with you. From complex litigation to everyday legal advice, our experienced attorneys are committed to protecting what matters most. Whether you're seeking justice, protection, or clarity, our team stands ready to advocate for your rights and guide you every step of the way.</p>
            <button className="bg-amber-950 p-4 rounded-sm my-2 cursor-pointer">ASK FOR CONSULTATION</button>
        </div>
    </div>
  )
}

export default Hero;
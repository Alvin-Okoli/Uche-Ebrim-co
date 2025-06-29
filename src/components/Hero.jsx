

function Hero() {
  return (
    <div className="relative h-160 pt-32 mt-28 mb-10 text-center text-white rounded-bl-[100px] bg-[url(/ed052804-29d3-4800-91a6-471b486808ed.jpeg)] bg-cover bg-center">

        <div className=" absolute inset-0 top-0 h-160 bg-black/50  rounded-bl-[100px]"></div>

        <div className="relative z-10">
            <h1 className="text-5xl font-bold py-2">Welcome to the Chamber</h1>
            <p className="text-3xl font-bold py-2">Your journey begins here.</p>
            <p className="font-light py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae veniam minus illo commodi est, sequi quo deleniti, officiis dolores excepturi molestiae adipisci corporis culpa, unde dolorem pariatur aspernatur soluta.</p>
            <button className="bg-amber-950 p-4 rounded-sm my-2">ASK FOR CONSULTATION</button>
        </div>
    </div>
  )
}

export default Hero;
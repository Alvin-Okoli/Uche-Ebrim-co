import { useState } from 'react';

function Hero() {
  const [show, setShow] = useState(false);
  const showConsultation = () => {
    setShow(!show);
    console.log("Consultation button clicked");
  };

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    }
    catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <div className="relative h-160 pt-28 mb-10 text-center md:text-left text-white bg-[url(/ed052804-29d3-4800-91a6-471b486808ed.jpeg)] bg-cover bg-center md:bg-top bg-no-repeat lg:pt-24">

        <div className=" absolute inset-0 top-0 h-160 bg-black/50 "></div>

        <div className="relative z-10 md:px-6 lg:px-52">
            <h1 className="text-5xl font-bold py-2 lg:text-7xl">Uche Ebrim & co Chambers</h1>
            <p className="text-2xl text-amber-300 font-bold py-2 px-3 lg:text-4xl lg:my-6">Where Justice Meets Expertise</p>
            <p className="font-light mb-8 md:text-lg lg:text-xl xl:pr-50">We don't just represent you—we stand with you. From complex litigation to everyday legal advice, our experienced attorneys are committed to protecting what matters most. Whether you're seeking justice, protection, or clarity, our team stands ready to advocate for your rights and guide you every step of the way.</p>
            <button className="bg-amber-950 p-4 rounded-sm my-2 cursor-pointer lg:text-xl lg:p-6 hover:text-amber-300" onClick={()=>setShow(true)}>ASK FOR CONSULTATION</button>
        </div>

        {show&&
          <>
            <div className='fixed inset-0 bg-black/50 z-20 h-screen'></div>
            <div className='w-5/6 bg-white px-8 py-10 text-black fixed top-1/4 right-1/12 z-30 lg:w-3/6 lg:top-1/5 lg:left-1/4'>
              <h2 className='mb-10 text-4xl font-bold'>Contact Us</h2>
              <div className='px-2 py-6 md:px-20 flex justify-between items-center bg-gray-100'>
                <div>
                  <div className='mb-2 text-black text-2xl font-semibold'>Email Address</div>
                  <div className='text-blue-400 text-sm'>UcheEbrim@gmail.com</div>
                </div>
                <button onClick={()=>copyToClipboard('alvin')} className=''><img src="clipboard-svgrepo-com.svg" alt="" className='h-10 cursor-pointer'/></button>
              </div>

              <div className='px-4 py-6 my-10 md:px-20 flex justify-between items-center bg-gray-100'>
                <div>
                  <div className='mb-2 text-black text-2xl font-semibold'>Whatsap</div>
                  <div className='text-sm'>Chat with us</div>
                </div>
                <a 
                href='https://wa.me/2348059083740' 
                className='bg-green-500 p-4 px-6 rounded text-xl text-white font-semibold'
                target='_blank'
                rel="noopener noreferrer"
                >
                  chat
                </a>
              </div>

              <button onClick={()=>setShow(false)}><img src="cancel-blacksvgrepo-com.svg" alt="" className='absolute top-2 right-2 h-8 cursor-pointer'/></button>
            </div>
          </>
        }
    </div>
  )
}

export default Hero;
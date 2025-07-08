import { useEffect, useState } from "react";

const services = [
  {
    image: 'real-estate-building-svgrepo-com.svg',
    title: 'Real Estate',
    snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad ipsum amet iure dolor hic neque beatae iusto necessitatibus.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab atque fuga facere quas? Amet tempore aut temporibus est nobis error suscipit molestias perspiciatis repellat vel, voluptates magni molestiae. Deserunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat a quae, minus tempora exercitationem qui consectetur non. Ullam esse culpa, modi quam ducimus expedita vel, blanditiis laborum veniam ipsum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas reprehenderit id blanditiis officiis praesentium dolores iste iusto aperiam. Pariatur error nisi accusamus et quaerat officia natus sapiente cumque ipsam.'
  },
  {
    image: 'human-network-svgrepo-com.svg',
    title: 'Intellectual Property',
    snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad ipsum amet iure dolor hic neque beatae iusto necessitatibus.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab atque fuga facere quas? Amet tempore aut temporibus est nobis error suscipit molestias perspiciatis repellat vel, voluptates magni molestiae. Deserunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat a quae, minus tempora exercitationem qui consectetur non. Ullam esse culpa, modi quam ducimus expedita vel, blanditiis laborum veniam ipsum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas reprehenderit id blanditiis officiis praesentium dolores iste iusto aperiam. Pariatur error nisi accusamus et quaerat officia natus sapiente cumque ipsam.'
  },
  {
    image: 'taxes-svgrepo-com.svg',
    title: 'Taxes Law',
    snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad ipsum amet iure dolor hic neque beatae iusto necessitatibus.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab atque fuga facere quas? Amet tempore aut temporibus est nobis error suscipit molestias perspiciatis repellat vel, voluptates magni molestiae. Deserunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat a quae, minus tempora exercitationem qui consectetur non. Ullam esse culpa, modi quam ducimus expedita vel, blanditiis laborum veniam ipsum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas reprehenderit id blanditiis officiis praesentium dolores iste iusto aperiam. Pariatur error nisi accusamus et quaerat officia natus sapiente cumque ipsam.'
  },
  {
    image: 'robbery-svgrepo-com.svg',
    title: 'Theft and Robberies',
    snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad ipsum amet iure dolor hic neque beatae iusto necessitatibus.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab atque fuga facere quas? Amet tempore aut temporibus est nobis error suscipit molestias perspiciatis repellat vel, voluptates magni molestiae. Deserunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat a quae, minus tempora exercitationem qui consectetur non. Ullam esse culpa, modi quam ducimus expedita vel, blanditiis laborum veniam ipsum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas reprehenderit id blanditiis officiis praesentium dolores iste iusto aperiam. Pariatur error nisi accusamus et quaerat officia natus sapiente cumque ipsam.'
  },
  {
    image: 'family-planning-commission-svgrepo-com.svg',
    title: 'Family Law',
    snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad ipsum amet iure dolor hic neque beatae iusto necessitatibus.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab atque fuga facere quas? Amet tempore aut temporibus est nobis error suscipit molestias perspiciatis repellat vel, voluptates magni molestiae. Deserunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat a quae, minus tempora exercitationem qui consectetur non. Ullam esse culpa, modi quam ducimus expedita vel, blanditiis laborum veniam ipsum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas reprehenderit id blanditiis officiis praesentium dolores iste iusto aperiam. Pariatur error nisi accusamus et quaerat officia natus sapiente cumque ipsam.'
  },
  {
    image: 'corporate-svgrepo-com.svg',
    title: 'Corporate Law',
    snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad ipsum amet iure dolor hic neque beatae iusto necessitatibus.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab atque fuga facere quas? Amet tempore aut temporibus est nobis error suscipit molestias perspiciatis repellat vel, voluptates magni molestiae. Deserunt?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat a quae, minus tempora exercitationem qui consectetur non. Ullam esse culpa, modi quam ducimus expedita vel, blanditiis laborum veniam ipsum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptas reprehenderit id blanditiis officiis praesentium dolores iste iusto aperiam. Pariatur error nisi accusamus et quaerat officia natus sapiente cumque ipsam.'
  }
]

function Practice() {
  const [serviceInfo, setServiceInfo] = useState('')
  const [title, setTitle] = useState('')
  const [showInfo, setShowInfo] = useState(false)
  const [clicked, setClicked] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  },[clicked])


  const showServiceInfo = (service)=>{
    setServiceInfo(service.info)
    setTitle(service.title)
    setShowInfo(true)
  } 
    
  return (
    <div className="py-10">

      <div className="px-5">
          <p className="text-gray-400 text-md my-4 mb-18 flex justify-center gap-2">&#8212;&#8212;&#8212;&#8212;&#8212; Services &#8212;&#8212;&#8212;&#8212;&#8212;</p>

        <h1 className="text-3xl text-center font-serif font-bold py-2 mb-12">Areas of Practice</h1>

        <div>
          {services.map((service, index)=>
            <div key={index} className="border px-4 pt-10 pb-5 my-6 h-80 relative">
              <div className=" border px- py-4 w-2/6 bg-amber-950">
                <img src={service.image} alt="" width={60} className="mx-auto"/>
              </div>
              < h3 className="my-2 text-2xl font-semibold font-serif">{service.title}</h3>
              < p className="my-2 text-black">{service.snippet}</p>
              <div className="absolute bottom-3 text-gray-700" onClick={()=>showServiceInfo(service)}>Read more</div>
            </div>)}
        </div>
      </div>

      <div className="text-center underline p-2"></div>
      <div className={` border-2 ${clicked? 'border-white bg-amber-950':'border-amber-950'} ${clicked? 'text-white':'text-amber-950'} font-bold py-2 my-8 w-4/6 text-center mx-auto`} onClick={()=>setClicked(true)}>VIEW ALL</div>

      {showInfo&&
        <div className="bg-white fixed overflow-scroll max-h-screen w-full top-0 z-30 pt-10 px-3">
        <img src="cancel-blacksvgrepo-com.svg" alt="cancel" width={30} className="fixed right-4 top-4" onClick={()=>setShowInfo(false)}/>
        <div className="h-auto overflow-auto">
          <div className="font-bold font-serif text-3xl text-center my-4">{title}</div>
          <div className="text-black">{serviceInfo}</div>
          <div className="text-black">{serviceInfo}</div>
          <div className="text-black">{serviceInfo}</div>
        </div>
      </div>}

    </div>
  );
}

export default Practice;
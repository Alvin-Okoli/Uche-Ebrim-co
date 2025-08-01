import { useState } from "react";


function Nav({scrolltoHeroRef, scrolltoAboutRef, scrolltoPracticeRef, scrolltoContactRef}){
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        return setShow(!show);
    }

    const menu = [
        {name: 'Home', action: scrolltoHeroRef},
        {name: 'About', action: scrolltoAboutRef},
        {name: 'Practice Areas', action: scrolltoPracticeRef},
        {name: 'Contact', action: scrolltoContactRef},
    ]

    return(

        <div className="bg-amber-950 text-white w-full h-24 pt-2 md:pt-0 md:h-24 z-20 lg:bg-white lg:text-amber-950 lg:font-bold">
            <div className="flex justify-between py-4 px-4 md:px-18 lg:justify lg:gap-34 xl:px-52 relative">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src="law-auction-svgrepo-com1.svg" alt="chamber" width={56} onClick={toggleMenu} className="hidden lg:inline-block"/>
                    <img src="law-auction-svgrepo-com.svg" alt="chamber" width={52} onClick={toggleMenu} className="inline-block lg:hidden"/> 
                    <div>
                        <div className="text-2xl font-serif">Uche Ebrim & co</div>
                        <div className="text-sm text-gray-400 font-serif">Barristers, Solicitors</div>
                    </div>         
                </div>

                <img src={show? 'cancel-whitesvgrepo-com.svg' :  'whiteburger-menu-svgrepo-com.svg'} alt="menu" width={44} onClick={toggleMenu} className="lg:hidden"/>

                <div className="hidden lg:flex gap-10 text-xl items-center">
                    {menu.map((menus, index)=>(
                        <div key={index} className="cursor-pointer py-2 hover:border-b-2" onClick={()=>{
                            menus.action();
                            }}>{menus.name}
                        </div>
                    ))}
                </div>
            </div>
            {show&&(
                <div className="text-2xl text-center bg-amber-950 w-full font-semibold p-5 absolute top-20 z-20">
                    {menu.map((menus, index)=>(
                    <div key={index} className="mb-2" onClick={()=>{
                        menus.action();
                        toggleMenu();
                        }}>{menus.name}
                    </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Nav;
import { useState } from "react";


function Nav({scrolltoHeroRef, scrolltoAboutRef, scrolltoPracticeRef, scrolltoContactRef}){
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        return setShow(!show);
    }

    return(

        <div className="bg-amber-950 text-white w-full h-30 fixed top-0 z-40">
            <div className="flex justify-between py-8 px-4 shadow relative">
            <div className="flex items-center gap-3">
                <img src="law-auction-svgrepo-com.svg" alt="chamber" width={44} onClick={toggleMenu} className="inline-block"/> <span className="text-3xl font-serif">Uche Ebrim & co</span>         
            </div>
            <img src={show? 'cancel-whitesvgrepo-com.svg' :  'whiteburger-menu-svgrepo-com.svg'} alt="menu" width={44} onClick={toggleMenu}/>
        </div>
        {show&&(
            <div className="text-2xl text-center bg-amber-950 w-full font-semibold p-5 absolute top-20 z-20">
                <div className="mb-2" onClick={()=>{
                    scrolltoHeroRef();
                    toggleMenu();
                    }}>Home</div>

                <div className="my-2" onClick={()=>{
                    scrolltoAboutRef(); 
                    toggleMenu();
                    }}>About</div>

                <div className="my-2" onClick={()=>{
                    scrolltoPracticeRef();
                    toggleMenu();
                    }}>Practice Areas</div>

                <div className="my-2" onClick={()=>{
                    scrolltoContactRef();
                    toggleMenu()
                    }}>Contact</div>
                <div className="my-2">Teams</div>
            </div>
        )}
        </div>
    )
}

export default Nav;
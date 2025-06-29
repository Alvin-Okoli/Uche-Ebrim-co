import { useState } from "react";


function Nav(){
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setShow(!show);
    }

    return(

        <div className="bg-amber-950 text-white w-full">
            <div className="flex justify-between py-8 px-4 shadow relative">
            <div className="flex items-center gap-3">
                <img src="law-auction-svgrepo-com.svg" alt="chamber" width={44} onClick={toggleMenu} className="inline-block"/> <span className="text-3xl font-serif">Uche Ebrim & co</span>         
            </div>
            <img src={show? 'cancel-whitesvgrepo-com.svg' : 'whiteburger-menu-svgrepo-com.svg'} alt="menu" width={44} onClick={toggleMenu}/>
        </div>
        {show&&(
            <div className="text-2xl text-center bg-amber-950 w-full font-semibold p-5 absolute top-20 z-20">
                <div className="mb-2">Home</div>
                <div className="my-2">About</div>
                <div className="my-2">Contact</div>
                <div className="my-2">Practice Areas</div>
                <div className="my-2">Teams</div>
            </div>
        )}
        </div>
    )
}

export default Nav;
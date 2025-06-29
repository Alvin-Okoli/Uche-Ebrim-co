import { isValidElement } from "react";

function Contact(){

    return(
        <div className="py-4 px-3">
            <div className="my-3">
                <p className="font-semibold">Your Name</p>
                <input type="text" className="my-2 bg-gray-200 h-10"/>
            </div>

            <div className="my-3">
                <p className="font-semibold">Your E-Mail</p>
                <input type="text" className="my-2 bg-gray-200 h-10"/>
            </div>

            <div className="my-3">
                <p className="font-semibold">Your Question</p>
                <textarea name="" id="" cols="30" rows="10" className="my-2 w-80 bg-gray-200"></textarea>
            </div>

            <button className="mt-6 mb-4 p-2 bg-amber-950 text-white font-bold">Send a message</button>
        </div>
    )
} 

export default Contact
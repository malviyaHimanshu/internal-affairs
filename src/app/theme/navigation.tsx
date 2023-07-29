import Image from "next/image";
import iconHome from "../icons/icon-home.svg";
import iconSearch from "../icons/icon-search.svg";
import iconPlusDark from "../icons/icon-plus-dark.svg";
import iconNotification from "../icons/icon-notification.svg";
import iconAccount from "../icons/icon-account.svg";

export default function Navigation() {
    return (
        <div className="absolute left-0 right-0 bottom-0 px-2">
            <div className="flex justify-evenly items-center h-full bg-primary-light bg-opacity-25 backdrop-blur-md rounded-3xl m-2 md:m-4 lg:m-5 mx-auto md:mx-auto lg:mx-auto max-w-sm">
                <div className="h-14 w-14 grid place-content-center hover:scale-110 transition-all duration-150 ease-in-out">
                    <Image src={iconHome} alt="" className=" h-5"/>
                </div>
                <div className="h-14 w-14 grid place-content-center hover:scale-110 transition-all duration-150 ease-in-out">
                    <Image src={iconSearch} alt="" className=" h-5"/>
                </div>
                <div className="h-14 w-14 grid place-content-center hover:scale-110 transition-all duration-150 ease-in-out">
                    <div className="bg-accent p-2 rounded-xl shadow-accent shadow-2xl ">
                        <Image src={iconPlusDark} alt="" className="h-5"/>
                    </div>
                </div>
                <div className="h-14 w-14 grid place-content-center hover:scale-110 transition-all duration-150 ease-in-out">
                    <Image src={iconNotification} alt="" className=" h-5"/>
                </div>
                <div className="h-14 w-14 grid place-content-center hover:scale-110 transition-all duration-150 ease-in-out">
                    <Image src={iconAccount} alt="Logo" className=" h-5"/>
                </div>
            </div>
        </div>        
    );
}
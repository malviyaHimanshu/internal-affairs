import Image from "next/image";
import iconHome from "../icons/icon-home.svg";
import iconSearch from "../icons/icon-search.svg";
import iconPlusDark from "../icons/icon-plus-dark.svg";
import iconNotification from "../icons/icon-notification.svg";
import iconAccount from "../icons/icon-account.svg";

export default function Navigation() {
    return (
        <div className="absolute left-0 right-0 bottom-0 bg-primary-light bg-opacity-25 rounded-3xl m-2">
            <div className="flex justify-evenly items-center h-full my-4">
                <Image src={iconHome} alt="" className="hover:scale-110 transition-all duration-150 ease-in-out"/>
                <Image src={iconSearch} alt="" className="hover:scale-110 transition-all duration-150 ease-in-out"/>
                <div className="bg-accent p-2 rounded-xl shadow-accent shadow-2xl hover:scale-110 transition-all duration-150 ease-in-out">
                    <Image src={iconPlusDark} alt=""/>
                </div>
                <Image src={iconNotification} alt="" className="hover:scale-110 transition-all duration-150 ease-in-out"/>
                <Image src={iconAccount} alt="Logo" className="hover:scale-110 transition-all duration-150 ease-in-out"/>
            </div>
        </div>        
    );
}
import Image from "next/image";
import logo from '../icons/header-logo.png';

export default function Header() {
    return (
        <div className="logo-header h-16 grid border-b border-primary-light place-content-center fixed w-full bg-primary-dark bg-opacity-25 backdrop-blur-lg">
            <Image src={logo} alt="" width={200} className="pointer-events-none"/>
        </div>
    );
}
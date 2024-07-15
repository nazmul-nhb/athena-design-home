import logo from '../assets/athena-logo.png';
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { AiFillBehanceCircle, AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandDribbbleFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <footer className='text-[#828483] flex flex-col gap-16 md:flex-row justify-around items-center px-4 md:px-36 mt-12 py-16'>
            {/* Logo & Social */}
            <div className='space-y-4'>
                <figure className='w-4/5 hover:scale-110 transition-all duration-500'>
                    <img className='w-48' src={logo} alt="Athena Logo" />
                </figure>
                <div className='flex justify-between text-4xl gap-4'>
                    <a className='hover:text-athena hover:scale-105 transition-all duration-500' href="#">
                        <FaFacebook /></a>
                    <a className='hover:text-athena hover:scale-105 transition-all duration-500' href="#">
                        <AiFillTwitterCircle /></a>
                    <a className='hover:text-athena hover:scale-105 transition-all duration-500' href="#">
                        <FaLinkedinIn /></a>
                    <a className='hover:text-athena hover:scale-105 transition-all duration-500' href="#">
                        <TbBrandDribbbleFilled /></a>
                    <a className='hover:text-athena hover:scale-105 transition-all duration-500' href="#">
                        <AiFillBehanceCircle /></a>
                </div>
            </div>
            {/* Links */}
            <div className='flex flex-col md:flex-row justify-around w-full gap-8'>
                <div className="flex flex-col md:items-start items-center md:gap-2 gap-4">
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Features</a></h4>
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Enterprise</a></h4>
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Pricing</a></h4>
                </div>
                <div className="flex flex-col md:items-start items-center md:gap-2 gap-4">
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Blog</a></h4>
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Help Center</a></h4>
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Contact Us</a></h4>
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Status</a></h4>
                </div>
                <div className="flex flex-col md:items-start items-center md:gap-2 gap-4">
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">About Us</a></h4>
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Terms of Service</a></h4>
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Security</a></h4>
                    <h4 className="hover:text-athena transition-all duration-300"><a href="#">Login</a></h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
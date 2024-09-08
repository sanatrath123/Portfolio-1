import "../App.css"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Header from './Header';
const Hero = () => {
  return (
    <>
    <Header/>
    <div className='bg-inherit flex justify-center w-full lg:w-10/12 mx-auto lg:h-auto h-[420px] lg:static relative '>
      {/* head svg */}
<img src="/demo.svg" className='md:h-[500px]' alt="" />
{/* name and info */}
<div className='text-gray-100 flex flex-col gap-6 absolute top-1/2 -translate-y-1/3 left-1/3 -translate-x-1/3 z-10 md:pl-0 pl-3'>
<h1 className='md:text-6xl text-4xl font-semibold'>Sanat Kumar Rath</h1>
<span className='text-xl italic font-serif'>MERN Stack Developer</span>
<button className='px-3 w-28 py-2 rounded-lg text-lg font-semibold bg-[#1595b6] relative bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 hover:scale-110 ease-in duration-100'>About Me <MdOutlineArrowRightAlt size={50} className='absolute -right-9 bottom-1/2 translate-y-1/2'/></button>
</div>

{/* all social media icons */}
<ul className='flex flex-col md:gap-5 gap-3 absolute right-1 md:right-5 top-1/2 -translate-y-1/2'>
<a href="https://www.linkedin.com/in/sanat-kumar-rath-433144248" target="_blank" rel="noopener noreferrer"> <FaLinkedin color='white' size={35} className='cursor-pointer'/></a>
<a href="https://github.com/sanatrath123" target="_blank" rel="noopener noreferrer"> <FaGithub color='white' size={35} className='cursor-pointer'/></a>
<a href="mailto:rathsanantakumar@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Sanat,">
<HiOutlineMail color='white' size={35} className='cursor-pointer'/></a>
<FaSquareXTwitter color='white' size={35} className='cursor-pointer'/>
<a href="https://www.instagram.com/sanat_kumar_rath/" target="_blank" rel="noopener noreferrer"> <SiInstagram color='white' size={35} className='cursor-pointer'/></a>
</ul>
    </div>
    </>
  )
}

export default Hero
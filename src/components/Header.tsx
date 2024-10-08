
import { useContext } from "react";
import { LuSun } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { ThemeContext } from "../context/ThemeContext";
import { RiMoonClearFill } from "react-icons/ri";

const Header = () => {
  const {theme , setTheme} = useContext(ThemeContext)


  return (
 <header className={`w-full flex `}>
    <div className='w-full flex mx-auto dark:bg-[#111] bg-white dark:text-white text-black justify-between items-center max-w-screen-xl py-2 md:px-10 px-2 '>
<svg width="80" height="80" viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 50 L300 50 L300 100 L100 100 L100 150 L300 150 L300 250 L50 250 L50 200 L250 200 L250 150 L50 150 Z" stroke="currentColor" stroke-width="20" fill="none"/></svg>

<div className='flex md:gap-5 gap-3 '>
    {
      theme == "dark" ?<LuSun size={30} className='cursor-pointer' onClick={()=>setTheme("light")} />:
      <RiMoonClearFill size={30} className='cursor-pointer' onClick={()=>setTheme("dark")} />
    }
    <a href="tel:+918328903372"><MdOutlinePhone size={30} className='cursor-pointer' /></a>
  <a href="https://wa.me/918328903372?text=Hello%20Sanat,%20I%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer"><RiWhatsappLine size={30} className='cursor-pointer'  /></a>

</div>

   </div>
 </header>
  )
}

export default Header
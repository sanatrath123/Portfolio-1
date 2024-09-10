import { useContext } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import { SiInstagram } from "react-icons/si"
import { ThemeContext } from "../context/ThemeContext"


const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme}`}>
    <div className="max-w-screen-xl dark:bg-[#111] dark:text-white text-black bg-white h-32 mx-auto flex flex-col items-center">
      <span className="mt-5">Sanat Kumar Rath @ 2024</span>
      <svg width="60" height="60" viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 50 L300 50 L300 100 L100 100 L100 150 L300 150 L300 250 L50 250 L50 200 L250 200 L250 150 L50 150 Z" stroke="skyblue" stroke-width="20" fill="none"/></svg>

<ul className="flex gap-5 text-[skyblue]">
<a href="https://www.linkedin.com/in/sanat-kumar-rath-433144248" target="_blank" rel="noopener noreferrer"> <FaLinkedin  size={20} className='cursor-pointer'/></a>
<a href="https://github.com/sanatrath123" target="_blank" rel="noopener noreferrer"> <FaGithub  size={20} className='cursor-pointer'/></a>
<a href="mailto:rathsanantakumar@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Sanat,">
<HiOutlineMail  size={20} className='cursor-pointer'/></a>
<FaSquareXTwitter  size={20} className='cursor-pointer'/>
<a href="https://www.instagram.com/sanat_kumar_rath/" target="_blank" rel="noopener noreferrer"> <SiInstagram  size={20} className='cursor-pointer'/></a>
</ul>
    </div>
    </div>
  )
}

export default Footer
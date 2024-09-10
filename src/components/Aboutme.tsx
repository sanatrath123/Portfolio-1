import '../App.css'
import { RxCross2 } from "react-icons/rx";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { createPortal } from 'react-dom';

interface PropsType {
  isOpen:boolean,
  setIsOpen: (val:boolean)=>void
}

const Aboutme:React.FC<PropsType> = ({isOpen , setIsOpen}) => {

const element = document.getElementById("portal")
  if(!element) return

  return createPortal(
      <div className={`fixed inset-0  z-30 backdrop-blur-md overflow-y-scroll ${!isOpen && "hidden"}`} onClick={()=>setIsOpen(false)}>

        <div className='max-w-screen-lg flex  flex-wrap lg:px-5 px-1 mx-auto justify-between font-link overflow-x-scroll bg-[#191919] relative' onClick={(e)=>e.stopPropagation()}>
        <RxCross2 size={35} color='white' className='z-50 absolute md:right-6 md:top-10 right-2 top-2 cursor-pointer'
  onClick={()=>setIsOpen(false)}
  />
<div className='lg:w-2/5 w-[90%] mx-auto   min-h-screen text-gray-100 flex flex-col gap-5 lg:justify-center lg:mt-0 mt-14 justify-start lg:text-left text-center'>
<h2 className='text-[#1788ae] text-2xl font-semibold  '>ABOUT ME</h2>
<p className='lg:px-0 px-4'>Hi, I’m Sanat, a passionate Full Stack Developer specializing in TypeScript React and Node.js. I help businesses and developers build dynamic, scalable web applications that provide seamless user experiences. From crafting efficient frontend designs to implementing robust backend logic, I bring ideas to life with clean code and modern web technologies.</p>

<ul className='flex  flex-wrap gap-2 w-[100%] text-sm font-thin lg:justify-normal justify-center '>
<li className='border-[1px] rounded-xl px-2 py-1'>#JavaScript</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#TypeScript</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#React</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#Next.js</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#Node.js</li>
<li className='border-[1px] rounded-xl px-2 py-1'>Express.js</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#MongoDB</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#Mongoose</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#Redux</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#Redux Toolkit</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#Appwrite</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#TailwindCss</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#GSAP</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#Git</li>
<li className='border-[1px] rounded-xl px-2 py-1'>#GitHub</li>

</ul>

<div className='mt-5'>
<h2 className='text-[#1788ae] text-2xl font-semibold'>MERN STACK</h2>
<ul className='flex lg:justify-start justify-center w-full bottom-2 space-x-5 mt-5'>
<SiMongodb size={50} color='green'/>
<SiExpress size={50} color='white'/>
<FaReact size={50} color='blue'/>
<FaNodeJs size={50} color='darkgreen'/>
<SiTypescript size={45} color='blue'/>
</ul>
</div>
</div>

<img src="/AboutImg.svg"  className='w-3/6 h-auto hidden md:block' alt="" />
    </div>
      </div> , element
    )
  
}

export default Aboutme
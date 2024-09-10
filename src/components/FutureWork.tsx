import  { useContext, useEffect,  useState } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext';

const ContentWork = [
  {
    img:"https://anuragsinghbam.netlify.app/images/currency-converter.webp",
    name:"LINKUP",
    sub:"(Social Media Platform)",
    description: "Linkup is a social media platform I’m building with Next.js and TypeScript. It allows users to create posts, interact with others, and manage profiles. Currently, I’m focusing on developing the backend for seamless functionality and scalability.",
    link: "https://github.com/sanatrath123/linkup"
  },
  {
    img:"https://anuragsinghbam.netlify.app/images/expense-tracker.webp",
    name:"Redux-Toolkit with Next.js and TypeScript",
    sub:"(A Technical Blog written By me)",
    description: "In this blog, I guide you through integrating Redux Toolkit with Next.js and TypeScript for efficient state management. I cover setting up the store, creating slices, and handling async actions, all while leveraging TypeScript for type safety.",
    link:"https://www.linkedin.com/posts/sanat-kumar-rath-433144248_%F0%9D%90%87%F0%9D%90%A8%F0%9D%90%B0-%F0%9D%90%AD%F0%9D%90%A8-%F0%9D%90%AE%F0%9D%90%AC%F0%9D%90%9E-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%9D%F0%9D%90%AE%F0%9D%90%B1-%F0%9D%90%93%F0%9D%90%A8%F0%9D%90%A8%F0%9D%90%A5%F0%9D%90%8A%F0%9D%90%A2%F0%9D%90%AD-activity-7227831801933668352-l7xh?utm_source=share&utm_medium=member_desktop"
  }
]

const FutureWork = () => {

  const [active , setActive] = useState<number>(1)
const {theme} = useContext(ThemeContext)


useEffect(()=>{
const Id  = setInterval(()=>{
  setActive((prev)=>{
    if(prev==ContentWork.length-1) return 0
    return prev + 1
  })
},8000)

return(()=> {clearInterval(Id)})
},[active])


  return (
   <div className={`${theme}`}>
     <div className='max-w-screen-xl bg-white dark:bg-[#111]  mx-auto relative pb-5'>
      <h2 className='font-semibold text-[#1788ae] md:text-[2.5rem] text-3xl border-b-2 border-[#1788ae] pt-3 mx-auto px-3 bg-inherit z-10 w-fit pb-2'>Ongoing & Blogs</h2>
<div className='flex justify-center md:gap-9 gap-2 mt-5 items-center flex-wrap md:relative'>
<div className='md:static relative'>
<GrFormPrevious size={40} color='blue' className='absolute top-1/2 md:left-3 -left-12 -translate-y-1/2'
onClick={()=>setActive((prev)=>{
  if(prev== 0) return ContentWork.length - 1
  return prev -1 
})}/>
<div className='relative text-gray-100  font-bold group'>
<img src={ContentWork?.[active].img} className='h-80 w-64 ' alt="" />
{/* popup link */}
<a href={ContentWork?.[active].link} target='_blank' className='px-5 py-2 bg-orange-500 absolute flex items-center gap-2 rounded-xl after:w-4 after:h-4  after:bg-inherit after:rotate-45 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 left-1/2 -translate-x-1/2 top-0 -z-10  group-hover:z-50 ease-jump duration-100  group-hover:-top-14'>LINK<FaExternalLinkAlt size={15}/> </a>
</div>
<MdOutlineNavigateNext size={40} color='blue' className='absolute top-1/2 md:right-3 -right-12 -translate-y-1/2'
onClick={()=>setActive((prev)=>{
  if(prev == ContentWork.length-1) return 0
  return prev +1 
})}/>
</div>

<div className='flex md:justify-start flex-col md:text-left text-center md:w-[50%] w-full md:px-0 px-3'>
<h2 className='text-blue-600 text-2xl font-bold '>{ContentWork?.[active].name}</h2>
<h2 className='text-blue-600 text-xl font-bold'>{ContentWork?.[active].sub}</h2>
<p className='dark:text-gray-100 text-black mt-4 text-lg'>{ContentWork?.[active].description}</p>
</div>

</div>
    </div>
   </div>
  )
}

export default FutureWork
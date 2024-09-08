
import "../App.css"
import { BsSendFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


const FormSection = () => {
  return (
    <div className='max-w-screen-xl bg-[#111] flex flex-col items-center mt-1 font-link mx-auto'>
 
 <h2 className='text-4xl font-semibold text-[#1788ae] bg-gray-100 px-3 py-2 rounded-xl border-b-2 border-gray-100 '>Let's Connect</h2>

  <div className='flex mt-5 justify-center flex-wrap'>
  <img src="/contact-me.svg" className='lg:max-w-[600px] ' alt="" />

<form action="submit" className=' lg:w-5/12 px-2 w-10/12 text-gray-100 '>
<label htmlFor="" className='flex items-center gap-1 mb-1' ><FaRegUser/>Name</label>
<input type="text" className='w-full bg-gray-100 px-3 py-2 rounded-xl mb-3 text-gray-900 text-xl'/>

<label htmlFor="" className='flex items-center gap-1 mb-1'>< MdAlternateEmail/>Email</label>
<input type="text" className='w-full bg-gray-100 px-3 py-2 rounded-xl mb-3 text-gray-900 text-xl' />

<label htmlFor="" className=' mb-1'> Message</label>
<input type="text" className='w-full bg-gray-100 px-3 py-2 rounded-xl text-gray-900 text-lg h-32' />

<button className='bg-[#1788AE] flex justify-center items-center gap-2 w-full py-2 px-3 mt-3 mb-4 rounded-xl '><BsSendFill/>SEND MESSAGE</button>
</form>


  </div>

    </div>
  )
}

export default FormSection
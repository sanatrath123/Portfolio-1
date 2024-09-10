
import React, {  useRef } from 'react'
import AllProjects from './components/AllProjects'
import FormSection from './components/FormSection'
import Hero from './components/Hero'
import {  ThemeProvider } from './context/ThemeContext'
import Footer from './components/Footer'
import FutureWork from './components/FutureWork'

const App = () => {

 const projectsRef = useRef<HTMLElement | null> (null)

 const scroolToSection = (ref:React.RefObject<HTMLElement>)=>{
  ref.current?.scrollIntoView()
 }

return (   
<div className={`overflow-x-hidden bg-[#111] w-full min-h-screen  `}>
<ThemeProvider>
<button className=" w-40 lg:block hidden px-1 py-2 rounded-xl bg-sky-400 h-12 -mt-6 absolute bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 hover:from-pink-500 hover:to-orange-500 ease-in duration-100 hover:scale-110" onClick={()=>scroolToSection(projectsRef)} >Explore Projects</button>
<Hero/>
<AllProjects/>
<FutureWork/>
<section ref={projectsRef}>
<FormSection />
</section>
<Footer/>
</ThemeProvider>
</div> 
  )
}

export default App



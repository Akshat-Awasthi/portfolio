// src/MainPage.js
import React, { useEffect, useState } from 'react';
import Typing from 'react-typing-effect';
import LaptopFiberScene from './LaptopFiberScene';
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';





const MainPage = () => {
  const [move,setMove] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setMove(true);
    },1000)

    return () => clearTimeout(timer);
},[])
  return (
    <div id='main' className='w-[178vh] h-full flex flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-r from-indigo-400 to-blue-500'>
      <div className={`w-full ml-0 mr-0 fixed flex flex-row justify-center mt-2 }`}>
       <div className={` ${move ? '-translate-x-96' : ''} transition-transform duration-1000`}>
       <FaLessThan size={50} className={`text-indigo-800 ${move ? '-translate-x-56' : ''} transition-transform duration-1000`} />
        </div> 
        <div className={`flex flex-row text-blue-800 ${move ? 'translate-x-96' : ''} transition-transform duration-1000`}>
       <RxSlash size={50} className={`${move ? 'translate-x-56' : ''} transition-transform duration-1000`} />
        <FaGreaterThan size={50} className={`${move ? 'translate-x-56' : ''} transition-transform duration-1000`} /></div>
        
      </div>
      <div className='flex flex-row '>
        <div className='w-3/5 h-[70vh]  flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-bold text-white ml-32'>
            Hi I'm <span className='text-indigo-700 text-6xl'>Akshat Awasthi</span><br />
            <span className='text-3xl ml-80'>- Web Developer</span>
            <a href="#contact"><span className='flex text-indigo-600 text-2xl ml-96 hover:cursor-pointer'>Let's Connect <FaArrowRight className=' ml-2 mt-2' size={16}/></span></a>
          </h1>
         
          
        </div>
        <div className='w-2/5 mr-12 flex justify-center items-center'>
          <div className='hover:cursor-pointer mt-5 w-[50vw] mr-4'>
            <LaptopFiberScene />
          </div>
        </div>
       
      </div>
      <div id='about' className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-semibold text-indigo-700 mr-5 mb-2'>About Me</h1>
          <div className='ml-52 mr-48 mt-2 h-28 '>
            <Typing
              className='text-base text-slate-100'
              text={[
                "Hello! I'm a B.Tech student with a strong foundation in web development and machine learning. I am proficient in React and C++, skilled in AWS, and have a growing expertise in DevOps. My passion lies in creating user-friendly web experiences and integrating intelligent solutions to drive innovation. I am always eager to contribute to cutting-edge projects and bring a unique blend of skills to the table."
              ]}
              speed={30}
              eraseDelay={100000000}
            />
          </div>
          <div className='w-72 h-[60px] ml-[730px] mb-7 flex  bg-indigo-500 rounded-lg'>
            <h1 className='text-white text-[16px] font-semibold ml-5 mt-[15px]'>My Resume</h1>
            <div className='text-white mt-5 ml-3'><FaArrowRight/></div>
            <button className='h-8 w-32 bg-white text-indigo-500 rounded-lg ml-3 mt-[14px] transform transition-transform hover:scale-110'>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Download</a>
            </button>
          </div>
        </div>
      <div id='skills'>
        <Skills/>
      </div>
      <div id='project'>
        <Projects/>
      </div>
      <div id='contact' className='mt-10 mb-16'>
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default MainPage;

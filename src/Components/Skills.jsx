import React from 'react';
import { IoLogoReact } from "react-icons/io5";
import { FaAws, FaDocker, FaLinux, FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { SiMysql,SiKubernetes } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";



const skills = [
  { name: 'ReactJS', icon: <IoLogoReact size={50} className="text-blue-500" />, description: 'Building interactive user interfaces and single-page applications.' },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={50} className="text-teal-400" />, description: 'Utility-first CSS framework for rapid UI development.' },
  { name: 'JavaScript', icon: <TbBrandJavascript size={50} className="text-yellow-500" />, description: 'Programming language for web development and beyond.' },
  { name: 'HTML5', icon: <IoLogoHtml5 size={50} className="text-orange-500" />, description: 'Markup language for structuring web content.' },
  { name: 'CSS3', icon: <SiCss3 size={50} className="text-blue-600" />, description: 'Style sheet language for designing web pages.' },
  { name: 'AWS', icon: <FaAws size={50} className="text-orange-400" />, description: 'Cloud computing services for scalable applications.' },
  { name: 'C++', icon: <TbBrandCpp size={50} className="text-blue-700" />, description: 'High-performance programming language.' },
  { name: 'MySQL', icon: <SiMysql size={55} className="text-gray-500" />, description: 'Managing and querying relational databases efficiently.' },
  // { name: 'Machine Learning', icon: <GiArtificialIntelligence size={50} className="text-green-500" />, description: 'Building intelligent systems and predictive models.' },
  { name: 'Docker', icon: <FaDocker size={50} className="text-blue-600" />, description: 'Containerization platform for deploying and running applications.' },
  { name: 'Kubernetes', icon: <SiKubernetes size={50} className="text-blue-500" />, description: 'Orchestration system for automating deployment, scaling, and management of containerized applications.' },
  { name: 'Python', icon: <FaPython size={50} className="text-yellow-400" />, description: 'High-level programming language for general-purpose programming.' },
  { name: 'Linux', icon: <FaLinux size={50} className="text-gray-700" />, description: 'Open-source operating system for servers, desktops, and embedded systems.' }
];

const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center py-12 bg-gradient-to-r from-indigo-800 to-blue-800'>
      <h1 className='text-4xl font-semibold text-indigo-300 mb-10'>Skills</h1>
      <div className='flex flex-wrap justify-center items-center ml-10'>
        {
          skills.map((skill,index) => (
            <div key={index} className='w-60 h-80 m-3 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
            <div className='w-full h-2/5 flex justify-center items-center bg-indigo-100'>
              {skill.icon}
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-semibold text-indigo-900'>{skill.name}</h3>
              <p className='text-gray-600 mt-2'>{skill.description}</p>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default Skills;

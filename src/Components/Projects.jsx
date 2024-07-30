import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const Projects = () => {
    const project = [
        { name: 'My-Hostel', image:"public/My-hostel.png",href:"",gitHub:"https://github.com/Akshat-Awasthi/My-Hostel", description:"Developed an advanced hostel management system, integrating machine learning features for mess operations, attendance tracking via facial recognition, complaint registration, online leave applications, and feedback collection.", Tech: ["React", "TailwindCSS", "Machine Learning"] },
        { name: 'Sync Hub', image:"public/syncHub.png",href:"",gitHub:"https://github.com/Akshat-Awasthi/Sync-Hub", description:"Developed a real-time collaborative coding platform designed for remote teamwork and pair programming.", Tech: ["React", "Socket.IO"] },
        { name: 'PyCloudOps', image:"public/pyCloudOps.png",href:"",gitHub:"https://github.com/Akshat-Awasthi/PyCloudOps", description:"Created a monitoring application in Python using Flask and Psutil", Tech: ["Python", "AWS", "Docker", "Kubernetes"] },
        { name: 'Health Tracking Mobile', image:"../public/Health-Tracking.png",gitHub:"https://github.com/Akshat-Awasthi/HealthTracking-MobileWebApp",href:"https://health-tracking-mobile-web-app.vercel.app/", description:"Developed a responsive mobile website for tracking fitness activities, diet, and health metrics, featuring real-time data visualization and personalized health insights.",Tech:["React","TailwindCSS"] },
    ];

    return (
        <div className='flex flex-col justify-center items-center py-12 bg-gradient-to-r from-indigo-400 to-blue-500'>
            <h1 className='text-4xl font-semibold text-indigo-700 mb-10'>Projects</h1>
            <div className='flex flex-wrap justify-center items-center ml-10'>
                {
                    project.map((pro, index) => (
                        <div key={index} className='w-72 h-[600px] m-3 bg-indigo-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                            <div className='w-full h-[200px] flex justify-center items-center bg-indigo-100'>
                                <a className='hover:cursor-pointer' href={pro.href}><img className='h-full w-full object-cover overflow-hidden' src={pro.image} alt={pro.name} /></a>
                            </div>
                            <div className='p-4'>
                                <h3 className='text-2xl font-semibold text-white'>{pro.name}</h3>
                                <p className='text-gray-400 mt-2'>{pro.description}</p>
                                <div className='mt-5'>
                                    {
                                        pro.Tech.map((tech, i) => (
                                            <span key={i} className='inline-block bg-indigo-600 text-white px-2 py-1 rounded-full text-xs mr-2 mb-2'>
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                                
                            </div>
                            <a className='ml-5 w-32 text-lg font-semibold flex flex-row ' href={pro.gitHub}>GitHub link <FaArrowRight className='mt-[6px] ml-1' size={15}/></a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;

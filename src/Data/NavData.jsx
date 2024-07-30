import React from 'react'
import { IoIosHome } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";


export const NavData = [
    {
        id: 1,
        name: 'Home',
        icon : <IoIosHome size={33} /> ,
        path : '#main',
    },
    {
        id: 2,
        name: 'About',
        icon : <GrContactInfo size={33} /> ,
        path : '#about',
    },
    {
        id: 3,
        name: 'Skills',
        icon : <FaLaptopCode size={32} /> ,
        path : '#skills',
    },
    {
        id: 4,
        name: 'Project',
        icon : <FaFolderOpen size={32} /> ,
        path : '#project',
    },
    {
        id: 5,
        name: 'Contact',
        icon : <RiContactsBookFill size={30} /> ,
        path : '#contact',
    },
]

import React, { useState } from 'react';
import { NavData } from '../../Data/NavData';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function SideLinks({ data }) {
    return (
      <a href={data.path} className="relative flex items-center">
        <span>{data.icon}</span>
        {hoveredIndex === data.id && (
          <span className="absolute left-12 ml-2 bg-indigo-500 text-slate-100 p-1 rounded">
            {data.name}
          </span>
        )}
      </a>
    );
  }

  return (
    <div className='w-24 fixed'>
      <div className='flex flex-col justify-items-center mt-48'>
        {
          NavData.map((data) => (
            <div
              className='relative rounded-full ml-5 w-16 h-16 mt-7 bg-indigo-300'
              key={data.id}
              onMouseEnter={() => setHoveredIndex(data.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='mt-4 ml-4 text-black transform transition-transform hover:scale-125'>
                <SideLinks data={data} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default NavBar;

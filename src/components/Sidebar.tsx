import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Vector from '../Assets/Vector.svg';
const Sidebar: React.FC = () => {
  return (
    <div className="w-16 h-screen bg-gray-100 flex flex-col items-center py-4">
      <button className="mb-4 p-2 rounded hover:bg-gray-200">
      <HomeIcon/>
      </button>
      <button className="p-2 rounded hover:bg-gray-200">
        <img src={Vector} alt="Grid" />
      </button>
    </div>
  );
};

export default Sidebar;

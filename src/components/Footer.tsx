import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white py-3 mt-2 rounded-md">
    <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
      {/* Footer Items */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h11M9 21V3M17 16h5m-2-2v4m-3-6h6m-3-2v4"
          />
        </svg>
        <span>76 Tables</span>
      </div>

      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A1 1 0 016 17h12a1 1 0 01.879 1.804L12.293 21.95a1 1 0 01-1.414 0l-6.879-4.146z"
          />
        </svg>
        <span>12 Main Covers</span>
      </div>

      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 6h8M8 12h8m-5 6h5"
          />
        </svg>
        <span>12 Max Covers</span>
      </div>

      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 6c-2.761 0-5 1.79-5 4v1h10v-1c0-2.21-2.239-4-5-4z"
          />
        </svg>
        <span>3-12 Online Capacity</span>
      </div>
    </div>
  </div>
  );
};

export default Footer;

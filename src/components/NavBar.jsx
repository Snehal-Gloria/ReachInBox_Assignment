import  { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; // Icons for the theme toggle
//import onebox from "../assets/NavBar/Onebox.png"

export default function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    return (
      <nav className="w-full h-[64px] bg-[#1F1F1F] flex items-center justify-between px-6 border-t border-b border-[#343a40] shadow-custom-inset">
        {/* Left: Brand name */}
        <div className="text-lg font-medium text-white ">Onebox</div> 
  
        {/* Right: Workspace and Theme toggle */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <div className={`w-14 h-7 bg-[#1F1F1F] rounded-full border border-solid border-[#343A40] ${isDarkMode ? 'bg-[#343A40]' : ''}`}></div>
              <div className={`absolute w-5 h-5 bg-gray-200 rounded-full shadow inset-y-1 left-1 transition-transform ${isDarkMode ? 'transform translate-x-7' : ''}`}>
                {isDarkMode ? (
                  <FiSun className="w-4 h-4 text-yellow-500 absolute top-1.4 left-0.5" />
                ) : (
                  <FiMoon className="w-4 h-4 text-gray-500 absolute top-1.4 left-0.5" />
                )}
              </div>
            </div>
          </label>
          
          {/* User's Workspace */}
          <div className="text-white flex items-center space-x-2">
            <span className="w-113px h-22px">Tim's Workspace</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </nav>
    );
  }


import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import SideBar from '../SideBar'
import HeaderBar from '../HeaderBar'
import MainPageContent from '../MainPageContent'
const MainPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            if (isSidebarOpen) {
              setSidebarOpen(false);
            }
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [isSidebarOpen]);

  return (
    <div className='main-container'>
        <div ref={sidebarRef} className='background-color'>
        <SideBar isOpen={isSidebarOpen}/>
        </div>
        <div className={`home-page-container ${isSidebarOpen ? 'with-sidebar' : ''}`}>
            <HeaderBar toggleSidebar={toggleSidebar}/>
            <div className="home-page-content">
              <MainPageContent/>
            </div>
        </div>
    </div>
  )
}

export default MainPage
import React, { useContext } from 'react'
import { UserContext } from "../../context/UserContext"
import Navbar from './Navbar'
import SideMenu from './SideMenu' // Keep the import for Navbar to use it

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar activeMenu={activeMenu} />
      <div className='flex'>
        {/*
          This is the redundant SideMenu.
          It will be removed to solve the problem.
        */}
        <div className='max-[1080px]:hidden'>
          <SideMenu activeMenu={activeMenu}/>
        </div>

        <div className='grow mx-5'>
          {user ? (
            children
          ) : (
            <p className="hidden">Loading or not authenticated</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
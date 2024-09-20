import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// const Navbar = ({ sidebarToggle, setSidebarToggle }) => {

interface NavbarProps {
  sidebarToggle: boolean,
  setSidebarState:  (state: boolean) => void
}

const Navbar = ({ sidebarToggle, setSidebarState }: NavbarProps) => {
  const navigate = useNavigate();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  // console.log("nav")
  const handleLogout = () => {
    // Remove authentication data from local storage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("access_token"); // If you also stored an access token

    // Optionally clear other related data or state

    // Redirect to the landing page
    navigate('/');
  };
  return (
    <nav className='bg-green-800  py-3 flex justify-between items-center'>
      <div className='flex items-center text-xl'>
        <FaBars
          className='text-white me-4 cursor-pointer'

          

          onClick={() => setSidebarState(!sidebarToggle)}

        />
        <span className='text-white font-semibold'>KaseApp</span>
      </div>

      <div className='flex items-center gap-x-4 flex-grow max-w-md'>
        <div className='relative flex items-center flex-grow'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <FaSearch className='text-gray-500' />
          </span>
          <input
            type="text"
            className='w-full px-10 py-2 pl-10 rounded shadow outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Search...'
          />
        </div>
        
        <FaBell className='text-white w-6 h-6 mx-3' />
        
       <div className='relative inline-block text-left'>
      <button onClick={toggleDropdown} className='text-white focus:outline-none'>
        <FaUserCircle className='w-6 h-6 mt-1' />
      </button>
      {dropdownVisible && (
        <div className='absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10'>
          <ul className='px-1 py-2 text-sm text-gray-950'>
            <li className='py-2 flex justify-center hover:bg-gray-200 cursor-pointer'>
              <Button className='w-full text-center'>Profile</Button>
            </li>
            <li className='py-2 flex justify-center hover:bg-gray-200 cursor-pointer'>
              <Button className='w-full text-center'>Settings</Button>
            </li>
            <li className='py-2 flex justify-center hover:bg-gray-200 cursor-pointer'>
              <Button className='w-full text-center' onClick={handleLogout}>Log out</Button>
            </li>
          </ul>
        </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import "../Component/Navbar.css";

import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <>
        {/* <nav class="flex items-center justify-between flex-wrap bg-gray-100 p-6">
  Logo here
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow  lg:flex lg:items-center lg:w-auto">
    <div class="text-sm flex pl-10 lg:flex-grow">
      <Link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 mr-4">
        Home
      </Link>
      <Link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900 mr-4">
        About us
      </Link>
      <Link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900">
        Services
      </Link>
    </div>
    <div>
      <Link href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-gray-400 hover:border-transparent bg-[#3068f5cc] hover:text-[#3068f5cc] hover:bg-white mt-4 lg:mt-0">Login</Link>
    </div>
  </div>
</nav> */}
 <nav className="bg-gray-100 p-4">
          <h2 class='logo'>Logo here</h2>
          <ul>
         
            <li><Link to='/upload'>Upload</Link></li>
            <li><Link to='/display'>View</Link></li>
          </ul>
          <Link
              to="/register"
              class="inline-block text-sm font-bold px-4 py-2 leading-none border rounded text-white border-gray-400 hover:border-transparent bg-[#3068f5cc] hover:text-white dark:focus:ring-gray-700 dark:hover:bg-gray-700 hover:bg-gray-100 mt-4 lg:mt-0 hover:scale-[1.3]"
            >
              Register
            </Link>
        </nav>

            
        </>
    );
}

export default Navbar;
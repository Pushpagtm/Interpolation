import React from 'react';
import "../Component/Navbar.css";

import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <>
 <nav className="bg-gray-100 p-4">
          <h2 class='logo'>Logo here</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
         
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
import React from 'react';
import '../Component/Home.css';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Home(props) {
    return (
        <>

        <div className='main-content'>
            <Link to='/upload'>
            <h1 className='text'>UPLOAD YOUR FILES <span><FaArrowRight/></span></h1>
            </Link>
            
            

        </div>
        </>
        
  
      
    );
}

export default Home;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function ResetPassword(props) {
  const navigate = useNavigate();
  const[resetpassword,setResetPassword]=useState();
  const sendOtp=()=>{
    if(!resetpassword){
      alert("email is required")
  }
  axios.post("http://127.0.0.1:8000/login/",{resetpassword}).then((data)=>{
     navigate("/verify")
  }).catch((err)=>console.log("error detected",err))
 
  }
    return (
        <>
             <div class="flex flex-col items-center  justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-100 backdrop-blur-2xl  ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-700">
             verify your email
            </h1>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
                >
                 Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={resetpassword}
                  onChange={(e)=>setResetPassword(e.target.value)}
                  className="bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                onClick={sendOtp}
                class="w-full text-white bg-[#3068f5cc] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                verify
              </button>
          </div>
        </div>
      </div>
           
            
        </>
    );
}

export default ResetPassword;
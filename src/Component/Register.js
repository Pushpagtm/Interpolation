import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Api from './Api';


function Register(props) {
    const navigate = useNavigate();
    const [loading,setLoading]= useState(false);
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[userName,setUserName]=useState();
    const[confirmPassword,setConfirmPassword]=useState();
    const handleEmail=(e)=>{
        setEmail(e.target.value)

    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)

    }
    const handleConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value);
    }
    const handleApi=()=>{
        if(!email || !password || !confirmPassword || !userName){
            alert("email or password is required")
        }
        let contents = {
            email:email,
            password:password,
            password2:confirmPassword,
            user_name:userName
        }
        console.log("contents are:",contents);
        setLoading(true);
        Api.post("register/",contents).then((data)=>{
            console.log("sucessful data",data);
        setLoading(false);

            navigate("/")

        setLoading(false);
        }).catch((err)=>{setLoading(false)})
       

        console.log({email,password,confirmPassword})


    }
    return (
        <>
      <div class="flex flex-col items-center  justify-center px-6 py-8 m-9 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-100 backdrop-blur-2xl  ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-700">
                  Create an account
              </h1>
              <div class="space-y-4 md:space-y-6">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your email</label>
                      <input type="email" name="email" id="email" onChange={handleEmail} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""/>
                  </div>
                  <div>
                      <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">UserName</label>
                      <input type="text" name="email" id="username" value={userName} onChange={(e)=>setUserName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" onChange={handlePassword} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Confirm password</label>
                      <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" onChange={handleConfirmPassword} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-700 dark:text-gray-700">I accept the <Link class="font-medium text-gray-700 hover:underline dark:text-primary-500" to="#">Terms and Conditions</Link></label>
                      </div>
                  </div>
                  <button type="submit" onClick={handleApi} class="w-full text-white bg-[#3068f5cc] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" disabled={loading}>{loading?(<p>loading...</p>):(<p>Register</p>)}</button>
                  <p class="text-sm font-light text-gray-700 dark:text-gray-700">
                      Already have an account? <Link to="/login" class="font-medium text-gray-700 hover:underline dark:text-gray-700">Login</Link>
                  </p>
              </div>
          </div>
      </div>
  </div>
            
        </>
    );
}

export default Register;
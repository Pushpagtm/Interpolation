import React from 'react'
import { Navigate,useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const authToken = localStorage.getItem("accessToken")?localStorage.getItem("accessToken"):null;
    console.log("token",authToken);
    if(!authToken){
        return <Navigate to="/" state={{from:location}} replace />
    }
  return children
}

export default ProtectedRoute

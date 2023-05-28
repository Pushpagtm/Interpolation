import Login from "./Component/Login";
 import Navbar from "./Component/Navbar";
import Register from "./Component/Register";
import UploadFile from "./Component/UploadFile";
import { Routes, Route, Router } from "react-router-dom";
import Verify from "./Component/Verify";
import ResetPassword from "./Component/ResetPassword";
import ProtectedRoute from "./Component/ProtectedRoute";
import Display from "./Component/Display";
import Home from "./Component/Home";

function App() {
  return (
    <>
    
   <Navbar/>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/upload" element={
        // <ProtectedRoute>
        <UploadFile />
        // </ProtectedRoute>
        } />
        <Route path="/display" element={<Display/>}/>

        <Route path="/verify" element={<Verify />} />
        <Route path="/resetPassword" element={<ResetPassword/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
     
     
    </>
  );
}

export default App;

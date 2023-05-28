import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "../Component/UploadFile.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function UploadFile(props) {
  const navigate = useNavigate();
  const routeChange=()=>{
    navigate('/display')
  }
  const [selectedFile, setSelectedFile] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [productName, setProductName] = useState();
  const [sku, setSku] = useState();
  const [productCode, setProductCode] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [discription, setDiscription] = useState();
  //  const[handleSelectedFile,setHandleSelectedFile]=useState();
  const handleApi = () => {
    const authToken = localStorage.getItem("accessToken")?localStorage.getItem("accessToken"):null;
    console.log("auth token =============================================",authToken);
    var decoded = jwt_decode(authToken);
    console.log("decoded token",decoded.user_id);
    const formData=new FormData();
    formData.append("video_image",selectedFile)
    formData.append("uploaded_file",selectedVideo)
    formData.append("product_name",productName)
    formData.append("product_code",productCode)
    formData.append("sku",sku)
    formData.append("sizes",size)
    formData.append("price",price)
    formData.append("category",category)
    formData.append("description",discription)
    formData.append("user",decoded.user_id)

     axios
      .post("http://127.0.0.1:8000/upload/uploadFile/", formData,{
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((data)=>{
        console.log(data)
        // navigate("/display")
      }).catch((err) => console.log("error detected", err));
  };
  return (
    <>
      <div className="flex  justify-center items-center mt-24 ">
        <div className=" container mx-auto px-4 bg-white w-1/2  shadow-2xl backdrop-blur-3xl">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setProductName(e.target.value)}
              className="bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              SKU
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setSku(e.target.value)}
              className="bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Product Code
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setProductCode(e.target.value)}
              className="bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              name="email"
              id="email"
              onChange={(e) => setPrice(e.target.value)}
              className="bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700"
            >
              Size
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setSize(e.target.value)}
              className="bg-gray-100 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div className="file-card">
            <div className="file-inputs">
              <input type="file" class="input1" onChange={(e)=> setSelectedVideo(e.target.files[0])} />
              <button class="button1">
                <i>
                  <FaPlusCircle />
                </i>
                Upload video
              </button>
            </div>
          </div>
          <div className="file-card">
            <div className="file-inputs">
              <input type="file" class="input1" onChange={(e)=> setSelectedFile(e.target.files[0])} />
              <button class="button1">
                <i>
                  <FaPlusCircle />
                </i>
                Upload image
              </button>
            </div>
          </div>
          {
          selectedVideo &&  <div className="flex mt-20 justify-center">
            <video width="400" controls>
              <source src={URL.createObjectURL(selectedVideo)} />
            </video>
        </div>
        }
        
         
          <div className="py-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
              Description:
            </label>
            <textarea
              type="text"
              className="bg-gray-50 h-20 border border-gray-100 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-gray-700 "
              required=""
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>
          <hr></hr>
          <button
            onClick={routeChange}
            class="py-2.5 float-right px-5  mb-9 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:text-blue-700    dark:bg-[#3068f5cc] dark:text-white  dark:hover:text-white dark:hover:bg-gray-700"
          >
            {/* <Link to='/display'/> */}
            View
          </button>
          <button
            type="submit"
            onClick={handleApi}
            class="py-2.5 float-left px-5  mb-9 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full shadow-2xl hover:bg-gray-100 hover:text-blue-700    dark:bg-[#3068f5cc] dark:text-white  dark:hover:text-white dark:hover:bg-gray-700"
          >
            {/* <Link to='/display'/> */}
            Transfer
          </button>
        </div>
      </div>
    </>
  );
}

export default UploadFile;

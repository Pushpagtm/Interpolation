import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import axios from "axios";
const API='http://127.0.0.1:8000/upload/uploadFile';

function Display(props) {
   
  
    const authToken = localStorage.getItem("accessToken")?localStorage.getItem("accessToken"):null;

    const [view,setView]=useState([]);
    const handleDelete=(itemIndex)=>{
        setView((preData)=>
        preData.filter((_,index)=>index!==itemIndex)

        );

    };
    console.log(view);
    const fetchUsers=async()=>{
      await axios
        .get(API,{
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }).then((data)=>{
          console.log("data from db=======================",data.data.data)
          setView(data.data.data);
        }).catch((err) => console.log("error detected", err));

    }
    useEffect(()=>{
        fetchUsers();
    },[API])
    return (
        <>
       
             
<div className="relative overflow-x-auto p-10 shadow-md sm:rounded-lg ">
    <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#3068f5cc] dark:text-white">
            <tr>
            <th scope="col" class="px-6 py-3">
                    Product id
                </th>
                <th scope="col" class="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                    SKU
                </th>
                <th scope="col" class="px-6 py-3">
                   Product Code
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                   Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Size
                </th>
                <th scope="col" class="px-6 py-3">
                   Media
                </th>
               
                {/* <th scope="col" class="px-6 py-3">
                    Description
                </th> */}
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        {
       
                      
                view.map((item,itemIndex)=>{
                    return(
                    <>
                     <tbody>
           
           <tr className="bg-white border-b dark:bg-gray-300 dark:border-gray-700">
           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    {item.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    {item.product_name}
                </th>
                <td className="px-6 py-4 dark:text-black" >
                   {item.sku}
                </td>
                <td className="px-6 py-4 dark:text-black" >
                    {item.product_code}
                </td>
                <td className="px-6 py-4 dark:text-black" >
                    {item.category}
                </td>
                <td className="px-6 py-4 dark:text-black" >
                    {item.price}
                </td>
                <td className="px-6 py-4 dark:text-black" >
                    {item.sizes}
                </td>
                <td className="px-6 py-4 dark:text-black" >
                    {item.uploaded_file}
                </td>
                <td className="px-6 py-4 dark:text-black" >
                    {item.description}
                </td>
                <td className="px-6 py-4 dark:text-black" >
                   <MdDelete onClick={()=>handleDelete(itemIndex)}/>
                </td>

                </tr>
                   
                   </tbody>
          
                </>
                )
                 }
                    
)}
          
          
                
               
          
    </table>
</div>

        </>
    );
}

export default Display;
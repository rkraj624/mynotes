import React, { useState, useEffect,useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import loginBg from "../assets/login.jpg";
import bgc from "../assets/background.jpg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigation = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')){
    }else{
        navigation('/login')
    }
    // eslint-disable-next-line
}, [])
  const [user, setUser] = useState(  { 
  name: "",
  email: "",
  registrationNumber: "",
  d0b: "",
  country: "",
  joiningYear: "",
  
});
  const getUser = async () => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      }
    });
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  const isAuthenticated = localStorage.getItem('token');

  return (
    
     
    <div className="h-screen my-20">
      <Navbar />
      <div style={{ backgroundImage: `url(${bgc})` }} className="h-full bg-cover">
      
      <div className="flex justify-center py-12 text-3xl font-semibold">
      <div className="text-white">
      Welcome <span className="text-indigo-700 font-kaushan">{user.name}</span> to MY NOTES
      </div>
      </div>
      <div className="grid grid-cols-1 px-4 ">
        <div className="fixed left-0 right-0 flex justify-center ">
          <div className="w-6/12 mt-8 text-xl text-center bg-white shadow-custom-light rounded-2xl opacity-70 lg:w-5/12">
            <div className="grid grid-cols-2 px-4 mt-2">
              <div className="">
             <p className="mx-4 my-2 text-base font-semibold text-left lg:text-2xl">Name</p>
             <p className="mx-4 my-2 text-base font-semibold text-left lg:text-2xl">Email</p>
             <p className="mx-4 my-2 text-base font-semibold text-left lg:text-2xl">Reg Number</p>
             <p className="mx-4 my-2 text-base font-semibold text-left lg:text-2xl">DOB</p>
             <p className="mx-4 my-2 text-base font-semibold text-left lg:text-2xl">Country</p>
             <p className="mx-4 my-2 text-base font-semibold text-left lg:text-2xl">Joining Year</p>
              </div>
              <div className="">
             <p className="my-2 text-base font-semibold text-left text-indigo-800 lg:text-2xl">{user.name}</p>
             <p className="my-2 text-base font-semibold text-left text-indigo-800 lg:text-2xl">{user.email}</p>
             <p className="my-2 text-base font-semibold text-left text-indigo-800 lg:text-2xl">{user.registrationNumber}</p>
             <p className="my-2 text-base font-semibold text-left text-indigo-800 lg:text-2xl">{user.dob}</p>
             <p className="my-2 text-base font-semibold text-left text-indigo-800 lg:text-2xl">{user.country}</p>
             <p className="my-2 text-base font-semibold text-left text-indigo-800 lg:text-2xl">{user.joiningYear}</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="bottom-0 ">
        <Footer />
      </div>
    </div>
    
   
  );
};

export default Profile;

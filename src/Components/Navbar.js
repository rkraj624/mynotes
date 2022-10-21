import React,{useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [menu, setMenu] = useState(true)

  

  let navigation = useNavigate();
  const isAuthenticated = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
    navigation("/login");
  };
  return (
    <div>
      <div className="fixed top-0 z-10 w-full bg-white border-b border-grey-light">
        <div className="flex flex-wrap items-center justify-center w-full py-2 mt-0 lg:justify-between">
          <div className="flex items-center px-0 mx-0 lg:pl-4 lg:mx-4">
            <span className="px-8 text-xl font-bold text-purple-800 no-underline hover:no-underline">
              <Link to="/">My Notes</Link>
            </span>
          </div>
          <div className="absolute pt-3 pr-4 top-1 right-1">
                
                <button className="flex items-center px-3 py-2 border rounded appearance-none lg:hidden text-grey border-grey-dark hover:text-black hover:border-purple focus:outline-none" onClick={()=>{setMenu(!menu)}}>
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div
            className={menu?"z-20 flex-grow w-full h-0 mt-2 overflow-hidden transition-all lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto lg:h-auto lg:mt-0 ":"z-20 flex-grow w-full h-52 mt-2 overflow-hidden transition-all lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto lg:h-auto lg:mt-0 "}
            id="nav-content"
          >
            <ul className="flex flex-col items-center lg:flex-row">
              <div
                id="search-toggle"
                className="hidden px-6 cursor-pointer search-icon"
              >
                <svg
                  className="inline w-4 h-4 pointer-events-none fill-current text-grey-darkest"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
              <li className="mx-2 my-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-2 my-2">
                <Link to="/addnotes">Notes</Link>
              </li>
              <li className="mx-2 my-2">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="mx-2 my-2">
                <Link to="/updatepassword">Update Password</Link>
              </li>
            </ul>
            <div className="px-4 my-2 text-center">
             {!isAuthenticated ? 
              <div>
                <Link
                id="login"
                className="inline-flex items-center px-3 py-2 mx-1 text-sm font-medium text-center text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
                to="/login"
              >
                Login
              </Link>
              <Link
                id="signup"
                className="inline-flex items-center px-3 py-2 mx-1 text-sm font-medium text-center text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
                to="/signup"
              >
                Register
              </Link> </div>: 
              <button
              id="logout"
              className="inline-flex items-center px-3 py-2 mx-1 text-sm font-medium text-center text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:ring-purple-300" onClick={logout}> Logout </button>
            }
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-1"> </div>
    </div>
  );
};

export default Navbar;

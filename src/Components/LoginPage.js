import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login.jpg";
import logo from "../assets/logo.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LoginPage = () => {
  let navigation = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigation("/signup");
  };

  const [credentials, setCredentials] = useState({
    registrationNumber: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("https://rkrajnotes.herokuapp.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registrationNumber: credentials.registrationNumber,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigation("/profile");
    }else{
      window.alert(`Invalid Credentials`)
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <section className="h-full my-24 gradient-form md:h-screen">
        <div className="container h-full px-6 py-12">
          <div className="flex flex-wrap items-center justify-center h-full text-gray-800 g-6">
            <div className="xl:w-10/12">
              <div className="block bg-white rounded-lg shadow-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                    <div className="hidden bg-cover lg:block lg:1/2">
                      <img src={loginBg} alt="login" className="rounded-lg" />
                    </div>
                  </div>
                  <div className="px-4 lg:w-6/12 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          src={logo}
                          alt="avatar"
                          className="mx-auto border rounded-full "
                          height="128px"
                          width="128px"
                          layout="intrinsic"
                          quality="100"
                        />
                        <h4 className="pb-1 mt-1 mb-12 text-xl font-semibold">
                          Welcome to My Notes
                        </h4>
                      </div>
                      <form onSubmit={loginUser}>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="registrationNumber"
                            placeholder="Username"
                            name="registrationNumber"
                            onChange={onChange}
                            value={credentials.registrationNumber}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                            placeholder="Password"
                            name="password"
                            onChange={onChange}
                            value={credentials.password}
                            required
                          />
                        </div>
                        <div className="pt-1 pb-1 mb-12 text-center">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-indigo-600"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={loginUser}
                          >
                            Log In
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="submit"
                            className="inline-block px-6 py-2 text-xs font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out border-2 border-blue-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-0 hover:text-white"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;

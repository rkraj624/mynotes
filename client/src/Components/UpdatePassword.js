import React,{useEffect,useState} from "react";
import loginBg from "../assets/login.jpg";
import logo from "../assets/logo.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  let navigation = useNavigate()
  const [note, setNote] = useState({registrationNumber:"", oldPassword:"", newPassword:"", confirmNewPassword:""})

  const changePassword = async ( registrationNumber,oldPassword, newPassword, confirmNewPassword) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`http://localhost:8000/api/auth/updatepassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({registrationNumber:note.registrationNumber, oldPassword:note.oldPassword, newPassword:note.newPassword, confirmNewPassword:note.confirmNewPassword})
    });

    const notes = await response.json();
    setNote(notes);
    alert("password updated")
    navigation('/login')
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if(localStorage.getItem('token')){
    }else{
        navigation('/login')
    }
    // eslint-disable-next-line
}, [])
  return (
    <>
      <Navbar />
      <section className="h-full my-20 gradient-form md:h-screen">
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
                      <form>
                        <p className="mb-4">Change Your Password </p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="registrationNumber"
                            placeholder="Registration Number"
                            name="registrationNumber"
                            onChange={onChange}
                            value={note.registrationNumber}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="old"
                            placeholder="Old Password"
                            name="oldPassword"
                            onChange={onChange}
                            value={note.oldPassword}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="new"
                            placeholder="New Password"
                            name="newPassword"
                            onChange={onChange}
                            value={note.newPassword}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="confirm"
                            placeholder="Confirm Password"
                            name="confirmNewPassword"
                            onChange={onChange}
                            value={note.confirmNewPassword}
                          />
                        </div>

                        <div className="pt-1 pb-1 mb-12 text-center">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-indigo-600"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={changePassword}
                          >
                            Update Password
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

export default UpdatePassword;

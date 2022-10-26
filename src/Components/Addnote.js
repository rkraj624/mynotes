import React,{useState,useContext} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import logo from "../assets/logo.jpg";
import noteContext from "../context/notes/noteContext"
import MyNotes from "./MyNotes";

const Addnote = (props) => {
  const context = useContext(noteContext);
  const {addNote} = context;
  const [note, setNote] = useState({title: "", description: "", tag: ""})
  

  
  const addNotes = (e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
    
  }
  
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
    <div className="fixed w-full ">
    <Navbar />
    </div>
      <section className="h-full p-8 bg-gray-200 md:screen-h">
      <div className="container h-full px-6 py-12 ">
      <div className="w-full p-8 mt-20 bg-white rounded-lg shadow-custom-light">
      <div className="p-4 text-center">
      <img
        src={logo}
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h4 className="pb-1 mt-1 mb-4 text-xl font-semibold">
        Welcome to My Notes
      </h4>
    </div>
    <form>
      
      <div className="flex justify-center mb-4 ">
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none lg:w-1/2"
          id="title"
          placeholder="Title"
          name="title"
          onChange={onChange}
          value={note.title}
          min={3}
          required
        />
      </div>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none lg:w-1/2"
          id="description"
          placeholder="Description"
          name="description"
          onChange={onChange}
          value={note.description}
          min={5}
          required
        />
      </div>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full lg:w-1/2"
          id="password"
          placeholder="Tag"
          name="tag"
          onChange={onChange}
          value={note.tag}
          min={3}
          required
        />
      </div>
      <div className="pt-1 pb-1 mb-12 text-center">
        <button
          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out lg:w-1/8 mb-3 bg-indigo-600 cursor-pointer"
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={addNotes}
          disabled={note.title.length<5 || note.description.length<5}
        >
          Add Notes
        </button>
      </div>
    
    </form>
    <div className="flex ">
    <div className="px-12 mb-8 text-lg font-medium">
  
    <MyNotes/>
    </div>
    
    </div>
      </div>
      </div>
    </section>
    </>
  );
};

export default Addnote;

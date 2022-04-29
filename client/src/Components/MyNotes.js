import React, { useState, useContext,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import NoteCards from "./NoteCards";

const MyNotes = (props) => {
  let navigation = useNavigate()
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
      if(localStorage.getItem('token')){
          getNotes()
      }else{
          navigation('/login')
      }
      // eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

  const updateNote = (currentNote) => {
      ref.current.click();
      setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
  }

  const handleClick = (e)=>{ 
      editNote(note.id, note.etitle, note.edescription, note.etag)
      refClose.current.click();
      props.showAlert("Updated Successfully","success")

  }

  
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
     
      <button
       ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
      </button>

      <div
        className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="relative w-auto pointer-events-none modal-dialog">
          <div className="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding">
            <div className="flex items-center justify-between flex-shrink-0 p-4 border-b border-gray-200 modal-header rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Update Notes
              </h5>
              <button
                type="button"
                className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="relative p-4 modal-body">
            
            <form>
            <div className="flex justify-center mb-4 ">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                id="etitle"
                placeholder="Title"
                name="etitle"
                onChange={onChange}
                value={note.etitle}
                min={3}
                required
              />
            </div>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                className="form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                id="edescription"
                placeholder="Description"
                name="edescription"
                onChange={onChange}
                value={note.edescription}
                min={5}
                required
              />
            </div>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full "
                id="etag"
                placeholder="Tag"
                name="etag"
                onChange={onChange}
                value={note.etag}
                min={3}
                required
              />
            </div>
          </form>
              
            </div>
            <div className="flex flex-wrap items-center justify-end flex-shrink-0 p-4 border-t border-gray-200 modal-footer rounded-b-md">
              <button
                type="button"
                className="px-6
                  py-2.5
                  bg-purple-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-purple-700 hover:shadow-lg
                  focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-purple-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="px-6
                  py-2.5
                  bg-blue-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                  ml-1"
                  onClick={handleClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2>You Notes</h2>
      <div className="container mx-2 font-normal text-normal"> 
      {notes.length===0 && '  Till Now no Notes to show... '}
      </div>
      <div className="grid grid-cols-4 gap-4">
    
      {notes.map((note) => {
        return <NoteCards key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
      })}
   
  </div>
    </>
  );
};

export default MyNotes;

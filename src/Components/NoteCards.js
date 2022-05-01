import React, { useState, useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import noteContext from "../context/notes/noteContext";

const NoteCards = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <>
      <div className="justify-center w-full mt-4 ">
        <div className="block max-w-sm p-6 bg-white rounded-lg shadow-lg">
          <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900 ">
            {" "}
            {note.title}
          </h5>
          <p className="mb-2 text-base text-gray-700">{note.description}</p>

          <p>{note.tag}</p>
          <div className="flex justify-end gap-2 text-xl">
           
            <BiEdit
              onClick={() => {
                updateNote(note);
              }}
              className="my-1 cursor-pointer hover:text-indigo-600"
            />
            <BsFillTrashFill
            onClick={() => {
              deleteNote(note._id);
            }}
            className="my-1 cursor-pointer hover:text-indigo-600"
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteCards;

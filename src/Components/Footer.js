import React from "react";
import { FaBeer } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="px-10 mt-8 text-gray-600 bg-white body-font">
        <div className="flex flex-col items-center px-2 py-4 mx-auto sm:flex-row">
          <span className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <span className="ml-3 text-xl">My Notes</span>
          </span>
          <p className="text-sm text-center text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
            Copyright © 2022 MyNotes.com
          </p>
          <span className="inline-flex justify-center gap-2 text-2xl sm:ml-auto sm:mt-0 sm:justify-start">
            <AiFillFacebook/>
            <AiFillInstagram/>
            <AiFillLinkedin/>
            <AiFillTwitterSquare/>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

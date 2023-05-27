import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import "../../style/style.css"
import avatar from '../../icons/avatar.png';

// import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TextEditor from "../TextEditor/TextEditorComponent";
// import { useState } from "react";

const EditorComponent = () => {

  let documentName = prompt("Enter your document name");
  return (
    <>
      <header className="flex justify-between items-center p-3 pb-1 header">
        {/* <div> */}
          <span className="cursor-pointer">
            <Link to="/">
              <Icon name="description" color="blue" size="5xl" />
            </Link>
          </span>
          <div className="flex-grow px-2">
            <h2 className="bold">{documentName}</h2>
            <div className="flex items-center overflow-x-scroll text-sm space-x-1">
              <p >File</p>
              <p className="options">Edit</p>
              <p className="options">View</p>
              <p className="options">Insert</p>
              <p className="options">Format</p>
              <p className="options">Tools</p>
              <p className="options">Add-ons</p>
              <p className="options">Help</p>
            </div>
          </div>
        {/* </div> */}
        <div className="flex right-header">
          <Button
            size="regular"
            style={{ background: "#1A73E8" }}
            className="!bg-[#1A73E8] hover:bg-blue-500 !rounded-md md:inline-flex h-10"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="light"
          >
            <Icon name="share" size="md" />
            <span>Share</span>
          </Button>
          <img
            src={avatar}
            alt='suraj'
            title='suraj lal'
            className="cursor-pointer rounded-full h-10 w-10 ml-2"
          />
        </div>
      </header>
      <div className="editor-container">
        <TextEditor documentName={documentName} />
      </div>
    </>
  );
};

export default EditorComponent;

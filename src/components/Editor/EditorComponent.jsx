import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import "../../style/style.css"
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import StateToPdfMake from "draft-js-export-pdfmake";
// 
// import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TextEditor from "../TextEditor/TextEditorComponent";
// import { useState } from "react";

const EditorComponent = ({uniqueId}) => {
  const { id } = useParams();
console.log(id, uniqueId);

  let documentName = prompt("Enter your document name");
  return (
    <>
      <header className="flex justify-between items-center p-3 pb-1">
        <span className="cursor-pointer">
          <Link to="/">
            <Icon name="description" color="blue" size="5xl" />
          </Link>
        </span>
        <div className="flex-grow px-2">
          <h2 className="">{documentName}</h2>
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
        <Button
          size="regular"
          style={{ background: "#1A73E8" }}
          className="!bg-[#1A73E8] hover:bg-blue-500 !rounded-md md:inline-flex h-10"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
          // // onClick={() => {
          // //   const stateToPdfMake = new StateToPdfMake(userDoc?.editorState);
          // //   // console.log(stateToPdfMake.generate());
          // //   pdfMake.vfs = pdfFonts.pdfMake.vfs;
          // //   pdfMake
          // //     .createPdf(stateToPdfMake.generate())
          // //     .download(`${userDoc?.name}.pdf`);
          // }}
        >
          <Icon name="download" size="md" />
          <span>Download</span>
        </Button>
        {/* <img
          src={user?.photoURL}
          alt={user?.displayName}
          title={user?.displayName}
          onClick={() => {
            signOut(auth);
            setUser(null);
          }}
          className="cursor-pointer rounded-full h-10 w-10 ml-2"
        /> */}
      </header>
      <div className="editor-container">
        <TextEditor uniqueId= {uniqueId} documentName= {documentName}  />
      </div>
    </>
  );
};

export default EditorComponent;

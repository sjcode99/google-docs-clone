import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";


const TextEditor = ({ documentName }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // console.log(editorState);

  useEffect(() => {
    const retrievedContent = JSON.parse(localStorage.getItem(documentName));
    // console.log(retrievedContent);
    if(retrievedContent)
      setEditorState(EditorState.createWithContent(convertFromRaw(retrievedContent)))
  }, [])

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState)
    // console.log(JSON.stringify(raw));
    localStorage.setItem(documentName, JSON.stringify(raw))
  }, [editorState])

  return (
    <div className="min-h-screen pb-16" style={{backgroundColor: '#ededed'}}>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto shadow-md"
        editorClassName="mt-6 bg-white p-5 shadow-lg min-h-[372vh] max-w-5xl mx-auto mb-12 border-2 rounded-sm border-gray-300"
        editorStyle={{ minHeight: "372vh", width: '80%' }}
      />
    </div>
  );
};

export default TextEditor;

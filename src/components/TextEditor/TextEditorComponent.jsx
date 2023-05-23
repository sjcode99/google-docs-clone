import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";


const TextEditor = ({ documentName, uniqueId }) => {
  console.log(documentName, uniqueId);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [data, setData] = useState('')
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const docRef = doc(firestore, "userDocs", `${uid}`, "docs", `${uniqueId}`);
  //     const docSnap = await getDoc(docRef);
  //     console.log(docSnap);

  //     if (docSnap.exists()) {
  //       if (docSnap?.data()?.editorState)
  //         setEditorState(
  //           EditorState.createWithContent(
  //             convertFromRaw(docSnap.data()?.editorState)
  //           )
  //         );
  //     }
  //   };
  //   fetchData();
  // },[uniqueId]);
  // }, [uid, id]);
  return (
    <div className="bg-[#f9f8fa] min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto shadow-md"
        editorClassName="mt-6 bg-white p-5 shadow-lg min-h-[1300px] max-w-5xl mx-auto mb-12 border-2 rounded-sm border-gray-300"
        editorStyle={{ minHeight: "1300px", width: '60%' }}
      />
    </div>
  );
};

export default TextEditor;

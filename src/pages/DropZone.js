import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { storage, db } from "../firebase";
import { ref, getDownloadURL, uploadBytes } from "@firebase/storage";

function MyDropzone() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const captionRef = useRef(null);
  const uploadFile = async () => {
    const docRef = await addDoc(collection(db, "post"), {
      caption: captionRef.current.value,
      timestamp: serverTimestamp(),
    });
    await Promise.all(
      selectFiles.map((file) => {
        const fileRef = ref(storage, `posts/${docRef.id}/${file.path}`);
        uploadBytes(fileRef, file, "data_url").then(async () => {
          const downloadURL = await getDownloadURL(fileRef);
          await updateDoc(doc(db, "posts", docRef.id), {
            file: arrayUnion(downloadURL),
          });
        });
      })
    );
    captionRef.current.value = "";
    setSelectedFiles([]);
  };
  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const selectFiles = selectedFiles?.map((file) => <div>{file.preview}</div>);
  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {/* {isDragActive ? ( */}
        <p>Drop the files here ...</p>
        {/* ) : ( */}
        {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
        {/* )} */}
      </div>
      <input ref={captionRef} type="text" placeholder="Enter the caption" />
      <button onClick={uploadFile}>Post</button>
    </div>
  );
}
export default MyDropzone;

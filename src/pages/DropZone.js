import React, { useCallback, useEffect, useRef, useState } from "react";
import Dropzone from "react-dropzone";
import { v4 as uuidv4 } from "uuid";

import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { storage, db } from "../firebase";

import { ref, getDownloadURL, uploadBytes } from "@firebase/storage";
import authStore from "../stores/AuthStore";

function MyDropzone() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [uploadedImages, setUploadedImages] = useState([]);
  console.log(
    "🚀 ~ file: DropZone.js ~ line 22 ~ MyDropzone ~ uploadedImages",
    uploadedImages
  );
  let upload = [];

  const handleChange = (acceptedFiles) => {
    acceptedFiles.map(async (selectedFile) => {
      const storageRef = ref(storage, selectedFile.name);
      await getDownloadURL(storageRef)
        .then(async (storageRef) => {
          upload.push(storageRef);
          setUploadedImages(upload);
        })
        .catch((error) => {
          console.log(
            "🚀 ~ file: DropZone.js ~ line 39 ~ uploadFile ~ error",
            error
          );
        });
    });
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "files", uuidv4()), {
      files: [...uploadedImages],
      timestamp: serverTimestamp(),
      userId: authStore.user.uid,
    });
  };

  return (
    <>
      <Dropzone onDrop={(acceptedFiles) => handleChange(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} type="file" multiple />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      <button type="submit" onClick={uploadFile}>
        Submit
      </button>
    </>
  );
}
export default MyDropzone;

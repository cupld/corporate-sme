//don't use this file to fetch files please use thta function in FilesStore
import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import moment from "moment";

function GetFiles() {
  const [files, setFiles] = useState([]);
  const postfile = (file) => {
    const post_file = file.files?.map((file) => (
      <div>
        <link href={file} />
      </div>
    ));
    return post_file;
  };
  useEffect(() => {
    const collectionRef = collection(db, "files");
    const queries = query(collectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(queries, (querySnapshot) => {
      setFiles(
        QuerySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsub;
  }, []);

  return (
    <div>
      {files.map((file) => (
        <div>
          <div key={file.id}>{file.caption}</div>
          <div>{postfile(file)}</div>
          <p>{moment(file.timestamp).fromNow()}</p>
        </div>
      ))}
    </div>
  );
}

export default GetFiles;

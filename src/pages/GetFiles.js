//don't use this file to fetch files please use thta function in FilesStore
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection, getDoc } from "firebase/firestore";

import moment from "moment";
import filesStore from "../stores/FilesStore";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

function GetFiles() {
  if (filesStore.loading) return <p>loading</p>;
  // console.log(
  //   "🚀 ~ file: GetFiles.js ~ line 12 ~ GetFiles ~ filesData",
  //   filesData
  // );
  // useEffect(() => {
  //   const fetchfiles = async () => {
  //     const querySnapshot = await getDocs(collection(db, "files"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.data().files);
  //     });
  //   };

  //   console.log(
  //     "🚀 ~ file: GetFiles.js ~ line 17 ~ GetFiles ~ filesData",
  //     filesData
  //   );
  //   fetchfiles();
  //   // const queries = query(collectionRef, orderBy("timestamp", "desc"));
  //   // const unsub = onSnapshot(queries, (querySnapshot) => {
  //   //   setFiles(
  //   //     QuerySnapshot.docs.map((doc) => ({
  //   //       ...doc.data(),
  //   //       id: doc.id,
  //   //       timestamp: doc.data().timestamp?.toDate().getTime(),
  //   //     }))
  //   //   );
  //   // });
  //   // return unsub;
  // }, []);

  const postFile = filesStore.files.map((file) => (
    <div>
      {console.log("🚀 ~ file: GetFiles.js ~ line 44 ~ GetFiles ~ file", file)}
      <a href={file} target="_blank">
        {file}
      </a>
    </div>
  ));

  return (
    <div>
      <div>
        {postFile}
        <p>{moment(postFile.timestamp).fromNow()}</p>
      </div>
    </div>
  );
}

export default observer(GetFiles);
// useEffect(() => {
//   const collectionRef = collection(db, "files");
//   const queries = query(collectionRef, orderBy("timestamp", "desc"));
//   const unsub = onSnapshot(queries, (querySnapshot) => {
//     setFiles(
//       QuerySnapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//         timestamp: doc.data().timestamp?.toDate().getTime(),
//       }))
//     );
//   });
//   return unsub;
// }, []);

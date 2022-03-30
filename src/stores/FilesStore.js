// filename , notes
import { makeAutoObservable } from "mobx";
import { auth, db } from "../firebase";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

class FilesStore {
  files = [];

  constructor() {
    makeAutoObservable(this, {});
  }
  fetchfiles = async () => {
    const querySnapshot = await getDocs(collection(db, "files"));
    querySnapshot.forEach((doc) => {
      this.files = doc.data().files;
      console.log(
        "🚀 ~ file: FilesStore.js ~ line 16 ~ FilesStore ~ l ~ this.files",
        this.files
      );
    });
  };
}

const filesStore = new FilesStore();
filesStore.fetchfiles();
export default filesStore;

// useEffect(() => {
//   const filesdata = async () => {
//     const querySnapshot = await getDocs(collection(db, "files"));
//     const l = querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//     console.log("🚀 ~ file: App.js ~ line 24 ~ l ~ l", l);
//   };
//   filesdata();
// }, []);
// const querySnapshot = await getDocs(collection(db, "files"));
// console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ querySnapshot", querySnapshot)
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

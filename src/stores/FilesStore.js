// filename , notes
import { makeAutoObservable } from "mobox";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

class FilesStore {
  files = null;

  constructor() {
    makeAutoObservable(this, {});
  }
  uploadFiles = () => {};
}

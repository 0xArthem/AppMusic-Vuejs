import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPqBdhzzKUNUgtwI_EMKk8yR771Ji_sSc",
  authDomain: "music-4472e.firebaseapp.com",
  projectId: "music-4472e",
  storageBucket: "music-4472e.appspot.com",
  messagingSenderId: "982765738599",
  appId: "1:982765738599:web:e756fde13cc50812c052c2",
};

export default firebase.initializeApp(firebaseConfig);

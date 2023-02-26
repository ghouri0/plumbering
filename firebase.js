import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwxYxov-KzZUT9wCB2FY_aJ6lN8UT9uQo",
  authDomain: "plumbering-5e429.firebaseapp.com",
  projectId: "plumbering-5e429",
  storageBucket: "plumbering-5e429.appspot.com",
  messagingSenderId: "52020545753",
  appId: "1:52020545753:web:cce287615b7dcda46156c8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

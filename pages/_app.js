import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      }),
    [auth]
  );
  return <Component {...pageProps} user={user} />;
}

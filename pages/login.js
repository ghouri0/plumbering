import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/router";
const provider = new GoogleAuthProvider();

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  if (auth.currentUser) {
    return (
      <section className="grid place-content-center h-screen w-screen overflow-hidden">
        <button
          onClick={logout}
          disbaled={loading ? true : false}
          className="disabled:cursor-not-allowed text-blue-500 font-medium rounded-lg border-2 border-blue-500 px-5 py-3 hover:bg-blue-500 hover:text-white transition-colors duration-300"
        >
          {loading ? "Loggin Out" : "Log Out"}
        </button>
      </section>
    );
  }

  async function logout() {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  const signInwithGoogleAccount = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid place-content-center h-screen w-screen overflow-hidden">
      <button
        onClick={signInwithGoogleAccount}
        disbaled={loading ? true : false}
        className="disabled:cursor-not-allowed text-blue-500 font-medium rounded-lg border-2 border-blue-500 px-5 py-3 hover:bg-blue-500 hover:text-white transition-colors duration-300"
      >
        {loading ? "Signing in" : "Sign in With Google"}
      </button>
    </section>
  );
};

export default Login;

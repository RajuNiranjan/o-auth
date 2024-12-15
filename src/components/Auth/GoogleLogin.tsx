import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import googleIcon from "../../assets/google.svg";

export const GoogleLogin = () => {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log("results", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="border flex items-center gap-2 bg-white shadow-xl text-black w-max p-4  rounded-full  ">
      <img src={googleIcon} alt="" width={25} height={25} />
      <p className="text-lg">Continue with Google</p>
    </button>
  );
};

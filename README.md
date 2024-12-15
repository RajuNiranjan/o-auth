# Google OAuth with Firebase

This project demonstrates how to integrate Google OAuth authentication in a React app using Firebase. The Google login button allows users to authenticate via their Google accounts.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Firebase Setup](#firebase-setup)
- [Environment Variables](#environment-variables)
- [Google OAuth Button Component](#google-oauth-button-component)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before getting started, you need to have the following:

- A React application.
- Node.js and npm installed on your machine.
- A Firebase account.

## Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/your-repository.git
Navigate to your project directory.

bash
Copy code
cd your-repository
Install the necessary dependencies.

bash
Copy code
npm install
Install Firebase SDK.

bash
Copy code
npm install firebase
Firebase Setup
To use Firebase Authentication in your project, you need to set up Firebase:

Go to the Firebase Console.
Create a new project or use an existing one.
Enable Google Authentication:
Go to the Authentication section.
Click on Sign-in method.
Enable Google as a sign-in provider.
Obtain your Firebase configuration details:
In the Firebase Console, go to Project Settings > General.
Under Your apps, select Web.
Copy the Firebase config object and paste it into your project’s firebase.js file (as shown below).
Firebase Configuration
Create a firebase.js file in your project and initialize Firebase as follows:

javascript
Copy code
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
Environment Variables
Create a .env file in the root of your project with the following environment variables (replace the values with your own Firebase credentials):

makefile
Copy code
VITE_FIRE_BASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
Ensure you store your Firebase credentials securely by using environment variables.

Google OAuth Button Component
The Google login button is implemented in the GoogleLogin component. It uses Firebase Authentication to authenticate the user via a Google account when clicked.

Here is the code for the GoogleLogin component:

javascript
Copy code
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
      className="border flex items-center gap-2 bg-white shadow-xl text-black w-max p-4 rounded-full">
      <img src={googleIcon} alt="Google Icon" width={25} height={25} />
      <p className="text-lg">Continue with Google</p>
    </button>
  );
};
Explanation:
getAuth and GoogleAuthProvider from Firebase are used to manage authentication.
signInWithPopup triggers the Google login popup.
googleIcon is an image asset for the Google logo.
Usage
Import the GoogleLogin component into your app.

javascript
Copy code
import { GoogleLogin } from './path/to/GoogleLogin';

function App() {
  return (
    <div>
      <GoogleLogin />
    </div>
  );
}

export default App;
Make sure the .env file with the Firebase credentials is properly configured.

Start the development server:

bash
Copy code
npm run dev
You should see the "Continue with Google" button in your app. Clicking it will open a Google login popup for authentication.

Contributing
Fork the repository.
Create a new branch for your changes.
Implement your changes and commit them.
Push your changes to your forked repository.
Open a pull request to the main repository.
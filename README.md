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
   git clone https://github.com/RajuNiranjan/o-auth.git
Navigate to your project directory.
```cd o-auth```

Install the necessary dependencies.
```npm install```

Install Firebase SDK.
```npm install firebase```

Create a firebase.js file in your project and initialize Firebase as follows:

```
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
```

Environment Variables
Create a .env file in the root of your project with the following environment variables (replace the values with your own Firebase credentials):

```
VITE_FIRE_BASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
Ensure you store your Firebase credentials securely by using environment variables.
```

Google OAuth Button Component
The Google login button is implemented in the GoogleLogin component. It uses Firebase Authentication to authenticate the user via a Google account when clicked.

```
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
```
Import the GoogleLogin component into your app.
```

import { GoogleLogin } from './path/to/GoogleLogin';

function App() {
  return (
    <div>
      <GoogleLogin />
    </div>
  );
}

export default App;
```

Start the development server:
```
npm run dev
```

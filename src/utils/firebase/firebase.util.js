import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAKIkfW8sEECmMvJvJxYuZBv20Pdi2Jae0',
  authDomain: 'enigma-online-shop.firebaseapp.com',
  projectId: 'enigma-online-shop',
  storageBucket: 'enigma-online-shop.appspot.com',
  messagingSenderId: '38246974091',
  appId: '1:38246974091:web:d0239408c51cccef13ca8e',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email, 
                createdAt
            })
        } catch(error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
}

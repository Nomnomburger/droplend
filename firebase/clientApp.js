import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};



export const logout = () => {
    signOut(auth);
};


export const uploadAccountData = async account => {
    try {
        const docRef = await addDoc(collection(getFirestore(app), "Expenses"), {
            balance: account.balance,
            transactionDate: account.transactionDate,
            transactionAmount: account.transactionAmount,
        });
        // console.log('Document written with ID: ', docRef.id)
    } catch (err) {
        // console.error('Error adding document: ', err)
        alert(err.message);
    }
};




const app = initializeApp(clientCredentials);
export const auth = getAuth(app);
export default app;


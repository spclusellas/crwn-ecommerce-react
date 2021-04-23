import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBTkzQFkHgnldGLOXazLdjlHQg56JwoGjU",
    authDomain: "crwn-db-spc.firebaseapp.com",
    projectId: "crwn-db-spc",
    storageBucket: "crwn-db-spc.appspot.com",
    messagingSenderId: "20838099823",
    appId: "1:20838099823:web:84ae7bae5b36e09d25569a",
    measurementId: "G-0BRK2FZMEN",
};

export const createUserDocument = async (userAuth, opt = {}) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...opt
            })           
        } catch (error) {
            console.log("errror creating user", error)
        }
    }

    return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "my-clothing-12b89",
    storageBucket: "my-clothing-12b89.appspot.com",
    messagingSenderId: "991011050707",
    appId: "1:991011050707:web:fa47950e3a80b61450b026",
    measurementId: "G-GZ6QG691ND"
};

export const createUserProfile = async (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists){
        try{
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        await userRef.set({displayName, email, createdAt, ...additionalData});
        }
        catch(err){
            console.log('Create profile fail: ', err.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const singInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
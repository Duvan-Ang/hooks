import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBJeF6ZW7zWV0jFR6Tfr1MDJm2Rg-QZECU",
    authDomain: "proyecto-react-600f3.firebaseapp.com",
    projectId: "proyecto-react-600f3",
    storageBucket: "proyecto-react-600f3.firebasestorage.app",
    messagingSenderId: "273148159517",
    appId: "1:273148159517:web:c3a7091cbcd59d0db248f4",
    measurementId: "G-MS42CCNPQW"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth y provider de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

export { auth, googleProvider, db, signOut };
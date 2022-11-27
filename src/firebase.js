import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA2aJe9_HC_lVkE2-kWXiHWlAQnHbd_iI8",
    authDomain: "speak2me-auth.firebaseapp.com",
    projectId: "speak2me-auth",
    storageBucket: "speak2me-auth.appspot.com",
    messagingSenderId: "920524965808",
    appId: "1:920524965808:web:54ef247fb1debee25eb875"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;


// export const userReturn = () => {
//     var user = auth.currentUser();
// }

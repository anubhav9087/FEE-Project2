import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC73_n2lHKAirTsXEoJpnK6ujIDU1FtlnM",
    authDomain: "lang-trans-b8697.firebaseapp.com",
    projectId: "lang-trans-b8697",
    storageBucket: "lang-trans-b8697.appspot.com",
    messagingSenderId: "601367618246",
    appId: "1:601367618246:web:2ea8302d45810e722aadc7",
    databaseURL: "https://lang-trans-b8697-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };

import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD1lCIwy6TXKDrIkoRtz_2QWfE71Kxx2Sw",
    authDomain: "fruit-delivery-b351e.firebaseapp.com",
    databaseURL: "https://fruit-delivery-b351e-default-rtdb.firebaseio.com",
    projectId: "fruit-delivery-b351e",
    storageBucket: "fruit-delivery-b351e.appspot.com",
    messagingSenderId: "311820182435",
    appId: "1:311820182435:web:f41bd93c13abff52db3016",
    measurementId: "G-K9EP5S73KY",
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5eQYZ60A4CNBG8h-FKQ9sYqRNW16Pnw0",
  authDomain: "media-manager-dc652.firebaseapp.com",
  projectId: "media-manager-dc652",
  storageBucket: "media-manager-dc652.appspot.com",
  messagingSenderId: "801662514794",
  appId: "1:801662514794:web:68882ad471a6cbe3953c13"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}
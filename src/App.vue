<script setup>
import Media_Medium from './components/Media_Medium.vue'
import Media_Small from './components/Media_Small.vue'

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc} from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyC5eQYZ60A4CNBG8h-FKQ9sYqRNW16Pnw0",
  authDomain: "media-manager-dc652.firebaseapp.com",
  projectId: "media-manager-dc652",
  storageBucket: "media-manager-dc652.appspot.com",
  messagingSenderId: "801662514794",
  appId: "1:801662514794:web:68882ad471a6cbe3953c13"
};
const app = initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Le3h3MiAAAAAI-8QFZY76IDQwFsctEy5nW8zCGL'),
  isTokenAutoRefreshEnabled: true
});

const db = getFirestore(app);

const docRef = doc(db, "Friend_Pages/Media");
const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

</script>

<template>
  <div id="container">
    <Media_Medium />
    <Media_Medium />
    <Media_Medium />
    <Media_Medium />
  </div>
</template>

<style scoped>
#container {
  display: flex;
  /* align-content: space-around; */
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px 10px;
}
</style>

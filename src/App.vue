<script setup>
import Media_Medium from './components/Media_Medium.vue'
import Media_Small from './components/Media_Small.vue'

import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5eQYZ60A4CNBG8h-FKQ9sYqRNW16Pnw0",
  authDomain: "media-manager-dc652.firebaseapp.com",
  projectId: "media-manager-dc652",
  storageBucket: "media-manager-dc652.appspot.com",
  messagingSenderId: "801662514794",
  appId: "1:801662514794:web:68882ad471a6cbe3953c13"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeP-UEiAAAAACRYtJSFXP__7z2SvS_tcY5DWset'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});

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

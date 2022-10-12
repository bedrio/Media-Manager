<script setup>
import { onMounted } from 'vue'

import Media_Medium from './components/Media_Medium.vue'
import Media_Small from './components/Media_Small.vue'

import { getFirestore, collection, doc, getDocs, getDoc} from "firebase/firestore"
import { db } from '@/Firestore.js'

onMounted(async () => {
  const docRef = doc(db, "Friend_Pages", "Media");
  const docSnap = await getDoc(docRef);
  console.log("docSnap", docSnap.data());
})

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

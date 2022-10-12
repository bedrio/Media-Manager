<script setup>
import { onMounted, ref } from 'vue'
import Media_Medium from './components/Media_Medium.vue'
import Media_Small from './components/Media_Small.vue'
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore"
import { db } from '@/Firestore.js'

const media_collection_ref = collection(db, "Lists/xjNTCJq0rA1klbFhfHLn/Medias")
const listOfMedia = ref([])

onMounted(async () => {
  const querySnapshot = await getDocs(media_collection_ref);
  querySnapshot.forEach((doc) => {
    const mediaObject = doc.data()
    listOfMedia.value.push({
      name: mediaObject.name,
      length: mediaObject.length,
      unit: mediaObject.unit,
      category: mediaObject.category,
      image_url: mediaObject.image_url,
      description: mediaObject.description,
      genres: mediaObject.genres
    });
  });

  console.log(listOfMedia)
})

const addMedia = async (mediaObject) => {
  await addDoc(media_collection_ref, {
    name: mediaObject.name,
    length: mediaObject.length,
    unit: mediaObject.unit,
    category: mediaObject.category,
    image_url: mediaObject.image_url,
    description: mediaObject.description,
    genres: mediaObject.genres
  });
}

const mediaExample = ref({
  name: "Space Brothers",
  length: 99,
  unit:"eps",
  genres: [
      "Slice of Life",
      "Inspirational",
      "Realistic"
  ],
  category: "Rewatch",
  image_url: "https://cdn.myanimelist.net/images/anime/8/55625l.jpg",
  description: 'On a fateful summer night in 2006, Mutta Nanba and his younger brother Hibito witness what they believe to be a UFO flying toward the Moon. This impressing and unusual phenomenon leads both siblings vowing to become astronauts, with Hibito aiming for the Moon and Mutta, convinced that the eldest brother has to be one step ahead, for Mars.\n\nNow an adult, life hasn\'t turned out how Mutta had pictured it: he is diligently working in an automotive company, whereas Hibito is on his way to be the very first Japanese man to step on the Moon. However, after losing his job, Mutta is presented with an unexpected opportunity to catch up to his younger brother when the Japanese Aerospace Exploration Agency, commonly known as JAXA, accepts his application to participate in the next astronaut selection. Despite self-doubts about his prospects, Mutta is unwilling to waste this chance of a lifetime, and thus embarks on an ambitious journey to fulfill the promise made 19 years ago.',
})

</script>

<template>
  <div id="container">
    <Media_Medium v-for="media in listOfMedia" :media-object="media"/>
  </div>
  <br />
  <button @click="addMedia(mediaExample)">Add Media</button>
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

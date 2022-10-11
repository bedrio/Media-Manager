<script>
    export default {
        data() {
            return {
                title: "Space Brothers",
                length: 99,
                unit:"eps",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                description_short: 'ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        }
    }
</script>

<template>
<div class="container">
    <q-img
        src="https://cdn.myanimelist.net/images/anime/8/55625l.jpg"
        :ratio="2/3"
        class="border-radius-inherit"
    >
        <div class="absolute-bottom text-subtitle1 text-center">
            <p class="title">{{ title }}</p>
        </div>
    </q-img>
    
</div>
</template>

<style>
.container{
    width: 200px;
    height: 300px;
    border-radius: 10px;
}

.title {
    margin: 0px;
    font-size: 20px;
    font-weight: bold;
    color: #EEE;
}
</style>
<script>
    export default {
        data() {
            return {
                title: "Space Brothers",
                length: 99,
                unit:"eps",
                genres: [
                    "Slice of Life",
                    "Inspirational",
                    "Realistic"
                ],
                description: 'On a fateful summer night in 2006, Mutta Nanba and his younger brother Hibito witness what they believe to be a UFO flying toward the Moon. This impressing and unusual phenomenon leads both siblings vowing to become astronauts, with Hibito aiming for the Moon and Mutta, convinced that the eldest brother has to be one step ahead, for Mars.\n\nNow an adult, life hasn\'t turned out how Mutta had pictured it: he is diligently working in an automotive company, whereas Hibito is on his way to be the very first Japanese man to step on the Moon. However, after losing his job, Mutta is presented with an unexpected opportunity to catch up to his younger brother when the Japanese Aerospace Exploration Agency, commonly known as JAXA, accepts his application to participate in the next astronaut selection. Despite self-doubts about his prospects, Mutta is unwilling to waste this chance of a lifetime, and thus embarks on an ambitious journey to fulfill the promise made 19 years ago.',
                description_short: '',
                description_icon: "expand_more",
                is_description_expanded: false
            }
        },
        methods: {
            toggle_description() {
                this.description_icon = this.is_description_expanded ? "expand_more" : "expand_less"
                this.is_description_expanded = !this.is_description_expanded
            }
        },
        setup () {
            return {
                thumbStyle: {
                    right: '2px',
                    borderRadius: '5px',
                    backgroundColor: '#26A69A',
                    width: '5px',
                    opacity: '0.75'
                }
            }
        },
        created() {
            this.description_short = this.description.split(' ').slice(0, 40).join(' ')
        }
    }
</script>

<!-- TODO: Clean Code! -->
<template>
<q-card class="my-card" dark flat>
    <q-card-section class="card-content" horizontal>
        <q-img
            class="col-5"
            src="https://cdn.myanimelist.net/images/anime/8/55625l.jpg"
            ratio="2/3"
            fit="cover"
        />
        <q-card-section class="card-content">
            <q-card-section class="header" style="padding:0">
                <p class="title">{{ title }}</p>
                <p style="margin:0; color:#F2C037">{{ length + " " + unit }}</p>
            </q-card-section>
            <q-separator color="secondary" spaced="6px"/>
            <q-scroll-area
                style="height: 200px;"
                :thumb-style="thumbStyle"
                :delay="0"
            >
                <p v-if="is_description_expanded" class="description">{{ description }}</p>
                <p v-else class="description">{{ description_short }}</p>
                <q-card-actions align="center" style="padding-bottom: 0;">
                    <q-btn @click="toggle_description" flat round color="primary" :icon="description_icon" />
                </q-card-actions>
            </q-scroll-area>
        </q-card-section>
    </q-card-section>
</q-card>
</template>

<style>
.my-card {
    width: 475px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    margin: 0px;
    font-size: 20px;
    font-weight: bold;
}

.card-content {
    max-height: 300px;
    min-height: 250px;
    width: 100%;
}

.description {
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 13px;
    white-space: pre-wrap;
}
</style>
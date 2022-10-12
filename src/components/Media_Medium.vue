<script>
    export default {
        props: {
            mediaObject: {
                name: String,
                length: Number,
                unit: String,
                category: String,
                image_url: String,
                description: String,
                genres: Array
            }
        },
        data() {
            return {
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
            this.description_short = this.mediaObject.description.split(' ').slice(0, 40).join(' ')
            console.log("props", this.mediaObject);
        }
    }
</script>

<!-- TODO: Clean Code! -->
<template>
<q-card class="my-card" dark flat>
    <q-card-section class="card-content" horizontal>
        <q-img
            class="col-5"
            :src="mediaObject.image_url"
            ratio="2/3"
            fit="cover"
        />
        <q-card-section class="card-content">
            <q-card-section class="header" style="padding:0">
                <p class="title">{{ mediaObject.name }}</p>
                <p style="margin:0; color:#F2C037">{{ mediaObject.length + " " + mediaObject.unit }}</p>
            </q-card-section>
            <q-separator color="secondary" spaced="6px"/>
            <q-scroll-area
                style="height: 200px;"
                :thumb-style="thumbStyle"
                :delay="0"
            >
                <p v-if="is_description_expanded" class="description">{{ mediaObject.description }}</p>
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
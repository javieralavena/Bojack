<template>
    <v-card class=" mx-auto my-10" max-width="665px">
        <v-img src="https://miro.medium.com/max/665/0*DHd1MPdr5WqvbRKd.png" height="374px"></v-img>

        <div>
            <v-card-title class="d-inline-block">
                Bojack Horseman
            </v-card-title>
            <modal class="d-inline-block"></modal>
        </div>


    </v-card>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
    name: 'component-card',
    // props: {},
    data: function () {
        return {

        }
    },
    // computed: {},
    methods: {
        // -- UI Modification
        // -- Data fetching
        // -- Data handling and transformations
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
    },
    // watch: {},
    components: {
        Modal
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
</style>
<template>
    <div>
        <v-app-bar color="deep-purple darken-3 px-5" dark>

            <v-toolbar-title class=" flex-grow-1 flex-shrink-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BoJack_Horseman_Logo.svg/629px-BoJack_Horseman_Logo.svg.png"
                    height="40px" class=" d-flex align-center" />
            </v-toolbar-title>

            <v-toolbar-items class="hidden-sm-and-down align-center">
                <router-link to="/" class="text-decoration-none">
                    <v-btn text>
                        Home
                    </v-btn>
                </router-link>
                <v-divider vertical></v-divider>

                <router-link to="/busqueda" class="text-decoration-none">
                    <v-btn text>
                        Buscar Personajes
                    </v-btn>
                </router-link>


                <v-divider vertical></v-divider>

                <router-link to="/tabla" class="text-decoration-none">
                    <v-btn text>
                        Tabla de personajes
                    </v-btn>
                </router-link>

            </v-toolbar-items>



        </v-app-bar>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'component-Navbar',
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
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>


</style>
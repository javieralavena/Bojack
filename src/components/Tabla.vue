<template>
    <v-container class="my-5">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr >
                        <th class="text-left ">
                            
                        </th>
                        <th class="text-left font-weight-black text-subtitle-1">
                            Nombre
                        </th>
                        <th class="text-left font-weight-black text-subtitle-1">
                            Especie
                        </th>
                        <th class="text-left font-weight-black text-subtitle-1">
                            Características
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="personaje in Personajes" :key="personaje.id">
                    <td> <img :src="personaje.image" alt="" width="100px"></td>
                        <td>{{ personaje.nombre }}</td>
                        <td>{{ personaje.raza }}</td>
                        <td>{{ personaje.caracteristicas}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>

</template>

<script>

import { mapState } from 'vuex'
export default {
    name: 'component-tabla',
    // props: {},
    data: function () {
        return {}
    },
    computed: {
        ...mapState(['Personajes']),
    },
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
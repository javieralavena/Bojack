<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="5" class="flex-column mt-5">
                <h1>Personajes</h1>
                <v-text-field v-model="personaje.id" label="Buscar personaje por id" clearable></v-text-field>
                <div v-if="!hasId && formSend" class="errorText">
                    Ingrese un ID valido
                </div>

            </v-col>
            <v-col class="flex-grow-0">
                <v-btn class="ma-2 my-10 " @click="getPersonaje(personaje.id)" :loading="loading">Buscar</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="personaje in personajes" :key="personaje.id">
                <v-card class="mx-auto" max-width="344">
                    <v-img :src="personaje.image" height="200px" lazy-src=""></v-img>

                    <v-card-title class="pb-1">{{ personaje.nombre }}</v-card-title>
                    <v-card-text>
                        <div class="text-subtitle-1"> <span class="font-weight-bold">Especie:</span>  {{personaje.raza}}</div>
                        <div class="text-body-2">
                            {{personaje.caracteristicas}}
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            
        </v-row>

    </v-container>
</template>

<script>


import { mapState, mapActions } from 'vuex'

export default {
    name: 'component-formulario',
    // props: {},
    data: function () {
        return {
            personaje: {
                id: '',
                nombre: '',
                image: '',
            },
            loading: false,
            formSend: false
        }
    },
    computed: {
        ...mapState(['personajes']),

        hasId() {
            let expression = /^(\d{1}|\d{2})$/
            return this.validator(expression, this.personaje.id)
        },

    },
    methods: {
        ...mapActions(['addPersonaje']),

        getPersonaje(id) {

            this.formSend = true
            let valid = true

            if (!this.hasId) {
                valid = false
            }

            if (valid) {


                this.addPersonaje(id)
                this.cleanForm()
                this.formSend = false
            }
        },

        validator(expression, value) {
            if (expression.test(value)) {
                return true
            }
            return false
        },

        cleanForm() {
            this.personaje.id = ""
        }

        // -- UI Modification
        // -- Data fetching
        // -- Data handling and transformations
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
    },
    // watch: {},
    components: {
        
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods

    // -- End Lifecycle Methods
}
</script>

<style scoped>
.error {
    border: 1px solid red;
}

.errorText {
    color: red;
}
</style>
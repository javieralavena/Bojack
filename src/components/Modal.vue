<template>
    <div class="text-center">
        <v-bottom-sheet v-model="sheet" hide-overlay>
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="deep-purple accent-1" class="mb-2" dark v-bind="attrs" v-on="on">
                    Ver más
                </v-btn>
            </template>
            <v-sheet  height="200px">
                <v-btn class="mt-6 mx-6" text color="purple accent-1" @click="sheet = !sheet">
                    close
                </v-btn>
                <div class="mx-10 text-justify">
                    En un mundo donde humanos y animales antropomorfos conviven, el personaje principal de la serie es
                    el caballo BoJack Horseman, protagonista de la telecomedia Horsin' Around en la década
                    de 1990. Después de años de decadencia y una tormentosa vida personal, se propone volver al
                    candelero a través de una autobiografía para la que contará con ayuda de una escritora fantasma,
                    Diane Nguyen. BoJack también tendrá que lidiar con las exigencias de su exnovia y agente, la gata
                    Princess Carolyn; su compañero de piso Todd Chávez y su amienemigo Mr. Peanutbutter,
                    un perro labrador que es novio de Diane y triunfó con una sitcom muy similar a Horsin' Around. La
                    mayor parte de la trama se desarrolla en «Hollywoo», una parodia de Hollywood, California.
                </div>
            </v-sheet>
        </v-bottom-sheet>
    </div>
</template>

<script>
export default {
    name: 'component-modal',
    // props: {},
    data: function () {
        return {
            sheet: false,
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
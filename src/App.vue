<template>
  <v-app>
    <NavBar></NavBar>
    
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    NavBar,
    
  }
};
</script>

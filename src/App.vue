<template>
  <v-app> 
    <Navbar></Navbar>
    <v-main class="grey lighten-4">
      <div class="mx-4 mb-2 mt-6">
      <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue'


export default Vue.extend({
  name: 'App',
  components:{
    Navbar
  },

  data: () => ({
    //
  }),
});
</script>

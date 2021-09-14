<template>
  <div class="dashboard">
    <span class="subheading grey--text">Dashboard</span>
    <v-container class="my-16">
      <v-layout>       
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text class="ma-3 grey--text" @click="sortByTitle()" v-on="on">
              <v-icon left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Courses</span>
            </v-btn>
          </template>
          <span>sort courses by title </span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="(item, index) in items" :key="index">
        <v-layout wrap class="pa-3" :class="`course__${item.category}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Course</div>
            <div>{{ item.title }}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="caption grey--text">Last ViewedOn</div>
            <div>{{ item.lastViewedOn }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">No.of questions viewed</div>
            <div>{{ item.readCount }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="`${item.chipType}`"
                
                class="my-3 white--text"
                >{{ item.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Dashboard",

  components: {},
  data() {
    return {
      items: [
        {
          title: "LDC",
          category:'psc',
          lastViewedOn: "1 Jan 2021",
          readCount: "120K+",
          status: "almost completed",
          chipType: "warning",
        },
        {
          title: "UDC",
          category:'psc',
          lastViewedOn: "2 Jan 2021",
          readCount: "14",
          status: "started",
          chipType: "primary",
        },
        {
          title: "AFCAT",
          category:'upsc',
          lastViewedOn: "3 Jan 2021",
          readCount: "110K+",
          status: "completed",
          chipType: "success",
        },
      ],
      ascending:true
    };
  },
  methods: {
    sortByTitle() {
      if(this.ascending)
       this.items.sort((a, b) => (a.title < b.title ? -1 : 1)); 
      else{
         this.items.sort((a, b) => (a.title < b.title ? 1 : -1));
      }

      this.ascending = !this.ascending;
    },
  },
});
</script>

<style lang="scss" scoped>
.course {
  &__psc {
    border-left: 4px solid rgb(8, 112, 209);
  }

  &__upsc {
    border-left: 4px solid rgb(52, 201, 76);
  }  
 
}


</style>



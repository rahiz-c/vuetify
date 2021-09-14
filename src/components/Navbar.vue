<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        x-large
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <!-- <v-app-bar-title class="grey--text  display-1 text-no-wrap" > -->
      <div class="grey--text text-h4">
        <span class="font-weight-light">high</span>
        <span>Jump</span>
      </div>
      <!-- </v-app-bar-title> -->
      <!-- <v-spacer></v-spacer>
            <v-btn text color="grey" small>
                <span>sign out</span>
                <v-icon small right>mdi-logout-variant</v-icon>
            </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="grey lighten-4" app>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/mrcDP.jpg" />
          </v-avatar>
          <p class="grey--text subheading mt-3 text--darken-1">
            Muhammed Rahiz
          </p>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="mb-3">
          <v-btn block text class="grey--text text--darken-1">
            <span class="text-capitalize">logout</span>
            <v-icon right>mdi-logout-variant</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Courses", route: "/courses" },
        { icon: "mdi-account", text: "Account", route: "/account" },
        { icon: "mdi-information", text: "About", route: "/about" },
      ],
    };
  },
});
</script>
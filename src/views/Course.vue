<template>
  <div>
    <span class="subheading grey--text">My Courses</span>
    <v-container class="my-16">
      <v-layout style="position:sticky;z-index:1; top:8vh" 
                 flat 
                 class="white mb-3 py-3" 
                 justify-space-between 
                 >
                        
          <v-btn text 
                 class="primary--text text--darken-1"
                 @click="sortCourse" >
            <v-icon  v-if="ascending">mdi-sort-reverse-variant</v-icon>
            <v-icon  v-else>mdi-sort-variant</v-icon>
          </v-btn>
          <v-btn text
            class="primary--text text--darken-1" >
            <v-icon left >mdi-plus</v-icon>
            <span class="text-capitalize text-subheading">more courses</span>
          </v-btn>
      </v-layout>
      <v-layout row wrap>
        <v-flex v-for="(course, index) of courses" md-4 sm-12 :key="index">
          <v-card flat class="ma-3 text-center">
            <v-responsive class="pt-3">
              <v-avatar size="100">
                <img :src="course.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ course.title }}</div>
              <div class="grey--text">{{ course.organizer }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary" class="text-lowercase">
                <v-icon left v-if="course.status === 1">mdi-play</v-icon>
                <v-icon left v-else>mdi-book-open-page-variant</v-icon>
                <span v-if="course.status === 1">start</span>
                <span v-else>continue</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import courseDetail from '@/core/models/courseDetail';

@Component({})
export default class Course extends Vue {
  private courses:courseDetail[] = 
     [
      {
        title: "AFCAT",
        organizer: "UPSC",
        avatar: "/afcat.jpg",
        status: 2,
      },
      {
        title: "LDC",
        organizer: "Kerala PSC",
        avatar: "/clerk.jpg",
        status: 2,
      },
      {
        title: "UDC",
        organizer: "Kerala PSC",
        avatar: "/clerk.jpg",
        status: 2,
      },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
      { title: "Bank", organizer: "AK", avatar: "/bank.jpg", status: 1 },
    ];
  
  private ascending:boolean=true;
 
 private sortCourse(){
    if(this.ascending)
    this.courses.sort((a,b) => a.status > b.status ? 1: -1)
    else{
      this.courses.sort((a,b) => a.status > b.status ? -1: 1)
    }

    this.ascending = !this.ascending;
  }
}
</script>
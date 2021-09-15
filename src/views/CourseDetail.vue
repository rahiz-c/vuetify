<template>
<div>
<v-container>
  <v-layout column>
    <v-expansion-panels >
     <v-expansion-panel v-for="subject, index in subjects" :key="index">
       <v-expansion-panel-header>
         {{subject}}
       </v-expansion-panel-header>
       <v-expansion-panel-content>
         <v-card flat>
           <v-card-text >
             <div class="font-weight-bold">119/500 questions attended</div>
             <div>exam due by 15/12/2021</div>
             <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis soluta quo aliquid repellat! Odio sit ipsam animi ex debitis voluptatem aut impedit amet, tenetur officiis autem et soluta in corporis.</div>
           </v-card-text>
         </v-card>
       </v-expansion-panel-content>
     </v-expansion-panel>
   </v-expansion-panels>
   <v-spacer></v-spacer>   
  </v-layout>
  <v-layout row justify-space-between my-15 mx-0>    
     <popup :title="'Suggest a question'"
            :buttonName="'Suggest question'" 
            :buttonIcon="'mdi-bullhorn'"
            :cardText="'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sit amet, ipsam hic voluptas aperiam sunt vel mollitia doloribus, est architecto. Rerum ut facilis officiis eius sint error fugit dolor!'"
            :isForm="true"
            :color="'primary'"
            :subjects="subjects"/>
     <popup :title="'Are you sure want to delete the course'"
            :buttonName="'delete course'" 
            :buttonIcon="'mdi-trash-can'"
            :cardText="'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sit amet, ipsam hic voluptas aperiam sunt vel mollitia doloribus, est architecto. Rerum ut facilis officiis eius sint error fugit dolor!'"
            :isForm="false"
            :color="'red'"/>
  </v-layout>
  </v-container>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Popup from '@/components/Popup.vue'

@Component({
   components:{
    Popup
  }
})
export default class CourseDetail extends Vue{

 private subjects:string[] = ["Geography", "English", "Mathematics", "Random GK"]
 
}
</script>
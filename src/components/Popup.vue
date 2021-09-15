<template>
    <div>
        <v-dialog width=600
                  v-model="dialog">
            <template v-slot:activator="{on}">
             <v-btn v-on="on"
                    outlined
                    :color="color">
             <span class="text-capitalize">{{buttonName}}</span>
             <v-icon right>{{buttonIcon}}</v-icon>
          </v-btn>
            </template>
            <v-card >
                <v-card-title>{{title}}</v-card-title>
                <v-divider></v-divider>
                 <v-card-text class="pt-2" v-if="!isForm">{{cardText}}</v-card-text>
                 <v-card-text v-else class="pt-4">
                     <v-form>
                         <v-select label="Subject"
                                   :items="subjects" outlined ></v-select>
                         <v-text-field label="Question" outlined ></v-text-field>
                         <v-textarea label="Describe answer" outlined></v-textarea>
                     </v-form>
                 </v-card-text>
                 <v-divider></v-divider>
                 <v-card-actions v-if="!isForm">
                     <v-btn text 
                            @click="close()" 
                            color="grey"
                            class="text-capitalize">cancel</v-btn>
                     <v-spacer></v-spacer>
                     <v-btn text
                            @click="close()"
                            color="red"
                            class="text-capitalize">delete</v-btn>
                 </v-card-actions>
                 <v-card-actions v-else>
                     <v-btn text 
                            @click="close()" 
                            color="grey"
                            class="text-capitalize">cancel</v-btn>
                     <v-spacer></v-spacer>
                     <v-btn text
                            @click="close()"
                            color="primary"
                            class="text-capitalize">
                            <span>submit</span>
                            <v-icon right>mdi-send</v-icon>
                            </v-btn>
                 </v-card-actions>
            </v-card>
          </v-dialog>
    </div>
</template>

<script lang="ts">
import {Vue,Component,Prop} from 'vue-property-decorator'

@Component({

})
export default class Popup extends Vue{
    private dialog=false;

    @Prop() private title!:string;
    @Prop() private buttonName!:string;
    @Prop() private buttonIcon!:string;
    @Prop() private cardText!:string;
    @Prop() private isForm!:boolean;
    @Prop() private color!:string;
    @Prop() private subjects!:string[];

    private close(){
        this.dialog=false;
    }
}
</script>
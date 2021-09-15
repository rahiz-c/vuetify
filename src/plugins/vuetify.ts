import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {VExpansionPanels, 
        VExpansionPanel,
        VExpansionPanelHeader,
        VExpansionPanelContent} from 'vuetify/lib';

Vue.use(Vuetify, {
   components:{
     VExpansionPanels, 
     VExpansionPanel,
     VExpansionPanelHeader,
     VExpansionPanelContent
   }
    
    
});

export default new Vuetify({
    theme:{
        default:'light',
    }
});

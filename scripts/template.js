import Vue from 'vue';
import MainContent from '../public/templates/template1.vue';

let MainComponent = Vue.extend(MainContent);

new MainComponent().$mount("#mainContent");



/**
 * Created by Jerry on 16/12/27.
 */

import Vue from "vue";
import App from "./components/App.vue";
import store from "./store/Store";

window.vm = new Vue({
    store,
    el: "#app",
    template: '<App />',
    components: { App }
});


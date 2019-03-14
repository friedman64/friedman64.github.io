import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDRg_I5M_f6RGXVQ1rfwJxZDYwgsO3lVWA",
        libraries: "places"
    }
});

new Vue({
  render: h => h(App),
}).$mount('#app')

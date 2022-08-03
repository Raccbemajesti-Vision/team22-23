import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueCarousel from "vue-carousel";
// import VueRx from "vue-rx";
import { auth } from "./firebase";

// Vue.use(VueRx);
Vue.use(VueCarousel);
Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(function (user) {
  // console.log(user && user.getIdTokenResult());
  let userSessionTimeout = null;

  if (user === null && userSessionTimeout === null) {
    clearTimeout(userSessionTimeout);
    userSessionTimeout = null;
  } else {
    user.getIdTokenResult().then((idTokenResult) => {
        const authTime = idTokenResult.claims.auth_time * 1000;
        if (Date.now() - authTime > 200000) {
            auth.signOut().then((_res) => {
                location.reload();
                console.log(_res);
            });
        }
    //   const sessionDurationInMilliseconds = 60 * 60 * 1000; // 60 min
    //   const expirationInMilliseconds = sessionDurationInMilliseconds - (Date.now() - authTime);
    //   userSessionTimeout = setTimeout(() => auth.signOut(), expirationInMilliseconds);
    });
  }
  if (!app)
    new Vue({
      router,
      VueCarousel,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
});

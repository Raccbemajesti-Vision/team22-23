<template>
  <div class="disableselect" id="app">
    <v-app>
      <v-app-bar
        app
        dark
        height="65"
        :class="[
          $vuetify.breakpoint.sm || $vuetify.breakpoint.xs
            ? 'fullColor'
            : 'sidecut',
        ]"
      >
        <div class="d-flex layout align-start justify-start">
          <v-flex md7 sm10 class="layout align-center justify-start">
            <img :src="logo" class="logoTop" @click="$router.push('/')" />
          </v-flex>
        </div>
        <v-spacer></v-spacer>

        <v-btn
          class="hidden-sm-and-down"
          text
          :color="color"
          @click="$router.push('/')"
        >
          Home
        </v-btn>
        <v-btn
          class="hidden-sm-and-down"
          text
          :color="color"
          @click="$router.push('/events')"
        >
          Events
        </v-btn>
        <!-- <v-btn
          class="hidden-sm-and-down"
          text
          :color="color"
          @click="$router.push('/ourCrew')"
        >
          our crew
        </v-btn> -->
        <v-menu open-on-hover bottom offset-y offset-overflow>
          <template v-slot:activator="{ on }">
            <v-btn class="hidden-sm-and-down" v-on="on" :color="color" text>
              Highlights
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('/Bulletin')">
              <v-list-item-content>
                <v-list-item-title>Bulletin</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- <v-list-item @click="$router.push('/weeklyPress')">
              <v-list-item-content>
                <v-list-item-title>Weekly Press</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
          </v-list>
        </v-menu>

        <v-menu open-on-hover bottom offset-y offset-overflow>
          <template v-slot:activator="{ on }">
            <v-btn class="hidden-sm-and-down" v-on="on" :color="color" text>
              Service
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('/BloodRequest')">
              <v-list-item-content>
                <v-list-item-title>Blood Donate/Request</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              href="https://sites.google.com/view/bibliophile-hub/home"
              target="_blank"
            >
              <v-list-item-content>
                <v-list-item-title>Bibliophile Hub</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
<!-- 
        <v-menu open-on-hover bottom offset-y offset-overflow>
          <template v-slot:activator="{ on }">
            <v-btn class="hidden-sm-and-down" v-on="on" :color="color" text>
              2020-21
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('/Scrapbook')">
              <v-list-item-content>
                <v-list-item-title>ScrapBook</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="https://raccbemajestic.team/" target="_blank">
              <v-list-item-content>
                <v-list-item-title>Website</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu> -->


        <v-btn
          class="hidden-sm-and-down"
          text
          :color="color"
          @click="$router.push('/contactUs')"
        >
          Contact
        </v-btn>
    
        <v-btn
          icon
          small
          v-show="
            $vuetify.breakpoint.sm || ($vuetify.breakpoint.xs && !showNav)
          "
          @click="showNav = !showNav"
        >
          <v-icon :color="!$vuetify.breakpoint.sm ? '#0630BE' : 'white'"
            >mdi-menu</v-icon
          >
        </v-btn>

        <!-- <v-btn
          fab
          small
          icon
          @click="$router.push('/avatar')"
        >
          <v-icon :color="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? '#0630BE' : 'white'">mdi-camera</v-icon>
        </v-btn> -->
      </v-app-bar>

      <v-navigation-drawer
        v-model="showNav"
        clipped
        absolute
        temporary
        width="300px"
        style="position: fixed; z-index: 999;"
      >
        <div class="py-2 px-2 text-center">
          <v-img :src="logo" width="80%"></v-img>
        </div>
        <v-divider></v-divider>
        <v-list dense rounded>
          <v-list-item
            v-for="(nav, i) in nav"
            :key="i"
            @click="$router.push(nav.route)"
            :href="nav.href"
          >
            <v-list-item-content @click="$router.push(nav.route)">
              <v-list-item-title>{{ nav.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <div class="text-center">
          <!-- <v-btn color="primary" href="https://docs.google.com/spreadsheets/d/12pFBzf8bxxktDeKjijDwGxu_zKGrP54q8nIahk8gsh8/edit?usp=drivesdk" target="_blank">Blood Donors</v-btn> -->
          <v-btn
            icon
            fab
            color="#0630BE"
            v-show="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
            @click="showNav = !showNav"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-navigation-drawer>

      <v-main>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-main>

      <v-footer padless class="mt-5">
        <v-card width="100%" class="white grey--text text-center elevation-12">
          <v-card-text>
            <a
              :href="icon.link"
              style="text-decoration: none;"
              v-for="(icon, j) in icons"
              :key="j"
            >
              <v-btn class="grey--text" icon>
                <v-icon size="24px">{{ icon.icon }}</v-icon>
              </v-btn>
            </a>
          </v-card-text>

          <v-card-text class="grey--text pt-0">
            The Rotaract Club of Coimbatore Majestic
            <br />
            <small>Parented by Rotary Club of Coimbatore Midtown</small>
            <br />
            <small>Club Id: 8329 | Group 2 | RID 3201 </small>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="grey--text">
            &#169; Copyright {{ new Date().getFullYear() }} -
            <strong>Rac Cbe Majestic</strong> |
            <a
              href="https://sethupathi.herokuapp.com/"
              style="text-decoration: none;"
              >Developer ❤️ - Rtr.Sethupathi, President 2022-23 </a
            >|
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
    <v-dialog class="modalOver" v-model="dialog" width="300">
      <v-card class="modalOver">
        <!-- <v-card-title class="headline grey lighten-2">
          MBA Orientation Programme Live
        </v-card-title> -->

        <v-card-text>
          <center class="pt-4">
            <v-img :src="recognition" width="100%"></v-img>
          </center>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text class="white--text" @click="dialog = false">
            Close
          </v-btn>
          <!-- <v-btn
            color="primary"
            text
            href="https://vimeo.com/event/452248/embed?autoplay=0&title=0&byline=0&portrait=0"
            target="_blank"
            @click="dialog = false"
          >
            See in fullscreen
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      :bottom="true"
      :color="snackbarcolor"
      :right="true"
      :timeout="timeout"
      v-show="snackbar"
      style="text-transform: uppercase;"
      class="hidden-sm-and-down mr-5 pr-5"
    >
      <p style="white-space: nowrap;" @click="snackbar = false">
        {{ kural.Line1 }}
      </p>
      <p style="white-space: nowrap;">
        {{ kural.Line2 }} - <b>குறள் {{ kural.Number }}</b>
      </p>
    </v-snackbar>
  </div>
</template>

<script>
import logo from "@/assets/HLogo.png";
import logoWhite from "@/assets/logos/logoWhiteLow.png";
import recognition from "./assets/recognitions/1r.jpeg";
import jQuery from "jquery";
import thirukural from "./thirukural.json";

jQuery(document).ready(function () {
  jQuery(function () {
    jQuery(this).bind("contextmenu", function (event) {
      event.preventDefault();
      // alert('oops!! right click is disabled')
    });
  });
});
export default {
  name: "App",
  data: () => ({
    color: "white",

    recognition: recognition,
    showNav: null,
    snackbar: true,
    snackbarcolor: "#0630BE",
    timeout: 20000,
    dialog: true,
    logo: logo,
    logoWhite: logoWhite,
    state: true,
    isLoggedIn: false,
    currentUser: null,
    kural: null,
    icons: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/raccbemajestic3201",
        color: "blue",
      },
      { icon: "mdi-twitter", link: "https://twitter.com/cbe_majestic?s=08" },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/company/rac-cbe-majestic",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/rac_cbe_majestic",
      },
      {
        icon: "mdi-youtube",
        link: "https://www.youtube.com/channel/UClCg1HU_e1Ew8TKFd-h1MtQ",
      },
      { icon: "mdi-email", link: "mailto:raccbemajestic3201@gmail.com" },
    ],
    fixed: false,
    nav: [
      { name: "Home", route: "/" },
      { name: "Events", route: "/events" },
      { name: "Bulletin", route: "/bulletin" },
      // { name: "Our Crew", route: "/ourCrew" },
      // { name: "Avatar", route: "/avatar" },
      // { name: "Weekly Press", route: "/weeklyPress" },
      { name: "Blood Request/Donate", route: "/BloodRequest" },
      {
        name: "Bibliophile Hub",
        href: "https://sites.google.com/view/bibliophile-hub/home",
      },
      { name: "Contact", route: "/contactUs" },
      // { name: "ScrapBook 2020-21", route: "/Scrapbook" },
    ],
  }),
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.state = false;
      }
    };
  },
  created() {
    this.kural =
      thirukural.kural[Math.floor(Math.random() * (1330 - 1 + 1) + 1)];
  },
  methods: {

  },
  computed: {
    cravings: function () {
      return this.$vuetify.breakpoint.name == "xs"
        ? "white grey--text text-center elevation-12"
        : "white grey--text text-right elevation-12";
    },
  },
};
</script>

<style>
.heading {
  font-size: 28px;
  color: #0630be;
  font-family: "Josefin Sans", sans-serif;
}
@media only screen and (max-width: 600px) {
  .logoTop {
    width: 70% !important;
  }
}
.logoTop {
  width: 50%;
}
.text {
  font-size: 16px;
  color: #212529;
  font-family: "Josefin Sans", sans-serif;
  margin-top: 30px;
  text-align: justify;
  line-height: 1.8rem;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#app {
  font-family: "Roboto", sans-serif;
  color-scheme: light only;
}
:root {
  color-scheme: light only;
}
.fullColor {
  background-image: -webkit-linear-gradient(150deg, white 65%, white 25%);
  height: 100%;
  width: 100%;
}
.sidecut {
  background-image: -webkit-linear-gradient(150deg, #0630be 65%, white 25%);
  height: 100%;
  width: 100%;
}
.myHeadingBolder {
  font-family: "Raleway", sans-serif;
  font-weight: 800 !important;
  font-size: 30px;
  text-transform: uppercase !important;
  line-height: 1.2em;
}
.myHeadingLinear {
  font-family: "Raleway", sans-serif !important;
  color: #0630be !important;
  font-weight: 100 !important;
  font-size: 26px;
  text-transform: uppercase !important;
  line-height: 1.2em;
}
.slideBolder {
  font-family: "Raleway", sans-serif !important;
  color: #0630be !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
}
.myText {
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  text-align: justify;
}
.mySecondary {
  font-size: 18px;
  font-family: "Raleway", sans-serif !important;
  text-transform: uppercase;
  color: #25292f;
  font-weight: 700;
}
.header {
  color: #0630be;
  font-family: "Raleway", sans-serif;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 1.5px;
}
.border {
  border: 1px solid rgb(182, 177, 177);
  border-radius: 5px;
}

.disableselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge*/
  user-select: none; /* Non-prefixed version, currentl not supported by any browser */
}
.VueCarousel-pagination[data-v-438fd353] {
  cursor: not-allowed;
}
.VueCarousel-dot[data-v-438fd353] {
  cursor: not-allowed;
}
@media only screen and (max-width: 600px) {
  .VueCarousel-pagination[data-v-438fd353] {
    display: none;
  }
}
</style>

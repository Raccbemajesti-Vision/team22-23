<template>
  <div>
    <!-- <div class="bloodDrop">
      <div class="drop"></div>
      <div class="wave"></div>
    </div> -->
    <v-container class="border pa-4 mb-2 mt-5">
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex md4 xs12 class="hidden-md-and-up pb-5">
          <center>
            <v-img :src="contactuslogo" width="40%"></v-img>
          </center>
        </v-flex>
        <v-flex md8 xs12 px-5>
          <div class="myHeadingBolderAvatar">
            <span class="myHeadingLinearAvatar"
              >Rotaract Blood Donors Cell- RID 3201</span
            >
          </div>
          <div class="mySecondary">
            Need Blood ?
            <br />
            Wish to Donate ?
          </div>
          <div class="myHeadingBolderAvatarOne">
            Just contact Rotaract Blood Donors Cell through
            <br />
            <span style="color: #0630be;">+91 7708543201</span>
          </div>
        </v-flex>
        <v-flex md4 xs12 class="hidden-sm-and-down">
          <v-img :src="contactuslogo" width="50%"></v-img>
        </v-flex>

        <!-- <video src=""></video> -->
        <video width="400" autoplay muted loop>
          <source
            src="https://milestone-makers.github.io/api.milestonemaker/blood.m4v"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
        <!-- <v-flex my-5>
          <center>
            <v-btn
              color="#0630BE"
              class="white--text"
              @click="dialog = !dialog"
            >
              Contact us
            </v-btn>
          </center>
        </v-flex> -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import contactus from "@/assets/blood.png";

export default {
  components: {},
  data() {
    return {
      value1: "",
      value: "",
      valueother: "",
      snackbar: false,
      other: this.valueother == "Others" ? true : false,
      valid: true,
      text: "submit",
      show: true,
      timeout: 8000,
      timeoutstatus: 0,
      contactuslogo: contactus,
      checknetwork: true,
      name: "",
      nameRules: [(v) => !!v || "Required field"],
      status: true,
      phoneRules: [
        (v) => !!v || "Name is required",
        (v) =>
          (v && v.length <= 10) || "Number must be less than 10 characters",
      ],
      items: ["Friend", "Google", "Social media", "News Article", "Others"],
    };
  },
  mounted() {
    document.title = "Rotract | Blood";
    this.status = navigator.onLine;
    window.addEventListener("offline", () => {
      this.status = false;
    });
    window.addEventListener("online", () => {
      this.status = true;
    });
  },
  updated() {
    if (this.valueother == "Others") {
      this.other = true;
    } else {
      this.other = false;
    }
  },
  methods: {
    callme() {
      this.text = "submit";
      this.snackbar = true;
      this.show = false;
    },
    callme1() {
      this.text = "submit";
      this.snackbar = false;
      this.$refs.form.reset();
      this.show = true;
    },
    callme2() {
      this.show = true;
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.myheading {
  font-size: 28px;
  color: #0630be;
  font-family: "Josefin Sans", sans-serif;
}

.bloodDrop {
  top: 0%;
  /* background-color: #000; */
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 90vh;

  /* display: flex; */
}

.bloodDrop div {
  margin: 175px auto;
}

.myHeadingBolderAvatar {
  font-family: "Raleway", sans-serif;
  font-weight: 800 !important;
  font-size: 20px;
  text-transform: uppercase !important;
  line-height: 1.2em;
}
.myHeadingBolderAvatarOne {
  font-family: "Raleway", sans-serif;
  font-weight: 800 !important;
  font-size: 15px;
  text-transform: uppercase !important;
  line-height: 2em;
}
.myHeadingLinearAvatar {
  font-family: "Raleway", sans-serif !important;
  color: #0630be !important;
  font-weight: 500 !important;
  font-size: 25px;
  text-transform: uppercase !important;
  line-height: 1.2em;
}
.myTextAvatar {
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
}
.mySecondary {
  font-size: 26px;
  font-family: "Raleway", sans-serif !important;
  text-transform: uppercase;
  color: #25292f;
  font-weight: 700;
}

.drop {
  position: relative;
  width: 20px;
  height: 20px;
  top: -30px;
  margin: 0 auto;
  background: #f00;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  -moz-animation-name: drip;
  -webkit-animation-name: drip;
  animation-name: drip;
  -moz-animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
  -webkit-animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
  animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
  -moz-animation-duration: 2s;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.drop:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 30px solid rgba(255, 0, 0, 1);
  top: -22px;
}

.wave {
  position: relative;
  opacity: 0;
  top: 0;
  width: 2px;
  height: 1px;
  border: #f00 7px solid;
  -moz-border-radius: 300px / 150px;
  -webkit-border-radius: 300px / 150px;
  border-radius: 300px / 150px;
  -moz-animation-name: ripple;
  -webkit-animation-name: ripple;
  animation-name: ripple;
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -moz-animation-duration: 2s;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.wave:after {
  content: "";
  position: absolute;
  opacity: 0;
  top: -5px;
  left: -5px;
  width: 2px;
  height: 1px;
  border: #f00 5px solid;
  -moz-border-radius: 300px / 150px;
  -webkit-border-radius: 300px / 150px;
  border-radius: 300px / 150px;
  -moz-animation-name: ripple-2;
  -webkit-animation-name: ripple-2;
  animation-name: ripple-2;
  -moz-animation-duration: 2s;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@keyframes ripple {
  from {
    opacity: 1;
  }
  to {
    width: 600px;
    height: 300px;
    border-width: 1px;
    top: -100px;
    opacity: 0;
  }
}

@keyframes ripple-2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    width: 200px;
    height: 100px;
    border-width: 1px;
    top: 100px;
    left: 200px;
  }
}

@keyframes drip {
  to {
    top: 190px;
  }
}
</style>

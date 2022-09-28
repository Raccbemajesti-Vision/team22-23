<template>
  <div>
    <center>
      <div class="my-5 py-2" v-if="$route.path.split('/')[1] == 'Bulletin'">
        <span class="myHeadingBolder">Bulletin</span>
        <span class="myHeadingLinear">{{ $route.path.split("/")[2] }} </span>
      </div>
      <div class="my-5 py-2" v-else>
        <span class="myHeadingBolder">Event</span>
        <span class="myHeadingLinear">Book</span>
      </div>
    </center>

    <div
      v-if="pages.length > 0"
      id="bookbookApp"
      :class="{ 'has-mouse': hasMouse }"
      @touchstart="hasMouse = false"
    >
      <Flipbook
        class="flipbook"
        :pages="[null, ...pages]"
        :pagesHiRes="pagesHiRes"
        :startPage="pageNum"
        ref="flipbook"
        :clickToZoom="true"
        @flip-left-start="onFlipLeftStart"
        @flip-left-end="onFlipLeftEnd"
        @flip-right-start="onFlipRightStart"
        @flip-right-end="onFlipRightEnd"
      >
      </Flipbook>
      <div id="slider_container_one">
        <div id="slider_container">
          <!-- <RightIcon id="hdd" class="pr-5"/> -->
          <input
            id="inputSlider"
            class="slide_input"
            type="range"
            min="1"
            :max="pages.length"
            step="1"
            disabled
            value="1"
            @input="range_slider_input()"
          />
          <!-- <input id="customInput" value="1" type="number" @change="custom_input()"> -->
          <h3 style="font-size: 20px; font-weight: 400;">
            {{ pageNum }}/{{ pages.length }}
          </h3>
          <FullIcon id="fullScreen" class="pr-5" @click="full" />
        </div>
      </div>
      <center><small>Use fullscreen for better experience</small></center>
    </div>
    <center v-else>
      <img :src="dev" width="50%" />
    </center>

    <!-- <center><small>Use fullscreen for better experience</small></center> -->
  </div>
</template>

<script>
import axios from "axios";
import "vue-material-design-icons/styles.css";
import FullIcon from "vue-material-design-icons/Fullscreen.vue";
import Flipbook from "flipbook-vue";
import "vue-slider-component/theme/antd.css";
import dev from "../assets/dev.gif";

export default {
  name: "bookApp",
  components: {
    Flipbook,
    // RightIcon,
    FullIcon,
  },
  data() {
    return {
      dev: dev,
      pages: [],
      pagesHiRes: [],
      hasMouse: true,
      pageNum: null,
      label: "track-color",
      value: 75,
      color: "green lighten-1",
      fullScreen: 0,
    };
  },

  watch: {
    $route(newQuery, oldQuery) {
      console.log({ oldQuery, newQuery });
      this.$router.go({ path: this.$route.path });
      //   this.$router.push('/search/' + newQuery) //This code executes but no change visible on screen.
    },
  },
  methods: {
    onFlipLeftStart: (page) => {
      console.log("flip-left-start", page);
    },
    onFlipLeftEnd(page) {
      //   console.log("flip-left-end", page);
      // window.location.hash = '#' + page
      // var custom_input = document.getElementById("customInput");
      // custom_input.value = page;

      var slider = document.getElementById("inputSlider");
      slider.value = page;
      this.pageNum = page;
    },
    onFlipRightStart: (page) => {
      console.log("flip-right-start", page);
    },
    onFlipRightEnd(page) {
      //   console.log("flip-right-end", page);
      // window.location.hash = '#' + page
      // var custom_input = document.getElementById("customInput");
      // custom_input.value = page;

      var slider = document.getElementById("inputSlider");
      slider.value = page;
      this.pageNum = page;
    },
    // setPageFromHash() {
    //     let n = parseInt(window.location.hash.slice(1), 10);
    //     if (isFinite(n)) {
    //         this.pageNum = n;
    //     } else {
    //         this.pageNum = 0;
    //     }
    // },
    // importAll() {
    //   let a = [];
    //   // r.keys().forEach((_, i) => (a.push(r(`./${i}.jpg`))));
    //   for (let i = 0; i < 186; i++) {
    //     a.push(
    //       `https://milestone-makers.github.io/api.milestonemaker/ScrapBook/${i}.jpg`
    //     );
    //   }
    //   this.pages = [...a];
    // },

    range_slider_input() {
      var slider = document.getElementById("inputSlider");
      this.pageNum = slider ? +slider.value : 1;
      // var custom_input = document.getElementById("customInput");
      // console.log({
      //     custom_input
      // });
      // if (custom_input) {
      //     custom_input.value = slider.value ? slider.value : '1'

      // }
    },

    // custom_input() {
    //     var custom_input = document.getElementById('customInput')
    //     var slider = document.getElementById("inputSlider");
    //     console.log(slider);
    //     if (slider)
    //         slider.value = custom_input.value ? custom_input.value : '1'
    // },
    full() {
      var elem = document.getElementById("bookbookApp");
      if (this.fullScreen) {
        // it's fullscreen!
        const eleme = document.getElementById("slider_container_one");
        eleme.style.bottom = "0px";

        this.fullScreen = 0;
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen();
        }
      } else {
        this.fullScreen = 1;
        // not fs!

        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE11 */
          elem.msRequestFullscreen();
        }
      }
    },

    update(month) {
      if (this.$route.path.split("/")[1] == "Bulletin") {
        let url = "https://raccbemajesti-vision.github.io/api.vision/Bulletin/";
        axios.get(url).then((res) => {
          let details = {
            view: this.$route.path,
            no: 0,
          };
          res.data.data.forEach((a) => {
            if (a.view.split("/")[2] == month)
              details = {
                view: this.$route.path,
                no: a.total,
              };
          });
          console.log({ details });
          let a = [];
          // r.keys().forEach((_, i) => (a.push(r(`./${i}.jpg`))));
          for (let i = 1; i <= details.no; i++) {
            a.push(
              `https://raccbemajesti-vision.github.io/api.vision${details.view}/${i}.jpg`
            );
          }
          this.pages = [...a];
        });
      } else {
        let url = "https://raccbemajesti-vision.github.io/api.vision/Events/";
        axios.get(url).then((res) => {
          console.log(res.data.data.count);
          let a = [];
          // r.keys().forEach((_, i) => (a.push(r(`./${i}.jpg`))));
          for (let i = 0; i <= res.data.data.count; i++) {
            a.push(
              `https://raccbemajesti-vision.github.io/api.vision/Events/Images/${i}.jpeg`
            );
          }
          let lastPage = `https://raccbemajesti-vision.github.io/api.vision/Events/Images/end.jpeg`;
          this.pages = [...a, lastPage];
        });
      }
    },
  },
  mounted() {
    if (this.$route.path.split("/")[1] == "Bulletin") {
      // console.log();
      this.update(this.$route.path.split("/")[2]);
    } else {
      this.update(this.$route.path.split("/")[2]);
    }
    this.range_slider_input();
    // this.custom_input();
    // window.addEventListener ('hashchange', this.setPageFromHash);
    // this.setPageFromHash();

    // var Draggable = require('draggable');
    // var element = document.getElementById('slider_container_one');
    // var hd = document.getElementById('hdd');
    // let option = {
    //     handle: hd
    // }
    // new Draggable(element, option);
  },
};
</script>

<style>
.slide_input {
  height: 2px;
  width: 83% !important;
  outline: none;
}

input[type="range"] {
  -webkit-appearance: none;
  background: rgb(240, 240, 240);
}

#somehting {
  position: relative;
  height: 100vh;
  background: #ccc;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background-color: #eb5310;
  border-radius: 100px;
}

#hdd {
  font-size: 30px;
  opacity: 0.5;
  margin: 10px;
  color: #eb5310;
  cursor: all-scroll;
  bottom: 2px;
}

#fullScreen {
  font-size: 30px;
  margin: 10px;
  color: #eb5310;
  cursor: pointer;
  bottom: 2px;
}

@media only screen and (max-width: 600px) {
  #hdd {
    font-size: 25px;
    opacity: 0.5;
    margin-right: 10px;
    color: #eb5310;
    cursor: all-scroll;
    bottom: 2px;
  }

  #slider_container_one {
    z-index: 9;
    height: 20vh;
    /* position: absolute; */
    width: 100% !important;
    /* bottom: 0; */
  }

  #slider_container {
    height: fit-content;
    width: 90% !important;
  }

  #customInput {
    height: 50px;
    width: 25% !important;
  }

  #bookbookApp {
    height: 55vh !important;
  }
}

#slider_container_one {
  z-index: 9;
  height: 20vh;
  width: 50%;
}

#slider_container {
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.11) !important;
  border-radius: 5px;
  padding: 0px 10px;
  font-family: monospace;
  background: white;
  /* position:absolute; */
  inset: 0;
  margin: auto;
}

.slider_value_markes {
  height: 20px;
  width: 2px;
  background-color: black;
  border-radius: 100px 0px;
  position: absolute;
  left: 0%;
}

#customInput {
  height: 50px;
  width: 9%;
  border: none;
  border-left: solid 2px rgb(240, 240, 240);
  margin: 5px 0px 5px 10px;
  outline: none;
  font-size: 20px;
  padding: 0px 10px;
  text-align: center;
}

#customInput::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

#bookbookApp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #ccc;
  position: relative;
}

.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-bar .btn {
  font-size: 30px;
  color: #999;
}

.action-bar .btn svg {
  bottom: 0;
}

.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}

.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}

.action-bar .btn:active {
  filter: none !important;
}

.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}

.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}

.flipbook {
  width: 90vw;
  height: 80vh;
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

.credit {
  font-size: 12px;
  line-height: 20px;
  margin: 10px;
}
</style>

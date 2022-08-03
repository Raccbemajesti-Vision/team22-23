<template>
  <div class="home">
    <Front></Front>

    <!-- <v-carousel
      cycle
      height="80vh"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :src="slide.image" :key="i">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3 mx-2" v-html="slide.name"></div>
        </v-row>
      </v-carousel-item>
    </v-carousel> -->
    <center>
      <div>
        <span class="myHeadingBolder">About</span>
        <span class="myHeadingLinear">Us</span>
      </div>
    </center>
    <!-- <v-layout row wrap py-5>
      <v-flex xs12 md12>

      </v-flex>
      <v-flex xs12 md12>
        <v-layout py-5 row wrap> -->
    <!-- <v-flex xs12 md4 align-self-center justify-center>
            <center>
              <v-img :src="logo" contain width="70%"></v-img>
            </center>
          </v-flex> -->
    <!-- <v-flex xs12 md8 px-5 align-self-center> -->
    <p class="myText mx-5 my-3 grey lighten-2 py-5 px-3">
      The Rotaract Club of Coimbatore Majestic, parented by The Rotary Club of
      Coimbatore Midtown was Chartered on 5th of May in 1991. The Charter
      President was Rtr.PP.Geeta Lakshmi. Our Club has produced 3 Majestic
      District Rotaract Representative in the history of Rotary International
      District 3201 namely Rtr.PP.Mohammad Nasar, Rtr.PP. Vineesh, Rtr.PP.Jimry
      Henry. It served the community well throughout its existence of 28 years
      and counting. The Club has been active ever since and it is continuously
      supporting the community and indulged in developing the professional
      career of the fellow club members. The Rotaract Club of Coimbatore Comito,
      the Rotaract Club of PSGCAS and the Rotaract Club of SRCAS are the sister
      clubs with whom we have maintained a constant healthy bond. This year, our
      Club is stepping into the 29th year of service to the society.
    </p>

    <!-- </v-flex> -->
    <!-- </v-layout>
      </v-flex>
    </v-layout> -->

    <v-layout class="py-5 px-5" align-center justify-center wrap>
      <v-flex xs12 md12 text-center>
        <div>
          <span class="myHeadingBolder">Our</span>
          <span class="myHeadingLinear">Highlights</span>
        </div>
      </v-flex>
      <v-flex xs12 md12 mt-5>
        <v-layout>
          <v-flex xs12 md6 class="hidden-sm-and-down">
            <v-carousel
              cycle
              height="50vh"
              hide-delimiter-background
              hide-delimiters
              :show-arrows="false"
            >
              <v-carousel-item
                v-for="(slide, i) in slides"
                :src="slide.image"
                :key="i"
              >
                <v-row class="fill-height" align="end" justify="start">
                  <div
                    v-html="slide.name"
                    style="background: white; padding: 3px 3px 3px 20px;"
                  ></div>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
          <v-flex xs12 md6>
            <v-carousel
              cycle
              :height="
                $vuetify.breakpoint.sm || $vuetify.breakpoint.xs
                  ? '25vh'
                  : '50vh'
              "
              hide-delimiter-background
              hide-delimiters
              :show-arrows="false"
            >
              <v-carousel-item
                v-for="(slide, i) in Rslides"
                :src="slide.image"
                :key="i"
              >
                <v-row class="fill-height" align="end" justify="start">
                  <div
                    v-html="slide.name"
                    style="background: white; padding: 3px 3px 3px 20px;"
                  ></div>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
        <!-- <v-layout align-center justify-center row wrap>
            <v-flex xs12 md4 py-3 v-for="(whywe,i) in whywe" :key="i">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="elevation-16 mx-auto pa-2"
                  color="grey lighten-4"
                  max-width="250"
                  height="170"
                  style="border-radius:10px"
                >
                  <v-img height="155" max-width="250" object-fit :src="whywe.logo">
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out  v-card--reveal display-2 white--text"
                        style="height: 100%;"
                      >{{ whywe.name }}</div>
                    </v-expand-transition>
                    <template v-slot:placeholder>
                <v-layout align-center justify-center fill-height>
                  <v-progress-circular indeterminate color="#F60044"></v-progress-circular>
                </v-layout>
              </template>
                  </v-img>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout> -->
      </v-flex>
    </v-layout>

    <center>
      <div class="my-5 py-2">
        <span class="myHeadingBolder">President</span>
        <span class="myHeadingLinear">Desk</span>
      </div>
    </center>

    <v-layout
      style="background-color: #f6af8f;"
      class="mx-5 px-3"
      align-center
      justify-center
      row
      wrap
    >
      <v-flex xs12 md2 text-xs-center>
        <center>
          <img
            :src="sethu"
            width="80%"
            class="ma-1"
            style="border: 4px solid white;"
          />
        </center>
      </v-flex>
      <v-flex xs12 md10>
        <div class="mx-5 my-3 #0630BE py-5 px-3">
          <h3>Rtr. Sethupathi.P</h3>
          <p class="myText" style="color: black;">
            "Little drops of water make a mighty ocean" In reflection on the
            above quote, I started my Rotaract Journey in 2020 as a
            sergeant-at-arms. Rtr. PP. Logeshwaran introduced me to the Rotaract
            Club of Coimbatore Majestic. In such a way I travelled like an
            ordinary person without any knowledge about Rotaract. After
            Orientation in the dream year, I came to know something about
            Rotaract. With that knowledge, I continued. Then I have been
            selected as a secretary in Rtr. IPP. Aarthi's board. It was such an
            Impactful year with a huge milestone. My part in the District
            Conference 21-22 "Elite" gave me a lot of knowledge, connection with
            other Rotaractors etc. Without any doubt, I can say that I've been
            recognised as the best secretary only because I worked under the
            guidance of one of the best secretaries in the Rotary year 19-20.
            She is always my best president! After that to fulfil my little
            dream, I decided to lead a Club with 30 years of Legacy with the
            youngest and the newest team. Last but not the least, I would like
            to thank Rtr. Arshad anna for his support all the time!! Let's
            together Celebrate Rotaract!
          </p>
        </div>
      </v-flex>
    </v-layout>
    <!-- <v-layout column wrap py-5>
      <v-flex xs12 md12>
        <center>
          <div>
            <span class="myHeadingBolder">Upcomming</span>
            <span class="myHeadingLinear">Events</span>
          </div>
        </center>
      </v-flex>
      <v-flex xs12 md12 mt-5>
        <v-layout wrap align-center justify-center>
          <v-flex xs12 md4 v-for="(event, i) in events" :key="i" py-2>
            <Eventcard :event="event" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md12 py-5>
        <center>
          <v-btn
            color="#0630BE"
            class="white--text"
            @click="$router.push('/meetups')"
          >
            All Events
          </v-btn>
        </center>
      </v-flex>
    </v-layout> -->
    <div class="my-5"></div>
    <Bulletin />
    <v-layout class="grey lighten-2 py-5 px-3" align-center justify-center wrap>
      <v-flex xs12 md4 my-3>
        <div style="display: flex; justify-content: center;">
          <div style="border: 1px solid white;" class="mr-5" />
          <center>
            <div class="count">
              25+ members
            </div>
          </center>
          <div style="border: 1px solid white;" class="ml-5" />
        </div>
      </v-flex>

      <v-flex xs12 md4 my-3>
        <div style="display: flex; justify-content: center;">
          <div style="border: 1px solid white;" class="mr-5" />
          <center>
            <div class="count">
              30 past presidents
            </div>
          </center>
          <div style="border: 1px solid white;" class="ml-5" />
        </div>
      </v-flex>

      <v-flex xs12 md4 my-3>
        <div style="display: flex; justify-content: center;">
          <div style="border: 1px solid white;" class="mr-5" />
          <center>
            <div class="count">
              3 DRR<span style="text-transform: lowercase;">s</span>
            </div>
          </center>
          <div style="border: 1px solid white;" class="ml-5" />
        </div>
      </v-flex>
    </v-layout>

    <center>
      <div class="mt-5 py-2">
        <span class="myHeadingBolder">Majestic</span>
        <span class="myHeadingLinear">Legends</span>
      </div>
    </center>

    <v-layout align-center justify-space-around row wrap mx-4>
      <v-flex v-for="(i, j) in legends" :key="j" ma-2>
        <center>
          <div class="Avatarcontainer">
            <div class="auth_img">
              <img :src="i.photo" loading="lazy" />
            </div>
          </div>
          <div class="avatarName">
            Rtr. {{ i.name == "Logeshwaran VT" ? "IPP" : "PP" }}. {{ i.name }}
          </div>
          <div class="myTextAvatar">{{ i.year }}</div>
        </center>
      </v-flex>
    </v-layout>

    <center>
      <div class="mt-5 py-2">
        <span class="myHeadingBolder">Majestic</span>
        <span class="myHeadingLinear"
          >Drr<span style="text-transform: lowercase;">s</span></span
        >
      </div>
    </center>

    <v-layout align-center justify-space-around row wrap mx-4>
      <v-flex v-for="(i, j) in drr" :key="j" ma-2>
        <center>
          <div class="Avatarcontainer">
            <div class="auth_img">
              <img :src="i.photo" loading="lazy" />
            </div>
          </div>
          <div class="avatarName">Rtr. PP. {{ i.name }}</div>
          <div class="myTextAvatar">{{ i.year }}</div>
        </center>
      </v-flex>
    </v-layout>

    <!-- <v-layout column wrap py-5>
        <v-flex xs12 md12>
            <center>
                <div>
                    <span class="myHeadingBolder">Leaders</span>
                    <span class="myHeadingLinear">Message</span>
                </div>
            </center>
        </v-flex>
        <v-flex xs12 md12 mt-5>
            <carousel paginationActiveColor="#0630BE" paginationColor="black" :perPageCustom="[
            [300, 1],
            [768, 2],
            [800, 3],
            [1224, 4],
          ]" :mouse-drag="true" :autoplay="true" loop :paginationEnabled="true" :centerMode="true">
                <slide v-for="(i, j) in teamSlides" :key="j" class="pa-3">
                    <SlideCard :i="i" />
                </slide>
            </carousel>
        </v-flex>
    </v-layout> -->
  </div>
</template>

<script>
import logo from "@/assets/logos/girllogo.png";
// import {
//     Carousel,
//     Slide
// } from "vue-carousel";
// import Eventcard from "./eventCard";
import Bulletin from "./bulletin.vue";
// import SlideCard from "./slideCard";
import Front from "./front.vue";
import toteach from "@/assets/logos/toteach.svg";
import tohelp from "@/assets/logos/tohelp.svg";
import tobuild from "@/assets/logos/tobuild.svg";
import sethu from "@/assets/Picture/aarthi.jpeg";
import aarthi from "@/assets/Picture/aarthi-old.jpeg";
import amit from "@/assets/legends/amit.png";
import anup from "@/assets/legends/Anup.png";
import g2014 from "@/assets/legends/2014.jpg";
import elakiya from "@/assets/legends/elakiya.jpg";
import franklin from "@/assets/legends/franklin.jpg";
import govind from "@/assets/legends/govind.png";
import karika from "@/assets/legends/karika.jpeg";
import karthick from "@/assets/legends/karthick.png";
import laxman from "@/assets/legends/laxman.jpg";
import praveen from "@/assets/legends/praveent.jpeg";
import mayank from "@/assets/legends/Mayank.png";
import nazer from "@/assets/legends/nazer.png";
import pranay from "@/assets/legends/pranay.png";
import rakesh from "@/assets/legends/rakesh.png";
import ritish from "@/assets/legends/ritish.jpg";
import saishankar from "@/assets/legends/saishankar.png";
import logesh from "@/assets/legends/logesh.jpeg"
import sandeep from "@/assets/legends/sandeep.png";
import shankit from "@/assets/legends/shankit.png";
import viensh from "@/assets/legends/vinesh.png";
import vivek from "@/assets/legends/Vivek.png";
import mohan from "@/assets/legends/mohan.jpeg";
import sammu from "@/assets/legends/sammu.jpeg";

import jimry from "@/assets/drr/jimry.jpg";
import noFoto from "@/assets/logo.png";

export default {
  components: {
    // Carousel,
    // Slide,
    // // Eventcard,
    // SlideCard,
    Bulletin,
    Front,
  },
  data() {
    return {
      whywe: [
        {
          name: "To Teach",
          logo: toteach,
        },
        {
          name: "To Help",
          logo: tohelp,
        },
        {
          name: "To Build",
          logo: tobuild,
        },
      ],
      sethu: sethu,
      window: {
        width: 0,
        height: 0,
      },
      pageNum: null,
      duration: 2000,
      perPage: 3,
      logo: logo,
      events: [],
      teamSlides: [],
      slides: [],
      Rslides: [],
      legends: [
        {
          name: "Geeta Lakshmi",
          year: "1991-92",
          photo: noFoto,
        },
        {
          name: "Santha Kumar",
          year: "1992 - 93",
          photo: noFoto,
        },
        {
          name: "MD. Nassar",
          year: "1993 - 94",
          photo: nazer,
        },
        {
          name: "Mahadevan",
          year: "1994 - 95",
          photo: noFoto,
        },
        {
          name: "Srihari",
          year: "1995 - 96",
          photo: noFoto,
        },
        {
          name: "Sai Shankar",
          year: "1996 - 97",
          photo: saishankar,
        },
        {
          name: "Mustafa",
          year: "1997 - 98",
          photo: noFoto,
        },
        {
          name: "Lakshmi",
          year: "1998 - 99",
          photo: noFoto,
        },
        {
          name: "Vinesh",
          year: "1999 - 00",
          photo: viensh,
        },
        {
          name: "Amit",
          year: "2000 - 01",
          photo: amit,
        },
        {
          name: "Ritesh",
          year: "2001 - 02",
          photo: ritish,
        },
        {
          name: "Govind",
          year: "2002 - 03",
          photo: govind,
        },
        {
          name: "Rakesh",
          year: "2003 - 04",
          photo: rakesh,
        },
        {
          name: "Karthick",
          year: "2004 - 05",
          photo: karthick,
        },
        {
          name: "Anup",
          year: "2005 - 06",
          photo: anup,
        },
        {
          name: "Shankit",
          year: "2006 - 07",
          photo: shankit,
        },
        {
          name: "Vivek",
          year: "2007 - 08",
          photo: vivek,
        },
        {
          name: "Mayank",
          year: "2008 - 09",
          photo: mayank,
        },
        {
          name: "Pranay",
          year: "2009 - 10",
          photo: pranay,
        },
        {
          name: "Sandeep Lunia",
          year: "2010 - 11",
          photo: sandeep,
        },
        {
          name: "Laxman",
          year: "2012 - 13",
          photo: laxman,
        },
        {
          name: "Franklin Thambi",
          year: "2013 - 14",
          photo: franklin,
        },
        {
          name: "Elakkiya",
          year: "2014 - 15",
          photo: elakiya,
        },
        {
          name: "Jeni Feona",
          year: "2015 - 16",
          photo: g2014,
        },
        {
          name: "Karthika Nair",
          year: "2016 - 17",
          photo: karika,
        },
        {
          name: "Praveen Thiyagarajan",
          year: "2017 - 18",
          photo: praveen,
        },
        {
          name: "Mohana Aravind",
          year: "2018 - 19",
          photo: mohan,
        },
        {
          name: "Samruthika",
          year: "2019 - 20",
          photo: sammu,
        },
        {
          name: "Logeshwaran VT",
          year: "2020 - 21",
          photo: logesh,
        },
        {
          name: "Aarthi N",
          year: "2021 - 22",
          photo: aarthi,
        },
      ],
      drr: [
        {
          name: "MD.Nassar",
          year: "1997 - 98",
          photo: nazer,
        },
        {
          name: "Vinesh Kumar",
          year: "2005 - 06",
          photo: viensh,
        },
        {
          name: "Jimry Henry",
          year: "2014 - 15",
          photo: jimry,
        },
      ],
    };
  },
  mounted() {
    document.title = "Rac Cbe Majestic | Home";
    this.handleResize();
    this.importAll(require.context("../assets/carosal", true, /\.jpeg$/));
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    importAll(r) {
      let a = [];
      let quote = [
        'முதற்படி<span class="slideBolder">Orientation</span>',
        'மனமகிழ்<span class="slideBolder">Phase-1</span>',
        'முதற்படி<span class="slideBolder">Orientation</span>',
        'முதற்படி<span class="slideBolder">Orientation</span>'
      ];
      r.keys().forEach((key, i) =>
        a.push({
          name: quote[i],
          image: r(key),
        })
      );
      this.slides = [...a];
      this.Rslides = a.reverse();
    },

    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (this.window.width <= 750) {
        this.perPage = 1;
      } else if (this.window.width <= 1000) {
        this.perPage = 2;
      } else {
        this.perPage = 3;
      }
    },
  },
};
</script>

<style scoped>
.avatarName {
  font-family: "Raleway", sans-serif !important;
  color: #0630be !important;
  font-weight: 500 !important;
  font-size: 16px;
}

.myTextAvatar {
  font-size: 15px;
  font-family: "Roboto", sans-serif;
}

.mySecondary {
  font-size: 18px;
  font-family: "Raleway", sans-serif !important;
  text-transform: uppercase;
  color: #25292f;
  font-weight: 700;
}

/* .avatarName */

.Avatarcontainer {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.Avatarcontainer .auth_img {
  border: 5px solid white;
  border-radius: 20px;
  overflow: hidden;
  height: 150px;
  background: white;
  box-shadow: 16px 16px 40px rgba(133, 129, 129, 0.333), -16px -16px 34px #0001;
  /* transform: rotate(0deg); */
  transition: all 0.2s ease-in-out;
}

.Avatarcontainer .auth_img img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  /* transform: scale(1.15); */
  transition: all 0.2s ease-in-out;
}

.count {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  color: #0630be;
  font-weight: 600;
  letter-spacing: 1.5px;
}

.flipbook {
  width: 90vw;
  height: 90vh;
  background: #0630be;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  background: #0630be;
}

.headerDown {
  padding: 0;
  margin: 0;
}

.center {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center h1 {
  color: rgba(255, 0, 0, 0.1);
  font-size: 100px;
  text-transform: uppercase;
  font-weight: 700;
  background-size: cover;
  background-image: url(https://cdn-images-1.medium.com/max/2000/1*Jalb56N34pBIGCjQULtW3A.jpeg);
  -webkit-background-clip: text;
  animation: background-text-animation 15s linear infinite;
}

@keyframes background-text-animation {
  0% {
    background-position: left 0px top 50%;
  }

  50% {
    background-position: left 1500px top 50%;
  }

  100% {
    background-position: left 0px top 50%;
  }
}
</style>

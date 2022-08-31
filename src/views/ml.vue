<template>
  <div>
    <center>
      <div class="my-5">
        <span class="myHeadingBolder">Majestic</span>
        <span class="myHeadingLinear">Legends</span>
      </div>
    </center>
    <v-container class="border pa-4 mb-2 mt-5">
      <v-layout align-center justify-space-around row wrap mx-4>
        <v-flex v-for="(i, j) in legends" :key="j" ma-2>
          <center>
            <div class="Avatarcontainer">
              <div class="auth_img">
                <img :src="i.photo" loading="lazy" />
              </div>
            </div>
            <div class="avatarName">
              Rtr. {{ i.name == "Aarthi N" ? "IPP." : i.name == "Sethupathi P" ? "" : "PP." }} {{ i.name }}
            </div>
            <div class="myTextAvatar">{{ i.year }}</div>
          </center>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import logo from "@/assets/logos/contact.svg";
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
import logesh from "@/assets/legends/logesh.jpeg";
import sandeep from "@/assets/legends/sandeep.png";
import shankit from "@/assets/legends/shankit.png";
import viensh from "@/assets/legends/vinesh.png";
import vivek from "@/assets/legends/Vivek.png";
import mohan from "@/assets/legends/mohan.jpeg";
import sammu from "@/assets/legends/sammu.jpeg";
import noFoto from "@/assets/logo.png";

export default {
  data() {
    return {
      logo: logo,
      dialog: false,
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
        {
          name: "Sethupathi P",
          year: "2022 - 23",
          photo: sethu,
        },
      ],
    };
  },
  mounted() {
    document.title = "Rac Cbe Majestic | Contact Us";
  },
};
</script>

<style scoped>
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
  font-size: 30px;
  font-family: "Raleway", sans-serif !important;
  text-transform: uppercase;
  color: #25292f;
  font-weight: 700;
}


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

</style>

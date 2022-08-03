<template>
  <div>
    <center>
      <div class="my-5">
        <span class="myHeadingBolder">Our</span>
        <span class="myHeadingLinear">Crew</span>
      </div>
    </center>

    <v-container class="border pa-4">
      <div v-for="(i, j) in crew" :key="j">
        <center>
          <div class="myHeadingLinearAvatar">
            {{ i.title }}
          </div>
        </center>
        <div class="myTextAvatar my-5">
          <center>
            {{ i.heading }}
          </center>
        </div>
        <v-layout align-center justify-space-around row wrap>
          <v-flex v-for="(i, j) in i.members" :key="j" ma-5>
            <center>
              <div class="Avatarcontainer">
                <div class="auth_img">
                  <img :src="i.img ? i.img : logo" loading="lazy" />
                </div>
              </div>
              <div class="avatarName">{{ i.name }}</div>
              <div class="myTextAvatar">Desginamtion</div>
              <a
                :href="i.linkId"
                style="text-decoration: none; color: blue;"
                target="_blank"
                v-if="i.linkId !== ''"
              >
                <v-btn class="red--text" icon>
                  <v-icon size="24px">mdi-instagram</v-icon>
                </v-btn>
              </a>
            </center>
          </v-flex>
        </v-layout>
        <hr class="my-3" />
      </div>
    </v-container>
  </div>
</template>

<script>
import logo from "@/assets/logos/girllogo.png";
export default {
  data() {
    return {
      crew: [],
      logo: logo,
    };
  },
  mounted() {
    document.title = "Rac Cbe Majestic | Contact Us";
    this.update();
  },
  methods: {},
};
</script>

<style scoped>
.myHeadingBolderAvatar {
  font-family: "Raleway", sans-serif;
  font-weight: 800 !important;
  font-size: 25px;
  text-transform: uppercase !important;
  line-height: 1.2em;
}
.myHeadingLinearAvatar {
  font-family: "Raleway", sans-serif !important;
  color: #0630be !important;
  font-weight: 500 !important;
  font-size: 20px;
  text-transform: uppercase !important;
  line-height: 1.2em;
}
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
  background: #c2c2c2;
  box-shadow: 16px 16px 40px rgba(133, 129, 129, 0.333), -16px -16px 34px #0001;
  transform: rotate(0deg);
  transition: all 0.2s ease-in-out;
}
.Avatarcontainer .auth_img img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  transform: rotate(10deg) scale(1.15);
  transition: all 0.2s ease-in-out;
}
</style>

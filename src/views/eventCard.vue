<template>
  <div>
    <v-card
      class="mx-auto elevation-1"
      max-width="95%"
      style="overflow: hidden;"
    >
      <center>
        <img
          class="mt-4"
          style="object-fit: scale-down; max-width: 300px; max-height: 300px;"
          :src="img ? img : logo"
          loading="lazy"
        />
      </center>
      <!-- <v-card-title style="color: #0630BE;">{{ name }}</v-card-title> -->
      <!-- <v-card-subtitle class="pb-0">{{ date }}</v-card-subtitle> -->
      <!-- <v-card-text class="text--primary">
        <div class="myText">
          {{ text.slice(0, 250) }}
          <span @click="show = !show" class="show" v-if="!show && text.length > 250"
            >Read More...</span
          >
          <span v-if="show"> {{ text.slice(251) }} </span>
          <span class="show" @click="show = !show" v-if="show"
            >Read Less...</span
          >
        </div>
      </v-card-text> -->
      <v-card-actions>
        <!-- <a
          :href="registration"
          style="text-decoration: none;"
          v-if="registration !== ''"
          target="_blank"
        >
          <v-btn color="#0630BE" class="white--text" small>
            Register
          </v-btn>
        </a> -->
        <!-- <a
          v-if="learnMore"
          :href="learnMore"
          style="text-decoration: none;"
          target="_blank"
        >
          <v-btn color="#0630BE" class="white--text" small>
            Click Here
          </v-btn>
        </a> -->
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import logo from "@/assets/logos/girllogo.png";
export default {
  props: ["event"],
  data: function () {
    return {
      show: false,
      logo: logo,
      img: this.event.img,
      name: this.event.name,
      registration: this.event.registration,
      learnMore: this.event.learnMore,
      date: this.event.date,
      text: this.event.text,
    };
  },
};
</script>

<style scoped>
.show {
  color: #0630be;
}
</style>

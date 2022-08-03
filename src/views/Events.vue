<template>
  <div>
    <center>
      <div class="my-5">
        <span class="myHeadingBolder">Our</span>
        <span class="myHeadingLinear">Events</span>
      </div>
    </center>
    <v-container class="border pa-4">
      <v-layout wrap v-if="loading">
        <v-flex md4 xs12 v-for="i in 3" :key="i" my-2>
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-flex>
      </v-layout>
      <v-layout wrap v-else>
        <v-flex xs12 md4 v-for="(event, i) in events" :key="i" py-2>
          <Eventcard :event="event" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Eventcard from "./eventCard";
import { db } from "../firebase";

export default {
  components: {
    Eventcard,
  },
  data() {
    return {
      loading: true,
      events: [],
    };
  },
  mounted() {
    // this.loadall();
    db.collection("Events")
      .get()
      .then((res) => {
        this.loading = false;
        res.forEach((r) => {
          const a = {
            img: r.data().photo_url,
            name: r.data().name,
            text: r.data().description,
            date: r.data().date + " " + r.data().time,
            learnMore: r.data().link,
          };
          this.events.push(a);
        });
      });
    // Event.getAll().on("value", this.onDataChange);
    document.title = "Rac Cbe Majestic | Events";
  },
  methods: {
    
  },
};
</script>

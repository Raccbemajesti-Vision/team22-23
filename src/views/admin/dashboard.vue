<template>
  <div>
    <v-container>
      <h3>Dashboard</h3>
      <Table
        :headers="headers"
        heading="Events"
        :content="content"
        btnName="Event"
        btnLink="/addEvent"
        :delete="deleteEmployee"
      />

      <Table
        :headers="headers"
        heading="Weekly Press"
        :content="press"
        btnName="Press"
        btnLink="/addPress"
        :delete="deletePress"
      />
    </v-container>
  </div>
</template>

<script>
import Table from "./tabel.vue";
import { db, fb } from "../../firebase";
export default {
  components: {
    Table,
  },
  data() {
    return {
      loading: true,
      events: [],
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name",
        },
        // { text: "Date", value: "date" },
        // { text: "Venue", value: "venue" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      content: [],
      press: [],
    };
  },
  methods: {
    loadEvent() {
      db.collection("Events")
        .get()
        .then((res) => {
          this.loading = false;
          res.forEach((r) => {
            const a = {
              id: r.data().id,
              name: r.data().name,
              img: r.data().photo_url,
              // venue: r.data().venue,
              // date: r.data().date + " " + r.data().time,
            };
            this.content.push(a);
          });
        });
      let pressContent = [];
      db.collection("Press")
        .get()
        .then((res) => {
          this.loading = false;
          res.forEach((r) => {
            const a = {
              id: r.data().id,
              name: r.data().name,
              img: r.data().photo_url,
              // venue: r.data().venue,
              // date: r.data().date + " " + r.data().time,
            };
            pressContent.push(a);
          });
        });
        console.log({pressContent});
      this.press = pressContent;
    },

    async deletePress(id, url) {
      await fb
        .refFromURL(url)
        .delete()
        .then(
          db
            .collection("Press")
            .where("id", "==", id)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                doc.ref.delete();
              });
            })
            .then((_) => {
              console.log(_);
              this.press = [];
              db.collection("Press")
                .get()
                .then((res) => {
                  this.loading = false;
                  res.forEach((r) => {
                    const a = {
                      id: r.data().id,
                      name: r.data().name,
                      img: r.data().photo_url,
                      // venue: r.data().venue,
                      // date: r.data().date + " " + r.data().time,
                    };
                    this.press.push(a);
                  });
                });
            })
            .catch((err) => {
              console.log({ err });
              alert("somthing went wrong, contact sethu");
            })
        )
        .catch((err) => {
          console.log({ err });
          alert("somthing went wrong, contact sethu");
        });
    },

    async deleteEmployee(id, url) {
      await fb
        .refFromURL(url)
        .delete()
        .then(
          db
            .collection("Events")
            .where("id", "==", id)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                doc.ref.delete();
              });
            })
            .then((_) => {
              console.log(_);
              this.content = [];
              db.collection("Events")
                .get()
                .then((res) => {
                  this.loading = false;
                  res.forEach((r) => {
                    const a = {
                      id: r.data().id,
                      name: r.data().name,
                      img: r.data().photo_url,
                      // venue: r.data().venue,
                      // date: r.data().date + " " + r.data().time,
                    };
                    this.content.push(a);
                  });
                });
            })
            .catch((err) => {
              console.log({ err });
            })
        )
        .catch((err) => {
          console.log({ err });
        });
    },
  },
  mounted() {
    // this.loadall();
    this.loadEvent();
    // Event.getAll().on("value", this.onDataChange);
    document.title = "Rac Cbe Majestic | Dashboard";
  },
};
</script>

<style scoped></style>

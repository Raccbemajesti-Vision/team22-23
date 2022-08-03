<template>
  <div id="new-employee">
    <v-container>
      <h1>New Weekly Press</h1>
      <form @submit.prevent="saveEmployee" class="col s12">
        <v-text-field v-model="name" label="Name" required></v-text-field>
        <!-- <v-textarea
          v-model="description"
          label="Description"
          required
        ></v-textarea> -->
        <!-- <v-text-field v-model="date" label="Date" required></v-text-field>
        <v-text-field v-model="time" label="Time" required></v-text-field> -->
        <!-- <v-text-field
          v-model="venue"
          label="Venue/Platform"
          required
        ></v-text-field> -->
        <!-- <v-text-field v-model="link" label="Completion Link"></v-text-field> -->
        <v-file-input show-size required label="Poster" v-model="image"
  accept="image/jpg, image/jpeg, image/png" ></v-file-input>
  <small :class="image ? image.size/1024/1024 > 1 ? 'red--text' : 'green--text' : 'grey--text'">Image Size Less that 1mb must</small> <br/>
        <v-btn type="submit" class="green white--text mr-3" :disabled="!(image && name && image.size/1024/1024 < 1)">Submit</v-btn>
        <v-btn class="red white--text" @click="$router.push('/admin/dashboard')"
          >Cancel</v-btn
        >
        <p v-if="uploadValue">Image Uploading: {{ uploadValue }} / 100</p>
      </form>
    </v-container>
  </div>
</template>

<script>
import { fb, db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "new-employee",
  data() {
    return {
      name: null,
      description: null,
      date: null,
      time: null,
      venue: null,
      image: null,
      uploadValue: null,
      link: null,
      
    };
  },
  methods: {
    saveEmployee() {
      let f = this.image;
      var file = fb.ref("Press/" + f.name);
      let storageRef = file.put(f);

      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            db.collection("Press")
              .add({
                id: uuidv4(),
                name: this.name,
                // description: this.description,
                // date: this.date,
                // time: this.time,
                // venue: this.venue,
                photo_url: url,
                // link: this.link,
              })
              .then(() => {
                this.$router.push("/admin/dashboard");
              })
              .catch((error) => {
                console.error("Error adding: ", error);
                alert("Something Wrong, Contact Sethu");
              });
          });
        }
      );
    },
  },
};
</script>

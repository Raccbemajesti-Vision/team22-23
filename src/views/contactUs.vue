<template>
  <div>
    <center>
      <div class="my-5">
        <span class="myHeadingBolder">Contact</span>
        <span class="myHeadingLinear">us</span>
      </div>
    </center>
    <v-container class="border pa-4 mb-2 mt-5">
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex md8 xs12 px-5>
          <div class="myHeadingBolderAvatar">
            We are
            <span class="myHeadingLinearAvatar">Rac Cbe Majestic </span>
          </div>
          <div class="mySecondary">
            Want to talk?
            <br />
            We would love to
          </div>
          <div class="myHeadingBolderAvatarOne">
            Initiate a conversation with our team by contacting us through
            <br />
            raccbemajestic3201@gmail.com or +919025548991.
          </div>
        </v-flex>
        <v-flex md4 xs12>
          <v-img :src="logo" width="80%"></v-img>
        </v-flex>
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

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title primary-title>
          <div class="myHeadingLinearAvatar">Contact</div>
          <div class="myHeadingBolderAvatar">us</div>
        </v-card-title>

        <v-card-text>
          <v-text-field label="Name" color="#0630BE"></v-text-field>
          <v-text-field label="Mail Id" color="#0630BE"></v-text-field>
          <v-text-field label="Contact no" color="#0630BE"></v-text-field>
          <v-textarea
            name="input-7-1"
            label="Quries"
            value=""
            color="#0630BE"
          ></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#0630BE" class="white--text" @click="dialog = false">
            Submit
          </v-btn>
          <v-btn color="red" class="white--text" @click="dialog = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import logo from "@/assets/logos/contact.svg";
export default {
  data() {
    return {
      logo: logo,
      dialog: false,
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
</style>

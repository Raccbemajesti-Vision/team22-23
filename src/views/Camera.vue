<template>
  <div>
    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="#0630BE"
      id="btn-download"
      :href="imageUrl"
      download
      v-if="imageUrl"
    >
      <v-icon>mdi-download</v-icon>
    </v-btn>
    <v-btn
      fixed
      dark
      fab
      bottom
      left
      text
      color="#0630BE"
      id="btn-download"
    >
      <v-icon>mdi-information-outline</v-icon>
    </v-btn>
    <v-layout justify-center wrap>
      <v-flex xs12 md6 pa-5>
        <v-file-input
          type="file"
          accept="image/png, image/jpeg"
          placeholder="Upload a Photo"
          prepend-icon="mdi-upload"
          label="Upload Photo"
          color="#0630BE"
          @change="this.onImageChange"
          :clearable="true"
          v-model="images"
          show-size
          filled
        ></v-file-input>
        <center class="hidden-md-and-up">
          or
        </center>
        <v-file-input
          class="hidden-md-and-up"
          type="file"
          accept="image/*"
          color="#0630BE"
          placeholder="Take a Photo"
          prepend-icon="mdi-camera"
          label="Take Photo"
          capture
          @change="this.onImageChange"
          :clearable="true"
          v-model="images"
          show-size
          filled
        ></v-file-input>
      </v-flex>
      <v-flex xs12 md6 pa-5>
        <div class="ImageContainer">
          <center v-if="!imageChanged">Select Some Image</center>
          <center v-if="imageChanged && !imageUrl">
            <p>Image is loading...Kindly wait</p>
          </center>
          <v-img
            v-if="imageUrl"
            :src="imageUrl"
            :class="[imageUrl ? 'imgLoad' : '']"
            :alt="placeholder"
          />
        </div>
      </v-flex>
    </v-layout>
    <clipper-upload v-model="imgURL">upload image</clipper-upload>
  <button @click="getResult">clip image</button>
  {{imgURL}}
<clipper-fixed class="my-clipper" ref="clipper" ratio=4/4 :src="imgURL" v-if="imgURL">
    <div class="placeholder" slot="placeholder">No image</div>
</clipper-fixed>
<div>
    <div>result:</div>
    <img class="result" :src="resultURL" alt="">
</div>
  </div>
</template>

<script>
import rlogo from "@/assets/logo.png";
import watermark from "watermarkjs";
import placeholder from "@/assets/placeholder.jpg";
// import racWatermark from "@/assets/logos/racWatermark.png";
import {  clipperUpload, clipperFixed } from 'vuejs-clipper'
// import setu from "../assets/Picture/sethu.jpg"

export default {
  name: "Camera",
  components: {
    clipperFixed,
    clipperUpload
    // clipperPreview
  },
  data() {
    return {
      // sethu:setu,
      imageUrl: '',
      imgURL: '',
      resultURL: '',
      rlogo: rlogo,
      placeholder: placeholder,
      images: null,
      exampleContent: "",
      imageChanged: false,
    };
  },

  mounted() {},

  methods: {
    upload: function(e){
      if (e.target.files.length !== 0) {
        if(this.imgURL) URL.revokeObjectURL(this.imgURL)
        this.imgURL = window.URL.createObjectURL(e.target.files[0]);
      }
    },
    getResult: function () {
  const canvas = this.$refs.clipper.clip();//call component's clip method
  this.resultURL = canvas.toDataURL("image/jpeg", 1);//canvas->image
  this.watermark(canvas.toDataURL("image/jpeg", 1))
  
},
    watermark(upload) {
      const options = {
        init(img) {
          img.crossOrigin = "anonymous";
        },
      };
      var x = function () {
        return 30;
      };

      var y = function () {
        return 63;
      };

      // var upload = document.querySelector('input[type=file]').files[0];
      watermark(
        [
          upload,
          rlogo
        ],
        options
      )
        .image(watermark.image.lowerRight())
        .render()
        .image(
          watermark.text.atPos(
            x,
            y,
            "Rac Cbe Majestic",
            "42px Josefin Sans",
            "#fff",
            0.8,
            48
          )
        )
        .then((img) => {
          this.imageChanged = true;
          this.imageUrl = img.src;
        });
    },
    onImageChange() {
      if (this.images) {
        this.imageUrl = "";
        this.imageChanged = true;
        this.watermark(this.images);
      } else {
        this.imageChanged = false;
        this.imageUrl = "";
      }
    },
  },
};
</script>

<style scoped>
.ImageContainer {
  width: 100%
}
.ImageContainer imgLoad {
  width: 100%;
  height: 100%;
}

.placeholder {
  text-align: center;
  padding: 20px;
  background-color: lightgray;
}
</style>

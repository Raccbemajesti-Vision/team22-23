<template>
  <div class="testimonial">
    <div class="testimonial-body">
      <p @mouseover="show = true" @mouseleave="show = false">
        {{ thought.slice(0, 240) }}
        <span v-if="!show" @click="show = !show" class="show"
          >Read More...</span
        >
        <span v-if="show"> {{ thought.slice(240) }} </span>
        <span v-if="show" @click="show = !show" class="show">Read Less..</span>
      </p>
    </div>
    <div class="testimonial-footer">
      <img :src="photo ? photo : logo" :alt="logo" />
      <h3>{{ name }}</h3>
      <h4>{{ position }}</h4>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logos/girllogo.png";
export default {
  props: ["i"],
  data: function () {
    return {
      logo: logo,
      show: false,
      name: this.i.name,
      position: this.i.position,
      photo: this.i.photo,
      thought: this.i.thought,
    };
  },
  method: {
    me() {
      console.log("i hover");
    },
  },
};
</script>

<style scoped>
.show {
  color: #0630be;
}
.testimonial {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  max-width: 100%;
  width: 100%;
}

.testimonial-body {
  padding: 20px 20px 80px;
}

.testimonial-body p {
  color: #555;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  line-height: 30px;
  margin: 0;
}

.testimonial-body .fa-quote-right {
  color: #eee;
  font-size: 40px;
  float: right;
}

.testimonial-footer {
  background-color: #0630be;
  color: #fff;
  padding: 40px;
  text-align: center;
}

.testimonial-footer img {
  border-radius: 50%;
  border: 5px solid #fff;
  height: 120px;
  width: 120px;
  margin-top: -100px;
}

.testimonial-footer h3 {
  margin: 10px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.testimonial-footer h4 {
  color: #b3b5ef;
  margin: 0;
  letter-spacing: 1px;
}
</style>

<template>
  <div class="b">
    <!-- <div class="dataFlow"></div> -->
    <div class="context">
      <center>
        <img src="../assets/logo.png" class="LogoImage" />
        <h2>
          Rotaract Club of Coimbatore Majestic<br />
          <span style="font-size: 18px; color: #0630be;"
            >Impact Year | #MilestoneMakers</span
          >
        </h2>
      </center>
    </div>
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:700");

.b {
  height: 80vh;
  position: relative;
}

.LogoImage {
  width: 25%;
  filter: drop-shadow(4px 4px 0 rgb(201, 196, 196))
    drop-shadow(-4px -4px 0 rgb(238, 234, 234));
}

@media only screen and (max-width: 600px) {
  .b {
    height: 84vh;
  }
  .LogoImage {
    width: 80%;
    filter: drop-shadow(2px 2px 0 rgb(201, 196, 196))
      drop-shadow(-1px -1px 0 rgb(238, 234, 234));
  }
  .context {
    width: 100%;
    position: absolute;
    font-family: "Montserrat", sans-serif;
    top: 12% !important;
  }
  .context h1 {
    color: black;
    /* font-size: 24px !important; */
  }
}

.context {
  width: 100%;
  position: absolute;
  font-family: "Montserrat", sans-serif;
  top: 8%;
}

.context h1 {
  color: black;
  font-size: 35px !important;
}

.area {
  width: 100%;
  height: 50vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #0630be;
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 30px;
  height: 30px;
  animation-delay: 0s;
  background: #0630be;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
  background: #EE5C29;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
  background: #0630be;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 30px;
  height: 30px;
  animation-delay: 0s;
  animation-duration: 18s;
  background: #0630be;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  background: #0630be;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 30px;
  height: 30px;
  animation-delay: 3s;
  background: #0630be;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 30px;
  height: 30px;
  animation-delay: 5s;
  background: #0630be;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 9s;
  animation-duration: 45s;
  background: #0630be;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>

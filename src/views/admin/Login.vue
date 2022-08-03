<template>
  <div>
    <v-container>
      <h3>Login</h3>
      <form>
        <v-text-field v-model="email" label="Email" required></v-text-field>
        <v-text-field
          v-model="password"
          label="Pasword"
          required
        ></v-text-field>
        <v-btn v-on:click="login" class="green white--text">Login</v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
import { auth } from "../../firebase";
export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function (e) {
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          alert(`You are logged in as ${user.user.email}`);
        //   this.$router.go({ path: "/admin/dashboard" });
          this.$router.push('/admin/dashboard')
          //   location.reload();
        },
        (err) => {
          alert(err.message);
        }
      );
      e.preventDefault();
    },
  },
};
</script>

<template>
  <div class="login">
    <div class>
      <div class="col-md-6 offset-md-3">
        <h2 class="display-4 text-center mt-5">Login Form</h2>

        <form action="#">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              v-model="email"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              class="form-control"
            />
            <div style="color:red;" v-if="error">{{ error }}</div>
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="btn btn-info btn-block"
              @click.prevent="performLogin"
            >
              Login
            </button>
          </div>
        </form>

        <circle-spin v-show="isLoading"></circle-spin>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return { email: "", password: "", error: "", isLoading: false };
  },
  methods: {
    performLogin() {
      this.isLoading = true;
      this.$store
        .dispatch("performLoginAction", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res);
          this.isLoading = false;
          this.$router.push("/profile");
        })
        .catch(err => {
          this.isLoading = false;
          this.error = " There was error during login process";
          console.log(err.message);
        });
    }
  }
};
// methods: {
//   ff() {
//     axios
//       .post("http://127.0.0.1:8000/api/auth/login", {
//         email: this.email,
//         password: this.password
//       })
//       .then(res => {
//         console.log(res.data);
//         localStorage.setItem("token", res.data.access_token);
//         localStorage.setItem("user", res.data.user);
//         this.$router.push("/profile");
//       })
//       .catch(err => {
//         console.log(err.message);
//         this.error = err.message;
//       });
//     console.log("Login form it Work!");
//   }
// }
</script>

<style>
</style>
<template>
  <div>
    <h1>hi</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
      isLoading: false
    };
  },
  methods: {
    performRegister() {
      console.log("Login form it Work!");
      //   this.$router.push("/profile");
    }
  }
};
</script>

<style>
</style>
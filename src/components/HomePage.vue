<template>
  <v-container
    fluid
    style="height: 95vh"
    class="container d-flex justify-center align-center"
  >
    <v-row>
      <v-col
        cols="12"
        class="d-flex flex-column justify-center align-center"
        style="gap: 3rem"
      >
        <h1 class="font-weight-black text-h1">Well Come to Weather App</h1>
        <h3 class="font-weight-black text-h3">
          Sign up to use the weather app
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.container {
  background: url("../assets/weatherb-e05c2c8b66ae.jpg");
  background-repeat: no-repeat, repeat;
  background-size: cover;
  height: 100vh;
}
</style>

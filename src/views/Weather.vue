
<template>
  <v-container fluid class="container d-flex justify-center align-center">
    <v-row class="d-flex justify-center">
      <v-col cols="12" class="d-flex justify-center" style="height: 140px">
        <v-text-field
          v-model="search"
          style="max-width: 400px; height: 90%"
          @keyup.enter="initialize"
          label="Search with city name"
          class="font-weight-black text-h3 text-capitalize"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="(cityData, index) in weatherData"
        :key="index"
        class="d-flex justify-center mb-4"
      >
        <v-card
          align="center"
          class="px-5 py-5"
          style="width: 100%; background-color: rgba(0, 0, 0, 0)"
          height="600"
        >
          <v-card-title class="font-weight-bold text-h3">
            {{ cityData?.name }} ({{ cityData?.sys?.country }})
          </v-card-title>

          <v-card-text>
            <v-row
              class="d-flex flex-column justify-center item-center pt-5"
              style="gap: 2rem"
            >
              <v-col class="font-weight-bold text-h2"
                >{{ Math.round(cityData?.main?.temp) }} °C</v-col
              >
              <v-col class="font-weight-bold text-h4 text-capitalize">
                {{ cityData?.weather[0].main }}
              </v-col>
              <v-col class="font-weight-bold text-h4 text-capitalize">
                {{ cityData?.weather[0].description }}
              </v-col>
              <v-col class="font-weight-bold text-h4"
                >{{ cityData?.clouds?.all }}%</v-col
              >
              <v-col class="font-weight-bold text-h4">
                {{ Math.round(cityData?.main?.temp_min) }} °C /
                {{ Math.round(cityData?.main?.temp_max) }} °C
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { store } from "@/store";
import { ref } from "vue";

const search = ref(null);
const cities = ["istanbul", "ankara"];
const weatherData = ref([]);

const initialize = async () => {
  let data;
  if (search.value) {
    weatherData.value = [];
    data = await store.dispatch("weather/getAll", {
      appid: "8538ea937a362a80abae2c63e92b762e",
      city: search.value,
      units: "metric",
    });
    weatherData.value.push(data);
  } else {
    for (let city of cities) {
      data = await store.dispatch("weather/getAll", {
        appid: "8538ea937a362a80abae2c63e92b762e",
        city,
        units: "metric",
      });
      weatherData.value.push(data);
    }
  }
};

initialize();
</script>

<style scoped>
.container {
  background: url("../assets/weatherb-e05c2c8b66ae.jpg");
  background-repeat: no-repeat, repeat;
  background-size: cover;
  height: 100vh;
}
</style>

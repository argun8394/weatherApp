<template>
  <v-container class="container d-flex justify-center align-center mt-10">
    <v-data-table
      :headers="headers"
      :items="weatherData"
      item-value="key"
      class="elevation-1"
      style="max-width: 1400px"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="font-weight-bold">All Cities</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>
      </template>

      <template v-slot:item.index="{ index }">
        <div style="color: grey">{{ index + 1 }}</div>
      </template>

      <template v-slot:item.name="{ item }">
        <div class="font-weight-bold">{{ getCityName(item.name) }}</div>
      </template>

      <template v-slot:item.main="{ item }">
        <div>
          {{ Math.round(item.main.temp) }}
          <span class="font-weight-bold">°C</span>
        </div>
      </template>
      <template v-slot:item.weather[0].description="{ item }">
        <div class="text-capitalize">
          {{ item.weather[0].description }}
        </div>
      </template>
      <template v-slot:item.main.temp_min="{ item }">
        <div>
          {{ Math.round(item.main.temp_min) }}
          <span class="font-weight-bold">°C</span>
        </div>
      </template>

      <template v-slot:item.main.temp_max="{ item }">
        <div>
          {{ Math.round(item.main.temp_max) }}
          <span class="font-weight-bold">°C</span>
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import { store } from "@/store";
import { ref } from "vue";
import { cityId } from "@/data/cityData";
import { split } from "postcss/lib/list";

const weatherData = ref([]);
const headers = ref([
  { title: "No", key: "index" },
  { title: "City", key: "name" },
  { title: "Temp", key: "main" },
  { title: "Weather", key: "weather[0].main" },
  { title: "Description", key: "weather[0].description" },
  { title: "Clouds", key: "clouds.all" },
  { title: "MinTemp", key: "main.temp_min" },
  { title: "MaxTemp", key: "main.temp_max" },
]);

const getCityName = (item) => {
  let cityName = item.split(" ");

  return cityName[0];
};

const initialize = async () => {
  let data;
  for (let city of cityId) {
    data = await store.dispatch("weather/getAllCities", {
      appid: "8538ea937a362a80abae2c63e92b762e",
      id: city.list,
      units: "metric",
    });
    weatherData.value = [...weatherData.value, ...data.list];
  }
  // console.log(weatherData.value);
};

initialize();
</script>


<style>
</style>

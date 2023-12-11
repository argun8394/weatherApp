<template>
  <v-layout>
    <v-app-bar fluid color="primary" style="height: 90px" align="center">
      <router-link to="/" class="nav-link" style="text-decoration: none">
        <v-app-bar-title
          class="d-flex justify-start pl-3 text-white font-weight-bold text-h5"
          >Weather App</v-app-bar-title
        ></router-link
      >
      <v-spacer></v-spacer>
      <v-col class="d-flex justify-end">
        <router-link
          to="/cities"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/cities' }"
        >
          <v-btn style="color: white; border-radius: 16px"> Cities </v-btn>
        </router-link>
        <v-divider class="mx-2" vertical />
        <router-link
          to="/weather"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/weather' }"
        >
          <v-btn style="color: white; border-radius: 16px"> Weather </v-btn>
        </router-link>
        <v-divider class="mx-2" vertical />
        <router-link
          to="/signup"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/signup' }"
        >
          <v-btn style="color: white; border-radius: 16px"> Sign Up </v-btn>
        </router-link>
        <v-divider class="mx-2" vertical />
        <router-link
          to="/login"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/login' }"
        >
          <v-btn style="color: white; border-radius: 16px"> Login </v-btn>
        </router-link>
      </v-col>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup>
import { store } from "@/store";
import { ref } from "vue";
</script>

<style scoped>
.active-link {
  background-color: #42a5f5;
  border-radius: 16px;
}
</style>


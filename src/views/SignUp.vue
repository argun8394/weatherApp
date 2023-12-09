<template>
  <v-container style="height: 100vh" class="d-flex justify-center align-center">
    <v-form v-model="valid" @submit.prevent>
      <v-row
        class="d-flex flex-column justify-center align-center"
        style="gap: 1rem"
        ><v-col cols="12"><h1 class="text-center">Sign Up</h1></v-col></v-row
      >
      <v-row
        class="d-flex flex-column justify-center align-center"
        style="gap: 1rem"
      >
        <v-col cols="12" md="6" style="min-width: 350px">
          <v-text-field
            v-model="user.username"
            label="Username"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" style="min-width: 350px">
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" style="min-width: 350px">
          <v-text-field
            v-model="user.password"
            :counter="4"
            label="Password"
            :rules="passwordRules"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex justify-space-between">
          <v-btn type="submit" class="mt-2" @click="submit" :disabled="!valid"
            >Submit</v-btn
          >
          <v-btn class="mt-2" @click="handleReset"> Reset </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { store } from "@/store";
import { useRouter } from "vue-router";

const router = useRouter();

const valid = ref(false);
const user = ref({
  // id: Math.floor(Math.random() * 1000),
  username: "",
  email: "",
  password: "",
});

const passwordRules = [
  (value) => {
    if (value) return true;
    return "Password is required.";
  },
  (value) => {
    if (value?.length >= 4) return true;
    return "Password must be more than 4 characters.";
  },
];

const emailRules = [
  (value) => {
    if (value) return true;
    return "E-mail is required.";
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;
    return "E-mail must be valid.";
  },
];

const submit = async () => {
  await store.dispatch("user/signup", user.value);

  user.value = "";
  router.push("/login");
};

const handleReset = () => {
  user.value = "";
};
</script>

<style></style>

<template>
  <v-app>
    <NavBar title="To do List" />
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "./partials/NavBar";

const components = {
  NavBar,
};

export default {
  name: "App",
  components,
};
</script>

<style>
.show {
  position: absolute;
  transform: scale(1, 1);
  transition: transform 0.3s;
}

.hidden {
  position: absolute;
  transform: scale(0, 0);
  transition: transform 0.3s;
}
</style>

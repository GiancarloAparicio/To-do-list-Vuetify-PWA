<template>
  <v-app>
    <NavBar title="To do List" />
    <v-container>
      <v-row>
        <v-col>
          <router-view />
        </v-col>
      </v-row>
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

<style scoped>
.container {
  overflow: hidden !important;
}
</style>

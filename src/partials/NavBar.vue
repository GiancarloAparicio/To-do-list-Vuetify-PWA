<template>
  <div class="navBar">
    <v-card color="grey lighten-4" flat tile height="60px">
      <v-toolbar color="primary" dark dense height="60px">
        <v-app-bar-nav-icon
          @click.stop="modalOpen = !modalOpen"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>{{ title }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="openBell = !openBell">
          <v-icon>mdi-bell</v-icon>
          <List :open="openBell" />
        </v-btn>

        <v-btn icon @click="openSettings = !openSettings">
          <v-icon>mdi-dots-vertical </v-icon>
          <List :open="openSettings" />
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer app v-model="modalOpen" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title> {{ getUser.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <NavigationRoutes />
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import List from "../components/List";
import NavigationRoutes from "../components/NavigationRoutes";

const data = () => ({
  modalOpen: false,
  openBell: false,
  openSettings: false,

  settings: ["account"],
});

const computed = {
  ...mapGetters("user", ["getUser"]),
};

const props = {
  title: { default: "Report" },
};

const components = {
  List,
  NavigationRoutes,
};

export default {
  name: "NavBar",
  data,
  props,
  components,
  computed,
};
</script>

<style >
.navBar {
  position: sticky;
  top: 0;
  z-index: 10;
}

.v-overlay__scrim {
  height: 100vh !important;
}
</style>

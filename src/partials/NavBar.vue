<template>
  <div>
    <v-card color="grey lighten-4" flat tile height="48px">
      <v-toolbar dense>
        <v-app-bar-nav-icon
          @click.stop="modalOpen = !modalOpen"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>{{ title }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="openFavorite = !openFavorite">
          <v-icon>mdi-heart</v-icon>
          <List :open="openFavorite" />
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
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <NavigationRoutes />
    </v-navigation-drawer>
  </div>
</template>

<script>
import List from "../components/List";
import NavigationRoutes from "../components/NavigationRoutes";

const data = () => ({
  modalOpen: false,
  openFavorite: false,
  openSettings: false,
});

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
};
</script>

<style scoped></style>

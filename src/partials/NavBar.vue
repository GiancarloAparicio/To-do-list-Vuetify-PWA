<template>
  <div class="navBar">
    <v-card color="grey lighten-4" flat tile height="60px">
      <v-toolbar color="primary" dark dense height="60px">
        <v-app-bar-nav-icon
          @click.stop="modalOpen = !modalOpen"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>{{ title }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <SearchTask />

        <v-btn icon @click="openBell = !openBell">
          <v-icon>mdi-bell</v-icon>
          <List :open="openBell" />
        </v-btn>

        <v-btn icon @click="openSettings = !openSettings">
          <v-icon>mdi-dots-vertical </v-icon>
          <List :open="openSettings">
            <ListItem @click="finishedTask"> Finished tasks </ListItem>
            <TaskLists @click="closeSettings" />
            <ListItem>More apps</ListItem>
          </List>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer app v-model="modalOpen" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="photo" alt="user" />
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
import ListItem from "../components/ListItem";
import NavigationRoutes from "../components/NavigationRoutes";
import TaskLists from "../partials/TaskLists";
import SearchTask from "./SearchTask";
import userDefault from "../assets/user-default.png";

const data = () => ({
  modalOpen: false,
  openBell: false,
  openSettings: false,

  settings: ["account"],
});

const computed = {
  ...mapGetters("user", ["getUser"]),
  photo() {
    if (this.getUser.photo.alt) {
      return this.getUser.photo.picture;
    }
    return userDefault;
  },
};

const watch = {
  "getUser.photo"() {
    return this.getUser.photo;
  },
};

const props = {
  title: { default: "Report" },
};

const methods = {
  closeSettings() {
    this.openSettings = false;
  },
  finishedTask() {
    this.$router.push({
      name: "task.ends",
    });
  },
};

const components = {
  List,
  NavigationRoutes,
  ListItem,
  TaskLists,
  SearchTask,
};

export default {
  name: "NavBar",
  data,
  props,
  components,
  computed,
  methods,
  watch,
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

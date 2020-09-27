<template>
  <v-list>
    <v-list-item
      :key="index"
      v-for="(route, index) in getRoutes"
      link
      :to="route.path"
    >
      <v-list-item-icon>
        <v-icon>{{ route.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ route.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";

const computed = {
  ...mapGetters("routesNavigation", ["getRoutes"]),
};

export default {
  name: "NavigationRoutes",
  computed,
};
</script>

<style scoped>
</style>
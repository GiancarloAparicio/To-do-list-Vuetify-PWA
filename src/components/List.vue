<template>
  <v-card app>
    <v-list :class="{ show: open, hidden: !open }">
      <v-subheader>{{ title }}</v-subheader>
      <v-list-item v-for="(item, index) in list" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
const data = () => ({
  disabled: true,
});

const props = {
  title: {
    default: "Settings",
  },
  open: {
    default: true,
  },
  list: {},
};

export default {
  name: "List",
  data,
  props,
};
</script>

<style scoped>
.v-list {
  top: 24px;
  right: 0;
  z-index: 100 !important;
  transform-origin: top right;
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.2),
    0 3px 12px 2px rgba(0, 0, 0, 0.12) !important;
}
</style>

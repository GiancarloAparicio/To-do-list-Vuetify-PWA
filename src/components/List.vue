<template>
  <v-card>
    <v-list :class="{ show: open, hidden: !open }">
      <v-subheader>{{ title }}</v-subheader>
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

  transform-origin: top right;
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.2),
    0 3px 12px 2px rgba(0, 0, 0, 0.12) !important;
}
</style>

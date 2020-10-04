<template>
  <v-list-item @click="click">
    <v-list-item-subtitle>
      <slot />
    </v-list-item-subtitle>
  </v-list-item>
</template>

<script>
const methods = {
  click() {
    this.$emit("click");
  },
};

export default {
  name: "ListItem",
  methods,
};
</script>

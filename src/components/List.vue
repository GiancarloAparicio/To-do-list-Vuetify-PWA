<template>
  <v-card light>
    <v-list class="px-2" :class="{ show: open, hidden: !open }">
      <slot />
    </v-list>
  </v-card>
</template>

<script>
const data = () => ({
  disabled: true,
});

const props = {
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
  z-index: 100 !important;
  transform-origin: top right;
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.2),
    0 3px 12px 2px rgba(0, 0, 0, 0.12) !important;
}
</style>

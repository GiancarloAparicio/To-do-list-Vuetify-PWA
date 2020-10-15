<template>
  <v-list-item @click="click">
    <v-list-item-icon>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-subtitle>{{ title }}</v-list-item-subtitle>

    <v-progress-linear
      :value="percentage"
      :class="percentage > 50 && 'white--text'"
      :color="setColorProgress"
      height="25"
    >
      <strong>{{ Math.ceil(percentage) }}%</strong>
    </v-progress-linear>
  </v-list-item>
</template>

<script>
import { getColorToPercentage } from "../helpers/helper";

const data = () => ({
  percentage: 100,
});

const methods = {
  click() {
    this.$emit("click");
  },
};

const props = {
  title: {
    default: "Limit",
  },
  icon: {
    default: "mdi-clock-time-five",
  },
  value: {
    default: 100,
  },
  invert: {
    default: false,
  },
};

const computed = {
  setColorProgress() {
    this.percentage = this.value;
    return getColorToPercentage(this.value, this.invert);
  },
};

const watch = {
  percentage() {
    if (this.percentage == 0) {
      console.log("progress 0");
    }
  },
};

export default {
  name: "ProgressLinear",
  data,
  props,
  methods,
  computed,
  watch,
};
</script>

<style scoped>
</style>
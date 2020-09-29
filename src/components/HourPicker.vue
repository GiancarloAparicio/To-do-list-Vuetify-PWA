<template>
  <v-dialog
    ref="dialog"
    v-model="modal2"
    :return-value.sync="time"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="time"
        label="Expiration time"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker v-if="modal2" v-model="time" full-width>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(time)"> OK </v-btn>
    </v-time-picker>
  </v-dialog>
</template>

<script>
const data = () => ({
  time: null,
  menu2: false,
  modal2: false,
});

const watch = {
  time() {
    this.$emit("chooseHour", this.time);
    return this.time;
  },
};

export default {
  name: "HourPicker",
  data,
  watch,
};
</script>

<style scoped>
</style>
<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
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
    <v-time-picker v-if="modal" v-model="time" full-width>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(time)">
        {{ setValue }}
      </v-btn>
    </v-time-picker>
  </v-dialog>
</template>

<script>
const data = () => ({
  time: null,
  modal: false,
});

const computed = {
  setValue() {
    if (this.value) {
      this.time = this.value;
    }
    return "OK";
  },
};

const props = ["value"];

const watch = {
  time() {
    this.$emit("chooseHour", this.time);
    return this.time;
  },
};

export default {
  name: "HourPicker",
  data,
  computed,
  watch,
  props,
};
</script>

<style scoped></style>

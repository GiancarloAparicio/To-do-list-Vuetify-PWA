<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Expiration date"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      :min="new Date().toISOString().substr(0, 10)"
      v-model="date"
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
const data = () => ({
  date: null,

  modal: false,
  menu: false,
});

const methods = {
  save(date) {
    this.$refs.menu.save(date);
  },
};

const watch = {
  menu(val) {
    val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
  },
  date() {
    this.$emit("chooseDate", this.date);
    return this.date;
  },
};

export default {
  name: "DatePicker",
  data,
  watch,
  methods,
};
</script>

<style scoped>
</style>



   

<template>
  <v-dialog v-model="dialog" max-width="80%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon dark v-bind="attrs" v-on="on">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Task:
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="getAllTasks" :search="search">
        <template v-slot:item.show="{ item }">
          <v-chip @click="getTask(item)" color="green" dark> Show </v-chip>
        </template>
      </v-data-table>
      <v-container class="text-center">
        <v-btn @click="dialog = false" color="error">Close</v-btn>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import { stringToUrl } from "../helpers/helper";

const data = () => ({
  singleSelect: false,
  dialog: false,
  search: "",
  headers: [
    { text: "Name:", sortable: false, value: "name" },
    { text: "Create at:", value: "create_at", sortable: false },
    { text: "Hour at", value: "hour_at", sortable: false },
    { text: "Belongs to the list", value: "list", sortable: false },
    { text: "", value: "show", sortable: false },
  ],
});

const methods = {
  getTask(task) {
    this.dialog = false;
    this.$router.push({
      name: "task.show",
      params: { id: stringToUrl(task.name), taskId: task.id },
    });
  },
};

const computed = {
  ...mapGetters("listTask", ["getAllTasks"]),
};

export default {
  name: "SearchTask",
  data,
  computed,
  methods,
};
</script>

<style scoped>
</style>
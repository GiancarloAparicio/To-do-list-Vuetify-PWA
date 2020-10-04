<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on" @click="click">
        <v-list-item-subtitle> Task lists </v-list-item-subtitle>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title class="headline"> Task lists:</v-card-title>
      <v-card-text> Information from all user lists </v-card-text>
      <v-list dense>
        <v-list-item-group v-model="list">
          <v-list-item
            :key="index"
            v-for="(task, index) in lists"
            @click="getList(task)"
          >
            <v-list-item-icon>
              <v-icon>mdi-clipboard-list-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ task }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outlined color="success" @click="dialog = false"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import { stringToUrl, getAllLists } from "../helpers/helper";

const data = () => ({
  dialog: false,
  list: "",
});

const props = ["listTask"];

const methods = {
  click() {
    this.$emit("click");
  },
  getList(list) {
    this.dialog = false;
    this.$router.push({
      name: "list.edit",
      params: { name: stringToUrl(list), id: list },
    });
  },
};

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  lists() {
    return getAllLists(this.getTasks, false);
  },
};

export default {
  name: "TaskLists",
  data,
  methods,
  computed,
};
</script>

<style scoped>
</style>
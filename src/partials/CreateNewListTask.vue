<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="70%" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="blue" dark v-bind="attrs" v-on="on">
          <v-icon dark>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-form class="px-7 py-7" ref="form">
          <v-toolbar-title class="pb-7"> Create new list: </v-toolbar-title>
          <v-text-field
            outlined
            v-model="name"
            label="Name Task:"
            required
            :rules="inputRules"
            append-icon=" mdi-pencil"
          />

          <v-textarea
            required
            :rules="inputRules"
            outlined
            label="Description Task:"
            height="100px"
            append-icon="mdi-comment-text-outline"
            v-model="description"
          />
          <v-container class="d-flex justify-center">
            <v-btn class="mx-2" color="green" @click="newList" dark>
              Save
            </v-btn>
            <v-btn class="mx-2" color="red" @click="closeForm" dark>
              Cancel
            </v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const data = () => ({
  dialog: false,
  name: undefined,
  description: undefined,

  inputRules: [(v) => !!v || "Is required"],
});

const methods = {
  ...mapActions("listTask", ["changeTasks"]),
  newList() {
    if (this.name !== undefined && this.description !== undefined) {
      let existList = this.lists().filter((list) => list === this.name)[0];
      if (existList === undefined) {
        this.changeTasks({
          [this.name]: [],
        });
      }
      this.closeForm();
    }
  },
  closeForm() {
    this.$refs.form.reset();
    this.$refs.form.resetValidation();
    this.dialog = false;
  },
  lists() {
    let lists = [];
    for (let list in this.getTasks) {
      lists.push(list);
    }
    return lists;
  },
};

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
};

export default {
  name: "CreateNewListTask",
  data,
  methods,
  computed,
};
</script>

<style scoped></style>

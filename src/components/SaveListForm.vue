<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="70%" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-if="icon" icon color="blue" dark v-bind="attrs" v-on="on">
          <v-icon dark>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
        <v-btn
          class="mx-4 mt-10"
          v-else
          large
          dark
          color="green"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left> mdi-pencil </v-icon>
          Edit
        </v-btn>
      </template>

      <v-card>
        <v-form class="px-7 py-7" ref="form">
          <v-toolbar-title class="pb-7">{{ title }} </v-toolbar-title>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getAllLists, nameExistList } from "../helpers/helper";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

const data = () => ({
  dialog: false,
  name: undefined,
  description: undefined,
  inputRules: [(v) => !!v || "Is required"],
});

const methods = {
  newList() {
    if (this.name !== undefined && this.description !== undefined) {
      if (nameExistList(this.getTasks, this.name)) {
        let task = {
          [this.name]: {
            description: this.description,
            create_at: moment().format("YYYY-MM-DD HH:mm:ss"),
            id: `${uuidv4()}`,
            list: [],
          },
        };

        this.$emit("saveList", JSON.stringify(task));
      }
      this.closeForm();
    }
  },
  closeForm() {
    this.$refs.form.reset();
    this.$refs.form.resetValidation();
    this.dialog = false;
  },
};

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
};

const props = {
  title: {
    default: "List:",
  },
  icon: {
    default: true,
  },
};

export default {
  name: "SaveListForm",
  data,
  methods,
  computed,
  props,
};
</script>
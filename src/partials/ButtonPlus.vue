<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2 plus"
          fab
          dark
          color="indigo"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="resetValidation">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Create new task:</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="createTask"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-form ref="form" class="px-5 py-7">
          <v-container>
            <v-row>
              <v-col cols="5" sm="5">
                <v-toolbar-title>Choose list:</v-toolbar-title>
              </v-col>
              <v-col cols="6" sm="6">
                <ChooseListTask :all="false" />
              </v-col>
              <v-col cols="1" sm="1">
                <CreateNewListTask />
              </v-col>
            </v-row>
          </v-container>
          <v-text-field
            outlined
            v-model="name"
            label="Name Task:"
            required
            :rules="inputRules"
            append-icon="mdi-pencil"
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

          <DatePicker @chooseDate="chooseDate" :rules="inputRules" />

          <HourPicker @chooseHour="chooseHour" :rules="inputRules" />
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DatePicker from "../components/DatePicker";
import HourPicker from "../components/HourPicker";
import ChooseListTask from "../partials/ChooseListTask";
import { addNewTaskToCurrentList } from "../store/actions/listTask";
import moment from "moment";
import CreateNewListTask from "../partials/CreateNewListTask";

const data = () => ({
  dialog: false,
  name: "",
  description: "",
  date: null,
  hour: null,
  inputRules: [(v) => !!v || "Is required"],
});

const components = {
  DatePicker,
  HourPicker,
  ChooseListTask,
  CreateNewListTask,
};

const methods = {
  ...mapActions("listTask", ["addNewTask"]),
  ...mapActions("user", ["changeUser"]),
  chooseDate(date) {
    this.date = date;
  },
  chooseHour(hour) {
    this.hour = hour;
  },
  resetForm() {
    this.$refs.form.reset();
    this.dialog = false;

    this.changeUser({
      listTaskCurrent: this.getUser.listTaskCurrent,
    });
  },
  resetValidation() {
    this.$refs.form.resetValidation();
    this.dialog = false;
  },
  createTask() {
    if (
      this.date !== undefined &&
      this.hour !== undefined &&
      this.name !== undefined &&
      this.description !== undefined &&
      this.getUser.listTaskCurrent !== "All"
    ) {
      let currentList = this.getUser.listTaskCurrent;
      let newTask = {
        name: this.name,
        description: this.description,
        notification: false,
        create_at: moment().format("L"),
        finish_at: this.date,
        hour_at: this.hour,
      };

      this.addNewTask(addNewTaskToCurrentList(currentList, newTask));
      this.resetForm();
    }
  },
};

const computed = {
  ...mapGetters("user", ["getUser"]),
};

export default {
  name: "ButtonPlus",
  data,
  components,
  methods,
  computed,
};
</script>

<style scoped>
.v-btn.plus {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
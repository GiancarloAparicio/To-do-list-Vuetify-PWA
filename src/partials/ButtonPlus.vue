<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
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
        <v-form id="newTask" class="px-7 py-7">
          <v-toolbar-title class="pb-7"> Create Task: </v-toolbar-title>
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

          <DatePicker @chooseDate="chooseDate" :rules="inputRules" />

          <HourPicker @chooseHour="chooseHour" :rules="inputRules" />

          <v-container class="d-flex justify-center">
            <v-btn class="mx-2" color="green" @click="createTask" dark>
              Save</v-btn
            >
            <v-btn class="mx-2" color="red" @click="dialog = false" dark>
              Cancel</v-btn
            >
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DatePicker from "../components/DatePicker";
import HourPicker from "../components/HourPicker";
import ChooseListTask from "../partials/ChooseListTask";
import { addNewTaskToCurrentList } from "../store/actions/listTask";
import moment from "moment";

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
};

const methods = {
  ...mapActions("listTask", ["addNewTask"]),
  chooseDate(date) {
    this.date = date;
  },
  chooseHour(hour) {
    this.hour = hour;
  },
  createTask() {
    if (
      this.date !== null &&
      this.hour !== null &&
      this.name !== "" &&
      this.description !== null
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
      this.dialog = false;
      this.date = null;
      this.hour = null;
      this.name = "";
      this.description = "";
      document.getElementById("newTask").reset();
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
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
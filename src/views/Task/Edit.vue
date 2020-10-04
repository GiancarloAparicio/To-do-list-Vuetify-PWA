<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on">
        <span>Edit</span>

        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeForm">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Edit current task:</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="updateTask"> {{ setValues }} </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-row>
        <v-col xs="12" sm="10" md="8" lg="6" xl="5">
          <v-form ref="form" class="px-5 py-7">
            <v-container>
              <v-row>
                <v-col cols="6" sm="5">
                  <v-toolbar-title>List current:</v-toolbar-title>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-alert dark color="blue" dense>
                    <h3 class="text-center">{{ this.task.list }}</h3>
                  </v-alert>
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

            <DatePicker @chooseDate="chooseDate" :value="date" />
            <HourPicker @chooseHour="chooseHour" :value="hour" />
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import ChooseListTask from "./../../components/ChooseListTask";
import DatePicker from "../../components/DatePicker";
import HourPicker from "../../components/HourPicker";
import { mapActions, mapGetters } from "vuex";

const data = () => ({
  dialog: false,
  name: "",
  description: "",
  date: null,
  hour: null,
  inputRules: [(v) => !!v || "Is required"],
});

const methods = {
  ...mapActions("listTask", ["editTask"]),
  closeForm() {
    this.dialog = false;
  },
  chooseDate(date) {
    this.date = date;
  },
  chooseHour(hour) {
    this.hour = hour;
  },
  updateTask() {
    if (
      this.date != undefined &&
      this.hour != undefined &&
      this.name.trim() != "" &&
      this.description.trim() != ""
    ) {
      this.editTask({
        ...this.task,
        name: this.name.trim(),
        description: this.description.trim(),
        finish_at: this.date,
        hour_at: this.hour,
      });
      this.dialog = false;
    }
  },
};

const computed = {
  ...mapGetters("user", ["getUser"]),
  setValues() {
    this.name = this.task.name;
    this.description = this.task.description;
    this.date = this.task.finish_at;
    this.hour = this.task.hour_at;
    return "Update";
  },
};

const props = ["task"];

const components = {
  ChooseListTask,
  DatePicker,
  HourPicker,
};

export default {
  name: "Edit",
  data,
  methods,
  props,
  components,
  computed,
};
</script>
<style scoped>
.col-sm-10.col {
  margin: auto;
}
</style>

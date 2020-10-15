<template>
  <div>
    <v-card elevation="2" shaped>
      <v-list-item two-line class="pt-4">
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ currentTask.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ currentTask.create_at }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mx-4"></v-divider>
      <ProgressLinear
        title="Time limit:"
        :invert="true"
        :value="calculateProgress(currentTask)"
      />
    </v-card>

    <v-card class="mx-auto my-6">
      <v-card-title> Description </v-card-title>

      <v-card-text>
        <div class="subtitle-1">Ends in: {{ currentTask.finish_at }}</div>

        <div>
          {{ currentTask.description }}
        </div>
      </v-card-text>
    </v-card>

    <DeleteButton
      @delete="deleteCurrentTask"
      title="Delete task"
      content=" Are you sure you want to delete the task? After this you will not be
          able to recover your data"
    />

    <v-footer absolute padless>
      <v-bottom-navigation>
        <v-btn @click="back">
          <span>Back</span>

          <v-icon>mdi-backburger</v-icon>
        </v-btn>

        <Edit :task="currentTask" />

        <v-btn @click="resetTask" v-if="currentTask.status">
          <span>Reset task</span>

          <v-icon>mdi-book-check-outline</v-icon>
        </v-btn>

        <v-btn @click="finishTask" v-else>
          <span>Finished task</span>

          <v-icon>mdi-bookmark-check</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Edit from "./Edit";
import DeleteButton from "../../components/DeleteButton";
import ProgressLinear from "../../components/ProgressLinear";
import moment from "moment";

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  currentTask() {
    return this.$route.params.task;
  },
};

const methods = {
  ...mapActions("listTask", ["editTask", "deleteTask"]),
  finishTask(index) {
    this.editTask({
      ...this.currentTask,
      status: true,
    });
    this.back();
  },
  resetTask(index) {
    this.editTask({
      ...this.currentTask,
      status: false,
    });
    this.back();
  },
  back() {
    this.$router.go(-1);
  },
  deleteCurrentTask() {
    this.deleteTask(this.currentTask);
    this.back();
  },
  calculateProgress(task) {
    let finish = task.finish_at + " " + task.hour_at;
    let today = moment().format("YYYY-MM-DD HH:mm:ss");
    let created = task.create_at.split(" ");

    if (created[0] === task.finish_at) {
      let todayHour = today.split(" ")[1].replaceAll(":", "");
      if (task.hour_at < todayHour) {
        return 0;
      }
    }

    let percentage =
      (moment(finish).diff(today, "minutes") * 100) /
      moment(finish).diff(task.create_at, "minutes");

    if (percentage < 0) {
      return 0;
    }

    return percentage;
  },
};

const components = {
  Edit,
  DeleteButton,
  ProgressLinear,
};

export default {
  name: "Show",
  computed,
  methods,
  components,
};
</script>


<template>
  <div class="mt-5">
    <v-list-item-content>
      <v-list-item-title class="headline mb-1">
        Finished Tasks:
      </v-list-item-title>
      <v-list-item-subtitle>
        List of all tasks that have been completed
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-container>
      <v-alert
        text
        dense
        color="teal"
        icon="mdi-clock-fast"
        border="left"
        v-if="emptyList"
      >
        Sorry, you don't have any finished tasks :(
        <br />
        Try to finish a task ...?
      </v-alert>

      <v-alert
        v-else
        v-show="task.status"
        @click="getTask(task)"
        border="right"
        :key="index"
        v-for="(task, index) in getTasks['All'].list"
        dark
        :color="getStatus(task.finish_at)"
      >
        {{ task.name }}
      </v-alert>
    </v-container>
  </div>
</template>

<script>
import ChooseListTask from "../../components/ChooseListTask";
import { mapGetters } from "vuex";
import moment from "moment";
import { stringToUrl, emptyList } from "../../helpers/helper";

const methods = {
  getStatus(time) {
    let daysLeft = -moment(new Date()).diff(time, "days");
    if (daysLeft <= 2) return "error";
    if (2 <= daysLeft && daysLeft <= 7) return "info";
    return "success";
  },
  getTask(task) {
    this.$router.push({
      name: "task.show",
      params: { id: stringToUrl(task.name), taskId: task.id },
    });
  },
};

const components = { ChooseListTask };

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  emptyList() {
    return emptyList(this.getTasks, "All", true);
  },
};

export default {
  name: "FinishedTasks",
  components,
  computed,
  methods,
};
</script>

<style scoped>
</style>
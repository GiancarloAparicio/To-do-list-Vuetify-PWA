<template>
  <div class="mt-5">
    <ChooseListTask />
    <v-container>
      <v-alert
        border="right"
        :key="index"
        v-for="(task, index) in getTasks[this.getUser.listTaskCurrent]"
        dense
        :type="getStatus(task.finish_at)"
      >
        {{ task.name }}
      </v-alert>
    </v-container>
    <ButtonPlus />
  </div>
</template>

<script>
import ChooseListTask from "../../partials/ChooseListTask";
import ButtonPlus from "../../partials/ButtonPlus";
import moment from "moment";
import { mapGetters } from "vuex";

const components = {
  ChooseListTask,
  ButtonPlus,
};

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  ...mapGetters("user", ["getUser"]),
};

const methods = {
  getStatus(time) {
    let daysLeft = -moment(new Date()).diff(time, "days");
    if (daysLeft <= 2) return "error";
    if (2 <= daysLeft && daysLeft <= 7) return "info";
    return "success";
  },
};

export default {
  name: "Task",
  components,
  computed,
  methods,
};
</script>


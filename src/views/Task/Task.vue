<template>
  <div class="mt-5">
    <router-view v-if="isRouteChildren" />

    <div v-else>
      <ChooseListTask />

      <v-container>
        <v-alert
          text
          dense
          color="teal"
          icon="mdi-clock-fast"
          border="left"
          v-if="emptyList"
        >
          Sorry, the list you choose doesn't have any assigned tasks :(
          <br />
          Try again...?
        </v-alert>

        <v-alert
          v-else
          v-show="!task.status"
          @click="getTask(task)"
          border="right"
          :key="index"
          v-for="(task, index) in getTasks[this.getUser.listTaskCurrent].list"
          dark
          :color="getStatus(task.finish_at)"
        >
          {{ task.name }}
        </v-alert>
      </v-container>
      <ButtonPlus />
    </div>
  </div>
</template>

<script>
import ChooseListTask from "../../components/ChooseListTask";
import ButtonPlus from "../../partials/ButtonPlus";
import moment from "moment";
import { mapGetters } from "vuex";
import { stringToUrl, emptyList } from "../../helpers/helper";

const components = {
  ChooseListTask,
  ButtonPlus,
};

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  ...mapGetters("user", ["getUser"]),
  emptyList() {
    return emptyList(this.getTasks, this.getUser.listTaskCurrent);
  },
  isRouteChildren() {
    if (this.$route.name !== "task") {
      return true;
    }
    return false;
  },
};

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

export default {
  name: "Task",
  components,
  computed,
  methods,
};
</script>

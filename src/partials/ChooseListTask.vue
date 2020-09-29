<template>
  <v-select
    block
    dense
    outlined
    v-model="select"
    :items="tasks"
    label="List task"
  ></v-select>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { listTask } from "../store/actions/user";

const data = () => ({
  select: "All tasks",
});

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  tasks() {
    let listTask = ["All tasks"];
    for (let task in this.getTasks) {
      listTask.unshift(task);
    }
    return listTask;
  },
};

const watch = {
  select() {
    this.changeUser(listTask(this.select));
    return this.select;
  },
};

const methods = {
  ...mapActions("user", ["changeUser"]),
};

export default {
  name: "Task",
  data,
  computed,
  watch,
  methods,
};
</script>

<style scoped>
.v-btn {
  z-index: 0 !important;
}
</style>
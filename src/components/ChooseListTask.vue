<template>
  <div>
    <v-select
      v-if="emptyList"
      block
      dense
      outlined
      disabled
      v-model="select"
      :items="listTask"
      label="List task"
    />
    <v-select
      v-else
      block
      dense
      outlined
      v-model="select"
      :items="listTask"
      label="List task"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getAllLists } from "../helpers/helper";

const data = () => ({
  select: "All",
});

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  ...mapGetters("user", ["getUser"]),
  listTask() {
    if (this.getUser.listTaskCurrent) {
      this.select = this.getUser.listTaskCurrent;
    }
    let listTask = getAllLists(this.getTasks, this.all);

    return listTask;
  },
  emptyList() {
    return JSON.stringify(this.listTask) == JSON.stringify(["All"]) ||
      JSON.stringify(this.listTask) == JSON.stringify([])
      ? true
      : false;
  },
};

const props = {
  all: {
    default: true,
  },
};

const watch = {
  select() {
    if (this.select !== undefined) this.changeListCurrent(this.select);
    return this.select;
  },
  "getUser.listTaskCurrent"() {
    this.select = this.getUser.listTaskCurrent;
  },
};

const methods = {
  ...mapActions("user", ["changeListCurrent"]),
};

export default {
  name: "ChooseListTask",
  data,
  computed,
  watch,
  methods,
  props,
};
</script>

<style scoped>
.v-btn {
  z-index: 0 !important;
}
</style>

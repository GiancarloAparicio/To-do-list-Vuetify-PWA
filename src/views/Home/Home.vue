<template>
  <div>
    <p class="ml-3 text-h5">Task Summary</p>
    <v-divider class="py-4" />

    <v-card>
      <ProgressLinear
        title="Completed"
        icon="mdi-check-bold"
        :invert="true"
        :value="getPercentageCompleted"
        @click="goToCompleted()"
      />
      <ProgressLinear
        title="Remaining"
        icon="mdi-alert-octagon"
        :value="getPercentageIncomplete"
        @click="goToIncomplete()"
      />

      <v-card-text>
        <div class="font-weight-bold ml-8 mb-2">Last tasks</div>

        <v-timeline align-top dense>
          <v-timeline-item v-for="(task, index) in lastTask" :key="index" small>
            <div @click="goToTask(task)">
              <div class="font-weight-normal">
                <strong>{{ task.name }}</strong> <>
                {{ calculateTime(task.create_at) }}
              </div>
              <div>{{ task.description }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProgressLinear from "../../components/ProgressLinear";
import moment from "moment";
import { stringToUrl } from "../../helpers/helper";

const data = () => ({
  time: 50,
});

const methods = {
  calculateTime(timeCreated) {
    return moment(timeCreated, "YYYY-MM-DD HH:mm:ss").calendar();
  },
  goToTask(task) {
    this.$router.push({
      name: "task.show",
      params: { id: stringToUrl(task.name), task: task },
    });
  },
  goToIncomplete() {
    this.$router.push({
      name: "task",
    });
  },
  goToCompleted() {
    this.$router.push({
      name: "task.ends",
    });
  },
};

const computed = {
  ...mapGetters("listTask", [
    "getPercentageIncomplete",
    "getPercentageCompleted",
    "getLastTask",
  ]),
  lastTask() {
    return this.getLastTask;
  },
};

const components = {
  ProgressLinear,
};

export default {
  name: "Home",
  data,
  methods,
  components,
  computed,
};
</script>

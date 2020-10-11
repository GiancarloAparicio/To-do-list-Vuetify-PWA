<template>
  <div>
    <h2>Task Summary</h2>
    <v-divider class="py-4" />

    <v-card>
      <ProgressLinear
        title="Completed"
        icon="mdi-check-bold"
        :invert="true"
        :value="getPercentageCompleted"
      />
      <ProgressLinear
        title="Remaining"
        icon="mdi-alert-octagon"
        :value="getPercentageIncomplete"
      />

      <v-card-text>
        <div class="font-weight-bold ml-8 mb-2">Last tasks</div>

        <v-timeline align-top dense>
          <v-timeline-item v-for="(task, index) in lastTask" :key="index" small>
            <div>
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

//:color="message.color"  (task linea)
const data = () => ({
  time: 50,
});

const methods = {
  calculateTime(time) {
    return moment(time, "DD-MM-YYYY HH:mm:ss").calendar();
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

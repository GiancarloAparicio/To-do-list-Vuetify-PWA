<template>
  <v-card>
    <v-card-text>
      <v-list>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ $route.params.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ getList.create_at }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Description</v-list-item-title>
            <v-list-item-subtitle>
              {{ getList.description }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list three-line subheader>
        <v-subheader>General</v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="notifications"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-subtitle>
              Notify about tasks that I have yet to finish
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-container class="d-flex justify-center pb-8">
      <DeleteListButton
        @click="dialog = false"
        dark
        :currentList="$route.params.id"
      />

      <v-btn class="mx-4 mt-10" large dark color="green">
        <v-icon left> mdi-pencil </v-icon>
        Edit
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import DeleteListButton from "../../components/DeleteListButton";

const data = () => ({
  dialog: false,
  notifications: false,
  sound: true,
});

const methods = {
  //
};

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  getList() {
    return this.getTasks[this.$route.params.id];
  },
};

const props = {
  open: {
    default: false,
  },
};

const components = {
  DeleteListButton,
};

export default {
  name: "EditList",
  data,
  props,
  methods,
  computed,
  components,
};
</script>

<style scoped>
</style>
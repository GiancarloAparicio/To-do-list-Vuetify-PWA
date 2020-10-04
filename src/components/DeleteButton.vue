<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          class="mx-4 mt-10"
          large
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left> mdi-alert </v-icon>
          Delete
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="red--text"> {{ title }} </v-card-title>

        <v-card-text>
          {{ content }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined color="success" @click="dialog = false">
            <v-icon left> mdi-thumb-up-outline </v-icon>
            Cancel
          </v-btn>
          <v-btn outlined color="error" @click="deleteData">
            <v-icon left> mdi-alert-decagram-outline </v-icon>
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
const data = () => ({
  dialog: false,
});

const methods = {
  deleteData() {
    this.dialog = false;
    this.$emit("delete");
  },
};

const props = {
  title: {
    default: "Delete data",
  },
  content: {
    default:
      " Are you sure you want to delete it? After this, you will not be able to recover your data",
  },
};

export default {
  name: "DeleteButton",
  data,
  methods,
  props,
};
</script>

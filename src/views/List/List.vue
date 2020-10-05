<template>
  <v-card>
    <v-card-text>
      <v-list>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ $route.params.id }}
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
            <v-checkbox disabled v-model="getList.notification"></v-checkbox>
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
      <DeleteButton
        title="Delete list task"
        content="Are you sure you want to delete this to-do list? After this you will
          not be able to recover your data"
        @delete="deleteList"
      />

      <SaveListForm
        @saveList="updateList"
        :icon="false"
        title="Update current list"
      />
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DeleteButton from "../../components/DeleteButton";
import SaveListForm from "../../components/SaveListForm";
import { getAllLists } from "../../helpers/helper";

const data = () => ({
  dialog: false,
});

const methods = {
  ...mapActions("listTask", ["deleteListTask", "editListTask"]),
  updateList(data) {
    let list = JSON.parse(data);
    let name = getAllLists(JSON.parse(data))[0];

    let update = {
      newList: {
        [name]: {
          ...list[name],
          id: this.getList.id,
          list: [
            ...this.getList.list.map((task) => {
              if (task.list === this.$route.params.id) {
                task.list = name;
              }
              return task;
            }),
          ],
        },
      },
      newName: name,
      old: this.$route.params.id,
    };

    this.editListTask(update);
    this.$router.push({
      name: "task",
    });
  },
  deleteList() {
    this.deleteListTask(this.$route.params.id);
    this.$router.push({
      name: "task",
    });
  },
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
  DeleteButton,
  SaveListForm,
};

export default {
  name: "List",
  data,
  props,
  methods,
  computed,
  components,
};
</script>

<style scoped></style>

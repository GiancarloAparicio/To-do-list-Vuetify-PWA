<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="10" md="8" lg="8" xl="6" class="mx-auto">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">
              Configuration
            </v-list-item-title>
            <v-list-item-subtitle>Personal </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-bookmark-check-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>50%</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-alarm-check</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>50%</v-list-item-subtitle>
          </v-list-item>
        </v-list-item>

        <v-form ref="form" lazy-validation>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-list-item-icon>
            <v-list-item>Theme: </v-list-item>

            <v-list-item>
              <v-select
                v-model="theme"
                :items="['Dark', 'Light']"
                label="Items"
              />
            </v-list-item>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-message-cog</v-icon>
            </v-list-item-icon>
            <v-list-item>General notifications: </v-list-item>

            <v-checkbox v-model="notifications" />
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-camera</v-icon>
            </v-list-item-icon>
            <v-list-item>Photo: </v-list-item>
            <v-list-item class="w-30">
              <v-file-input
                v-model="photo"
                chips
                show-size
                counter
                multiple
                accept="image/png, image/jpeg, image/bmp"
                label="File"
              />
            </v-list-item>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon> mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item>Name: </v-list-item>
            <v-list-item>
              <v-text-field
                v-model="name"
                label="Enter name"
                :rules="dataRules"
                hide-details="auto"
              />
            </v-list-item>
          </v-list-item>

          <v-container class="d-flex justify-center py-10">
            <div class="text-center">
              <v-btn
                @click="save"
                class="mx-4 mt-10"
                large
                depressed
                color="green"
                dark
              >
                <v-icon left> mdi-check-bold</v-icon>
                Save
              </v-btn>
            </div>

            <DeleteButton
              @delete="deleteAll"
              button="Reset all"
              content="Are you sure you want to delete all your information? After this, you will not be able to recover your data"
            />
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import { savePictureToLocal } from "../../helpers/helper";
import DeleteButton from "../../components/DeleteButton";

const data = () => ({
  photo: null,
  theme: "Light",
  notifications: false,
  name: "",
});

const methods = {
  ...mapActions("user", ["editUser"]),

  deleteAll() {
    this.$refs.form.reset();
    this.$refs.form.validate();
    this.$refs.form.resetValidation();
    localStorage.clear();
    location.reload();
  },

  save() {
    if (this.theme && this.name) {
      localStorage.setItem("name", this.name);
      localStorage.setItem("theme", this.theme);
      localStorage.setItem("notifications", this.notifications);

      this.editUser({
        name: this.name,
        theme: this.theme,
        notifications: this.notifications,
      });
      if (this.photo) {
        savePictureToLocal(this.photo, this.editUser);
      }
      this.$router.push({ name: "task" });
    }
  },
};

const computed = {
  ...mapGetters("user", ["getUser"]),
  dataRules() {
    this.name = this.getUser.name;
    this.notifications = this.getUser.notifications;
    this.theme = this.getUser.theme === "Dark" ? "Dark" : "Light";

    return [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ];
  },
};

const components = {
  DeleteButton,
};

export default {
  name: "Settings",
  data,
  methods,
  computed,
  components,
};
</script>

<style scoped></style>

<template>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="12" xs="12" sm="8" md="4" lg="5" xl="6">
        <img
          class="white--text align-end"
          height="450px"
          src="../../assets/404.jpg"
        />
      </v-col>

      <v-col cols="12" xs="12" sm="8" md="8" lg="7" xl="6">
        <h1 class="text-h3 blue--text">Oops</h1>
        <h2 class="text-h4 grey--text">Something went wrong. :(</h2>
        <h3 class="text-h5 grey--text">Try again. :)</h3>
        <v-btn @click="gotoBack" tilde color="success">
          <v-icon left> mdi-thumb-up-outline </v-icon>
          Go back
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const methods = {
  gotoBack() {
    this.$router.push({
      name: "home",
    });
  },
};

export default {
  name: "404",
  methods,
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

[class^="col"] {
  padding: 5px 15px;
  margin: auto;
}

[class^="text"] {
  display: block;
  padding: 15px 10px;
}

.v-btn {
  display: block;
  margin: auto;
}
</style>
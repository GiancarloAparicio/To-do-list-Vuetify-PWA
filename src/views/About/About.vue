<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="../../assets/about_fondo.jpg"
    >
      <v-card-title>
        <a
          target="_blank"
          class="white--text"
          href="https://github.com/GiancarloAparicio"
          >Author: Erick Ramos A.
        </a>
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> Icons </v-card-subtitle>

    <v-card-text class="text--primary">
      <a
        target="_blank"
        class="black--text"
        href="https://www.flaticon.es/autores/dinosoftlabs"
      >
        DinosoftLabs
      </a>
    </v-card-text>

    <v-card-subtitle class="pb-0"> Image </v-card-subtitle>

    <v-card-text class="text--primary">
      <a
        target="_blank"
        class="black--text"
        href="https://pixabay.com/es/users/isherman-17230502/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5536397"
      >
        Inna Sherman
      </a>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  name: "About",
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
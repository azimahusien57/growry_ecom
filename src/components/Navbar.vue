<template>
  <v-app-bar color="white" flat>
    <v-badge color="#D5F0DB" dot>
      <v-img src="../assets/icon/icon-cart-empty.svg" class="icon_cart"></v-img>
    </v-badge>
    <v-toolbar-title class="ml=4">
      <span class="green--text"></span><strong>RainBoz</strong>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge color="#FF6D59" overlap content="2" class="mr-2 mt-1">
      <v-avatar color="#FFF0EE" size="40">
        <v-icon x-small color="#FF6D59">fa fa-heart</v-icon>
      </v-avatar>
    </v-badge>
    <v-badge color="#367E18" overlap content="2" class="mr-2 mt-1">
      <v-avatar color="#ECF7EE" size="40">
        <v-icon x-small color="#367E18">fas fa-shopping-cart</v-icon>
      </v-avatar>
    </v-badge>
    <span class="grey--text d-none d-sm-flex"
      >Hello,<strong>chika</strong></span
    >
    <v-avatar size="40" class="ml-2">
      <v-img src="../assets/pp/icon-testimonial-3.png"></v-img>
    </v-avatar>
    <v-btn icon dark>
      <v-icon x-small color="#878A94">fas fa-chevron-down</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<!-- script js -->
<script>
// import { defineComponent } from '@vue/composition-api'

export default {};
</script>
<!-- css -->
<style>
.v-toolbar_title {
  font-size: 1rem !important;
}
</style>

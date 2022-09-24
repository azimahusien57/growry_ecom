<template>
  <v-app>
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto rounded-xl" flat>
            <v-img
              src="../assets/bg/activity-3.png"
              max-height="100%"
              max-width="100%"
              contain
            >
              <v-card-title class="top ml-6">
                <h1 class="title1">Order Your</h1>
              </v-card-title>
              <v-card-title class="ml-6 mt-n8">
                <h2 class="title2">Daily RainBoz</h2>
              </v-card-title>
              <v-card-text class="ml-10">
                <h3>#Free Kolsultan</h3>
              </v-card-text>
              <v-card- text class="ml-5">
                <v-row>
                  <v-col cols="4" class="marginRight">
                    <v-text-field
                      label=" Search your daily rainboz"
                      class="d-none d-sm-none d-md-flex"
                      filled
                      solo
                      prepend-iner-icon="mdi-magnify"
                      flad
                      rounded
                      outlined
                      background-color="#D5F0DB"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="4" class="marginLeft">
                    <v-btn
                      color="green"
                      rounded
                      dark
                      x-small
                      class="py-7 d-none d-sm-none d-md-flex"
                      >Search</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card->
            </v-img>
          </v-card>
          <v-toolbar flat color="transparent">
            <v-toolbar-title class="text-h6">Category</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_exlusive" group color="#367E18">
              <v-btn>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>
          <Category />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Category from "@/components/Category.vue";

export default {
  name: "Home",
data:()=>({
toggle_exlusive:1,
}),
  components: {
    Navbar,
    Category
},
};
</script>
<style>
.marginLeft {
  margin-left: -90px;
}

.mtop {
  margin-top: 100px;
}

.mbottom {
  margin-bottom: 100px;
}

.v-card.boarderme {
  border: 2px solid green !important;
}

.v-card.boarderout {
  border: 1px solid #d5f0db !important;
}

.v-btn:not(.v-btn--round).v-size--default.add {
  min-width: 0px !important;
}

.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}

@media only screen and (max-width: 600px) {
  h2.title1 {
    font-size: 15px;
  }

  .top {
    margin-top: 20px;
  }
}

@media only screen and (min-width: 600px) {
  .top {
    margin-top: 70px;
  }
}

@media only screen and (min-width: 768px) {
  .top {
    margin-top: 120px;
  }
}
</style>

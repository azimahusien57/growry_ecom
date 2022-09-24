<template>
  <v-item-group mandatory class="mt-n1">
    <v-container>
      <v-row justify="center" class="space">
        <v-col
          cols="12"
          xs="12"
          sm="4"
          md="2"
          v-for="(item, index) in categories"
          :key="index"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? '#D5F0DB' : 'white'"
              :class="active ? 'borderme' : 'borderout'"
              class="d-flex align-center rounded-lg mx-2"
              dark
              height="180"
              flat
              @click="toggle"
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line class="text-center">
                    <v-list-item-content>
                      <div align="center" justify="center">
                        <v-img
                          :src="imageAssets(`categories/${item.img}`)"
                          max-height="80"
                          max-width="80"
                          contain
                        ></v-img>
                      </div>
                      <v-list-item-subtitle
                        :class="active ? 'green--text' : 'black--text'"
                        class="caption mt-4"
                      >
                        {{ item.title }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
<!-- scrip js -->
<script>
  export default {
    data() {
      return {
        categories: [
          {
            img: "categories-baby.svg",
            title: "meet &fish",
          },
          {
            img: "categories-baby.svg",
            title: "meet &fish",
          },
          {
            img: "categories-baby.svg",
            title: "meet &fish",
          },
          {
            img: "categories-baby.svg",
            title: "meet &fish",
          },
          {
            img: "categories-baby.svg",
            title: "meet &fish",
          },
          {
            img: "categories-baby.svg",
            title: "meet &fish",
          },
        ],
      };
    },
  };
</script>

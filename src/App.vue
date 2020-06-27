<template>
  <div id="app">
    <v-app>
      <v-main>
        <Header />
        <router-view />
        <!-- <Footer /> -->
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}
</style>

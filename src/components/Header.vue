<template>
  <nav>
    <v-toolbar dense flat color="success">
      <v-app-bar-nav-icon color="white" @click="toggleDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text text-uppercase">LOG BOOK</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/" color="white">
        <v-icon color="white" left>home</v-icon>Home
      </v-btn>

      <v-btn text to="/about" color="white">
        <v-icon color="white" left>info</v-icon>About
      </v-btn>

      <v-btn icon>
        <v-icon color="white">more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <Sidebar v-bind:adrawer="drawer" />
  </nav>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
<template>
  <v-navigation-drawer app flat v-model="drawer" color="info">
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar size="100">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" />
        </v-list-item-avatar>

        <v-list-item-content left>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["adrawer"],
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Photos", icon: "insert_photo" },
        { title: "About", icon: "help_outline" }
      ]
    };
  },
  computed: {
    drawer: {
      get: function() {
        return this.adrawer;
      },
      set: function() {}
    }
  }
};
</script>

<style>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
</style>
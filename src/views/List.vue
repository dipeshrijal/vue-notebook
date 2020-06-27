<template>
  <v-card class="mx-auto mt-5" max-width="400" dark :color="grandTotal > 0 ? 'green' : 'red'">
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{grandTotal}}</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>{{grandTotal > 0 ? 'done' : 'cancel'}}</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>

    <v-list class="transparent">
      <v-list-item v-for="item in forecast" :key="item.day">
        <v-list-item-subtitle>{{ item.price }}/{{item.amount}}</v-list-item-subtitle>

        <v-list-item-icon>
          <v-icon>{{ item.type === "Buy" ? "remove_circle" : "add_circle" }}</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle class="text-right">{{ total(item) }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>Full Report</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      forecast: []
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    grandTotal() {
      let total = 0;
      this.forecast.map(number => {
        if (number.type === "Sell") {
          total += number.price * number.amount;
        } else {
          total -= number.price * number.amount;
        }
      });
      return total.toFixed(4);
    }
  },
  methods: {
    total: function(item) {
      return (item.price * item.amount).toFixed(4);
    },
    initialize() {
      axios.get(`http://localhost:4000/${this.id}`).then(response => {
        this.forecast = response.data;
      });
    }
  }
};
</script>
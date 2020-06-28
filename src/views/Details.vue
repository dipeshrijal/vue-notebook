<template>
  <v-card
    class="mx-auto mt-5"
    max-width="400"
    dark
    :color="grandTotal > 0 ? 'green darken-1' : 'red darken-1'"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{id}}</v-list-item-title>
        <!-- <v-list-item-subtitle>{{Date()}}</v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>

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
      <!-- <v-list-item-subtitle>48%</v-list-item-subtitle> -->
    </v-list-item>

    <v-list class="transparent">
      <v-list-item v-for="item in forecast.transactions" :key="item.day">
        <v-list-item-subtitle>{{ item.price }}/{{item.amount}}</v-list-item-subtitle>

        <v-list-item-icon>
          <v-icon>{{ item.type === "Buy" ? "remove_circle" : "add_circle" }}</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle class="text-right">{{ total(item) }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      forecast: {
        transactions: []
      }
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    grandTotal() {
      let total = 0;

      this.forecast.transactions.map(number => {
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
        this.forecast = response.data[0];
      });
    }
  }
};
</script>
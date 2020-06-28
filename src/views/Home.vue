<template>
  <v-container>
    <v-row>
      <v-col class md="3" v-for="stock in stocks" :key="stock.ticker">
        <v-card
          class="mx-auto"
          max-width="344"
          :class="grandTotal(stock) > 0 ? 'green darken-1': 'red darken-1'"
        >
          <v-card-text class="white--text">
            <p class="display-1 text--white">{{stock.ticker}}</p>
            <p>{{grandTotal(stock)}}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="white" :to="stock.ticker">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    stocks: []
  }),
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      axios.get("http://localhost:4000").then(response => {
        this.stocks = response.data;
      });
    },
    grandTotal(stock) {
      let total = 0;

      stock.transactions.map(number => {
        if (number.type === "Sell") {
          total += number.price * number.amount;
        } else {
          total -= number.price * number.amount;
        }
      });
      return total.toFixed(4);
    }
  }
};
</script>
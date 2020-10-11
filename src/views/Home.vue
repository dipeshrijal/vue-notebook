<template>
  <v-container>
    <!-- <v-btn text @click="hello">Today</v-btn> -->

    <v-col cols="12" sm="6" md="4">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu2 = false"
          @change="hello"
        ></v-date-picker>
      </v-menu>
    </v-col>

    <v-divider></v-divider>

    <v-text-field
      label="Search"
      prepend-icon="search"
      v-model="search"
    ></v-text-field>
    <v-row>
      <v-col md="3" v-for="stock in stocks" :key="stock.ticker">
        <v-card
          class="mx-auto"
          max-width="344"
          :class="grandTotal(stock) > 0 ? 'green darken-1' : 'red darken-1'"
        >
          <v-card-text class="white--text">
            <p class="display-1 text--white">{{ stock.ticker }}</p>
            <p class="font-weight-bold">{{ grandTotal(stock) }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="white" :to="stock.ticker">Details</v-btn>
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
    stocks: [],
    search: "",
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
  created() {
    this.initialize();
  },
  watch: {
    search: function (val) {
      axios
        .get(`http://localhost:4000?query=${val.toUpperCase()}`)
        .then((response) => {
          this.stocks = response.data;
        });
    },
  },
  methods: {
    hello() {
      console.log(this.date);
      axios.get(`http://localhost:4000?date=${this.date}`).then((response) => {
        this.stocks = response.data;
      });
    },
    loss() {
      axios.get(`http://localhost:4000`).then((response) => {
        console.log(response.data);
        let total = response.data
          .map((stock) => {
            console.log(stock.transactions.amount);
            return stock.transactions;
          })
          .map((amount) => {
            console.log(amount.amount);
            return amount.amount;
          })
          .reduce((x, y) => {
            x + y, 0;
          });
        console.log(total);
      });
    },
    initialize() {
      axios.get("http://localhost:4000").then((response) => {
        this.stocks = response.data;
      });
    },
    grandTotal(stock) {
      let total = 0;
      stock.transactions.map((number) => {
        // console.log(number);
        total += parseFloat(number.amount);
      });
      return total.toFixed(2);
    },
  },
};
</script>
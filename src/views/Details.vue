<template>
  <v-container>
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
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr class="primary font-weight-bold white--text">
            <th class="text-left">Date</th>
            <th class="text-left">Description</th>
            <th class="text-left">Action</th>
            <th class="text-left">Price</th>
            <th class="text-left">Quantity</th>
            <th class="text-left">Amount</th>
          </tr>
        </thead>
        <v-divider></v-divider>
        <tbody>
          <tr
            v-for="item in stocks.transactions"
            :key="item.name"
            class="font-weight-bold white--text"
            :class="item.action === 'Buy' ? 'green' : 'red '"
          >
            <td>{{ fromatdate(item.date) }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.action }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.amount }}</td>
          </tr>
        </tbody>
        <v-divider></v-divider>
        <tfoot>
          <tr
            :class="grandTotal > 0 ? 'green' : 'red'"
            class="font-weight-bold white--text"
          >
            <td colspan="5">Total</td>
            <td>{{ grandTotal }}</td>
          </tr>
        </tfoot>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  props: ["id"],
  data() {
    return {
      url: "http://52.167.3.162",
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      stocks: {
        transactions: [],
      },
    };
  },
  created() {
    this.initialize();
  },
  computed: {
    grandTotal() {
      let total = 0;
      this.stocks.transactions.map((number) => {
        total += parseFloat(number.amount);
      });
      return total.toFixed(2);
    },
  },
  methods: {
    hello() {
      axios.get(`${this.url}/${this.id}?date=2020-10-09`).then((response) => {
        let ret = response.data[0].transactions.filter((d) => {
          return new Date(d.date) >= new Date(this.date);
        });
        this.stocks.transactions = ret;
      });
    },
    fromatdate(date) {
      return moment(date).format("YYYY/MM/DD");
    },
    initialize() {
      axios.get(`${this.url}/${this.id}`).then((response) => {
        this.stocks = response.data[0];
      });
    },
  },
};
</script>
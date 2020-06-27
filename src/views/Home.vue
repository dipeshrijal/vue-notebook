
<template>
  <v-card>
    <v-container>
      <v-row>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-row>
    </v-container>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:item.ticker="{ item }">
        <router-link tag="tr" :to="item.ticker">{{item.ticker}}</router-link>
      </template>
      <template v-slot:item.total="{ item }">{{ total(item) }}</template>
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Logs</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-form v-model="isValid">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.ticker"
                          :rules="[rules.required]"
                          label="Ticker"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          :rules="[rules.required]"
                          v-model="editedItem.type"
                          :items="items"
                          label="Type"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.price"
                          prefix="$"
                          :rules="[rules.required]"
                          label="Price"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.amount"
                          :rules="[rules.required]"
                          label="Amount"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" :disabled="!isValid" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>



<script>
import axios from "axios";
export default {
  data: () => ({
    isValid: true,
    search: "",
    dialog: false,
    items: ["Buy", "Sell"],
    rules: {
      required: value => !!value || "Required.",
      counter: value => value.length <= 20 || "Max 20 characters",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    },
    headers: [
      {
        text: "TICKER",
        align: "start",
        sortable: false,
        value: "ticker"
      },
      { text: "Type", value: "type" },
      { text: "Price", value: "price" },
      { text: "Amount", value: "amount" },
      { text: "Total", value: "total" },
      {
        text: "Actions",
        value: "actions",
        sortable: false,
        align: "end",
        class: "right"
      }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      ticker: "",
      type: "",
      price: "",
      amount: ""
    },
    defaultItem: {
      ticker: "",
      type: "",
      price: "",
      amount: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    total(item) {
      return (item.price * item.amount).toFixed(4);
    },
    initialize() {
      axios.get("http://localhost:4000").then(response => {
        this.desserts = response.data;
      });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = item;
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.initialize();
      });
    },

    save() {
      if (this.editedItem._id) {
        axios
          .put(`http://localhost:4000/${this.editedItem._id}`, this.editedItem)
          .then();
      } else {
        axios.post("http://localhost:4000/", this.editedItem).then();
      }
      this.close();
    }
  }
};
</script>
<template>
  <v-data-table :headers="headers" :items="content" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title> {{ heading }} </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-btn
          color="primary"
          dark
          class="mb-2"
          @click="$router.push(`${btnLink}`)"
        >
          New {{ btnName }}
        </v-btn>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <!-- <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon> -->
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ["heading", "headers", "content", "btnName", "btnLink", "delete"],
  data: function () {
    return {
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      id: null,
      url: null
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    //   this.initialize()
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.content.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.id = item.id;
      this.url = item.img;
      this.editedIndex = this.content.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
    //   this.content.splice(this.editedIndex, 1);
    this.delete(this.id, this.url);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.content[this.editedIndex], this.editedItem);
      } else {
        this.content.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

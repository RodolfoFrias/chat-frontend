<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ roomType }} Room
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ roomType }} Room</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-if="roomType === 'Create'">

              <v-col cols="12">
                <v-text-field
                  label="Room Name*"
                  required
                ></v-text-field>
              </v-col>

            </v-row>

            <v-row v-else>
              <v-col cols="12">
                <v-text-field
                  label="Room Code*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            {{ roomType }} Room
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: 'CreateRoom',
    props: ['roomType'],
    data: () => ({
      dialog: false,
    }),
  }
</script>

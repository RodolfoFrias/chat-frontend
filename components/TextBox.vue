<template>
  <v-col class="text-box" cols="12" lg="10">
    <v-form
      ref="form"
      @submit.prevent="sendMessage"
    >
      <v-text-field
        label="Type something"
        v-model="text"
        append-icon="mdi-send-circle-outline"
        required
      ></v-text-field>
    </v-form>
  </v-col>
</template>

<script>
export default {
  name: 'TextBox',

  data() {
    return {
      text: '',
      rules: [v => !!v || "Text is required"],
    }
  },

  mounted() {
    this.socket = this.$store.getters['nuxtWebSocket']
    console.log('Child socket', this.socket)
  },

  methods: {
    async sendMessage() {
        if (this.$refs.form.validate()) {
          const textToSend = this.text
          this.resetForm()
          await this.socket.emitP('chatMessage', textToSend)
        }
    },
    resetForm() {
      this.text = ''
      this.$refs.form.resetValidation();
    }
  }
}
</script>

<style lang="css">
  .text-box {
    bottom: 0;
    border: 1px solid white;
    border-radius: 20px;
  }
</style>

<template>
  <v-row justify="center" align="center" style="height: 90vh">
    <v-col cols="12" lg="12" sm="8" md="6" style="height: 100%">
      <Message :messageToShow="messageToShow" />
    </v-col>
    <TextBox @message-sent='showMessage' />
  </v-row>
</template>

<script>
import TextBox from '../components/TextBox.vue'
import Message from '../components/Message.vue'
export default {
  components: { TextBox, Message },
  name: 'chat',
  data: () => {
    return {
      messageToShow: ''
    }
  },
  methods: {
    showMessage(messageToShow) {
      this.messageToShow = messageToShow
      console.log('Message-->', messageToShow)
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      name: 'chat'
    })

    this.socket.on('message', (msg, cb) => {
      console.log('Message', msg)
    })
    console.log('Socket', this.socket)
  }

}
</script>

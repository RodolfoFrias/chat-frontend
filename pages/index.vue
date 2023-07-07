<template>
  <v-row justify="center">
    <v-col style="margin-top: 5%; margin-left: 1%" cols="12" lg="12" sm="8" md="6">
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
  layout: 'chat',
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

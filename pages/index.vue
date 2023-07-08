<template>
  <v-row justify="center" >
    <v-col style="margin-top: 5%; margin-left: 1%" cols="12" lg="12" sm="8" md="6">
      <Message v-for="message in allMessages" :key="message" :messageToShow="message" />
    </v-col>
    <TextBox/>
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
      message: '',
      allMessages: []
    }
  },
  beforeCreate() {
    this.socket = this.$nuxtSocket({
      name: 'chat'
    })
    this.$store.commit('initSocket', this.socket)
  },
  async mounted() {
    this.socket.on('message', (msg) => {
      this.allMessages.push(msg)
    })
    await this.socket.emitP('joinMainRoom', { room: 'main' })
  }

}
</script>

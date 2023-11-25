<template>
  <v-row justify="center" class="row__container--chat">
    <v-col ref="scrollableDiv" cols="12" lg="12" sm="8" md="6" class="col__container--chat">
      <Message v-for="message in allMessages" :key="message" :messageToShow="message" />
    </v-col>
    <v-col cols="12" class="col__container--textbox">
      <TextBox/>
    </v-col>
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
    await this.getAllMessages();
    this.socket.on('newMessage', async () => {
      await this.getAllMessages()
    })
    await this.socket.emitP('joinMainRoom', { room: 'main' })
  },

  methods: {
    async getAllMessages() {
      const allMessages = await this.$axios.get('get-messages', {
        params: {
          room: 'main'
        }
      })
      this.allMessages = allMessages.data.messages
      this.scrollToBottom()
    },
    scrollToBottom() {
      this.$refs.scrollableDiv.scrollTop = this.$refs.scrollableDiv.scrollHeight;
    }
  }

}
</script>

<style scoped>
  .row__container--chat {
    padding: 1%;
    width: 80%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    /* background-color: red; */
  }
  .col__container--chat {
    max-height:70vh;
    overflow-y: scroll;
    bottom: 0;
    border: 1px solid white;
    /* Styles for the scrollbar */
    scrollbar-width: thin;
    scrollbar-gutter: 1;
    scrollbar-color: #888 #d4d0d0; /* thumb color and track color */
    /* background-color: yellow; */
  }
  .col__container--textbox {
    display: grid;
    place-items: center;
    border: 1px solid white;
    /* background-color: blue; */
  }
</style>

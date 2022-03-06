<template>
  <v-row justify="center" align="center" style="height: 90vh">
    <v-col cols="12" lg="12" sm="8" md="6" style="height: 100%">
      <Message/>
    </v-col>
    <text-box/>
  </v-row>
</template>

<script>
import TextBox from '../components/TextBox.vue'
import Message from '../components/Message.vue'
export default {
  components: { TextBox, Message },
  name: 'chat'
}
</script>

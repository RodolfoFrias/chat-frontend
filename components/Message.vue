<template>
  <v-row >
    <!-- <v-col cols="12" >
      <div class="pa-4 primary rounded-pill" style="float: right">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus eum excepturi enderit eos, alias delectus tenetur? Repellat necessitatibus dignissimos fugiat debitis ad quidem.</p>
      </div>
    </v-col>
    <v-col cols="12" >
      <div class="pa-4 grey darken-1 rounded-pill" style="float: left">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elissitatibus dignissimos fugiat debitis ad quidem.</p>
      </div>
    </v-col> -->
    <v-col v-if="messageToShow" cols="12" >
      <div class="pa-4 grey darken-1 rounded-pill" style="float: left">
        <p>{{ messageToShow }}</p>
      </div>
    </v-col>
    <div v-else>
      You don't have any conversation with this person yet :c
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'Message',
  props: ['messageToShow']
}
</script>

<style lang="css">
  .bubble {
    background-color: white;
  }
</style>

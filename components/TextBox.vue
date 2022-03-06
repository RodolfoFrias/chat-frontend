<template>
  <v-col class="text-box" cols="12" lg="10">
    <v-text-field
      label="Type something"
      required
    ></v-text-field>
  </v-col>
</template>

<script>
export default {
  name: 'TextBox'
}
</script>

<style lang="css">
  .text-box {
    position: absolute;
    bottom: 0;
    border: 1px solid white;
    border-radius: 20px;
  }
</style>

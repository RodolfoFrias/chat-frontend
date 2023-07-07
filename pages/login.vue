<template>
  <v-row justify="center" align="center">
    <v-col cols="6" class="card">
      <div class="text-center">
        <p>Welcome to the chat</p>
        <p>If you do not have an account it will be created</p>

        <Notification :message="error" v-if="error"/>

      </div>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="username"
          :counter="10"
          :rules="usernameRules"
          label="Username"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          type="password"
          label="Password"
        ></v-text-field>

        <v-btn
          color="primary"
          @click="login"
        >
          Login
        </v-btn>

      </v-form>
    </v-col>
  </v-row>
</template>

<script>
  import Notification from '../components/Notification.vue'
  export default {
    components: {
      Notification
    },
    data: () => ({
      valid: true,
      username: '',
      usernameRules: [
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: '',
      passwordRules: [
        v => (v && v.length >= 8 && v.length <= 16) || 'Password must be between 8 and 16 characters',
      ],
      error: null
    }),

    methods: {
      async login () {
        try {
          const user = await this.$axios.post('login', {
            username: this.username,
            password: this.password
          })

          console.info('User-->',user)

          await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            },
          })

          this.$router.push('/')
        } catch (e) {
          this.error = e.response.statusText
        }
      }
    },
  }
</script>

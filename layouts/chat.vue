<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-col>
        <h3>Conversations</h3>
      </v-col>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />

      <v-spacer/>

      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <chat-room :roomType="joinType" />
        </v-list-item>

        <v-list-item>
          <chat-room :roomType="createType" />
        </v-list-item>

        <v-list-item class="logout__btn">
          <v-btn outlined>Logout</v-btn>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <Nuxt/>
  </v-app>
</template>

<script>
import ChatRoom from '../components/ChatRoom.vue'
export default {
  components: { ChatRoom },
  name: 'DefaultLayout',
  data () {
    return {
      joinType: 'Join',
      createType: 'Create',
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-message-text',
          title: 'Unknown',
          to: '/'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Chat'
    }
  }
}
</script>

<style>
  .logout__btn {
    position: absolute;
    bottom: 0;
    margin-left: 25%;
  }
</style>

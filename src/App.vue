<template>
  <v-app>
    <v-navigation-drawer app clipped temporary v-model="sideNav">
      <v-list>
        <!--
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
        -->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon v-if="userIsAuthenticated" @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-spacer/>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Vue Business Intelligence</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-if="!userIsAuthenticated"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}

        </v-btn>
        <v-menu v-model="menu" v-if="userIsAuthenticated" id="user" close-on-click>
          <v-btn icon slot="activator">
            <v-icon class="settings-icon" medium>more_vert</v-icon>
          </v-btn>
          <v-card text-xs-center>
            <v-list justify-center align-center>
              <v-list-tile>
                <v-btn
                  flat
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.link">
                  <v-icon left dark>{{ item.icon }}</v-icon>
                  {{ item.title }}

                </v-btn>
              </v-list-tile>

              <v-divider/>
              <v-list-tile>
                <v-btn
                  flat
                  @click="onLogout">
                  <v-icon left dark>exit_to_app</v-icon>
                  Logout
                </v-btn>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menu: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          exact
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" flat :color="isLoggedIn ? 'primary' : 'blue lighten-3'" class="white--text" >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text" light></v-toolbar-side-icon>
      <!-- <v-btn
        icon
        light
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn> -->

      <!-- <v-btn
        icon
        light
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        light
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" style="font-weight: 400"></v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-btn v-if="isLoggedIn"
        icon
        light
        @click.stop="rightDrawer = !rightDrawer"
      >
        <sign-in color="white" @click.prevent.stop></sign-in>
      </v-btn>
      <sign-in color="white" v-else></sign-in>
      
      
      
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon light>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-if="isLoggedIn" v-text="googleUser.profile.getName()"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span><strong>2018</strong> - v0.1</span>
    </v-footer>
  </v-app>
</template>

<script>
import SignIn from './components/SignIn'
import Vuex from 'vuex'

  export default {
    components: {
      SignIn
    },
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [{
          // icon: 'bubble_chart',
          // title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'My App'
      }
    },
    computed: {
      ...Vuex.mapGetters(['isLoggedIn', 'googleUser']),
    }
  }
</script>

<template>

  <transition name="slide-fade">
  <v-avatar v-if="isLoggedIn" size="36px">
   <img :src="googleUser.profile.getImageUrl()" :alt="googleUser.profile.getName()"> 
 </v-avatar>
   <v-btn :color="color" style="pointer-events: none;" v-else> 
    <g-signin-button style="pointer-events: all !important;"
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign In
  </g-signin-button>
  </v-btn>
</transition>

</template>

<script>
import Vuex from 'vuex'
import GSignInButton from 'vue-google-signin-button'

var credentials = require('../credentials.js')
export default {

  name: 'sign-in',
  props: ['color'],
  components: {},
  data () {
    return {
      credentials: credentials,
      googleSignInParams: {
        client_id: null
      }
    }
  },
  created(){

    this.googleSignInParams.client_id = credentials.Google.Oauth.client_id

  },
  computed:{
  ...Vuex.mapGetters(['isLoggedIn', 'googleUser']),


  },
  watch:{

  },
  methods:{
  ...Vuex.mapMutations(['logIn', 'logOut']), 
  // ...Vuex.mapActions([]), 

  onSignInSuccess (googleUser) {
      this.logIn(googleUser.getBasicProfile())
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.error(error)
    }
  }

}
</script>

<style lang="stylus">

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 240ms cubic-bezier(0,.45,.45,1), opacity 140ms cubic-bezier(0.0, 0.0, 0.2, 1);
  opacity: 1;
}

.slide-fade-leave-to{
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-enter{
  transform: translateX(-100px);
  opacity: 0;
}

.slide-fade-leave, .slide-fade-enter-to {
  opacity: 1;
}


</style>
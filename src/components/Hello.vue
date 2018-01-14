<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        Hello
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import Vuex from 'vuex'

export default {

  name: '',
  props: [''],
  components: {},
  data () {
    return {
    }
  },
  created(){

  },
  computed:{
  ...Vuex.mapGetters([]),


  },
  watch:{

  },
  methods:{
  ...Vuex.mapMutations([]), 
  // ...Vuex.mapActions([]), 
  }

}
</script>

<style lang="stylus">
@import '../stylus/main'

</style>
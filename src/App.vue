<script>

import { store } from './data/store';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <Header />
</template>

<style lang="scss">

@use './scss/main.scss';

</style>

<script>

import { store } from '../data/store';

export default {
  name: 'ResultSearch',
  data(){
    return {
      store
    }
  },
  computed: {
    result(){
      if(store.cardList.length > 0) return 'Risultati ricerca: ' + store.cardList.length;
      return 'Nessun risultato';
    }
  }
}

</script>

<template>
  <p>{{ result }}</p>
</template>

<style lang="scss" scoped>
  p{
    color: black;
    margin-bottom: 40px;
    text-align: center;
  }
</style>
<script>

import { store } from '../data/store'

export default{
  name: 'CardsContainer',
  data(){
    return{
      store
    }
  },
  mounted(){
    console.log(store.cardList);
  }
}
</script>

<template>
  <div>Card</div>
  
</template>

<style>
</style>
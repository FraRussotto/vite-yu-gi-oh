<script>

import { store } from '../data/store'
import card from './Card.vue'

export default{
  name: 'CardsContainer',
  components: {
    card
  },
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

  <div class="container my-3">
    <div class="row">
        <card />
        <card />
        <card />
        <card />
        <card />
        <card />
        <card />
        <card />
      </div>
    </div>
</template>

<style>
</style>
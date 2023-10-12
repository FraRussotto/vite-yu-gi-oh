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
    <div class="row_fr d-flex flex-wrap">
        <card v-for="card  in store.cardList" :key="card.id"
        :image="card.card_images[0].image_url"
        :name="card.name"
        :tipology="card.archetype"/>
      </div>
    </div>
</template>

<style lang="scss" scope>

@use './../scss/partials/variables' as *;

.container{
  background-color: white;
}
</style>
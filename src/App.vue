<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import CardContainer from './components/CardsContainer.vue'

export default {
  name: 'App',
  components: {
    Header,
    CardContainer
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
      .then(res =>{
        store.cardList = res.data.data
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  mounted(){
    this.getApi()
  }
}
</script>

<template>
  <Header />
  <CardContainer />
</template>

<style lang="scss">

@use './scss/main.scss';

</style>

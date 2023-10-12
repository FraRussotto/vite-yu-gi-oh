<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import CardContainer from './components/CardsContainer.vue'
import ResultSearch from './components/ResultSearch.vue'

export default {
  name: 'App',
  components: {
    Header,
    CardContainer,
    ResultSearch
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
  <section>
    <CardContainer />
  </section>
  <ResultSearch />
</template>

<style lang="scss">

@use './scss/main.scss';

</style>

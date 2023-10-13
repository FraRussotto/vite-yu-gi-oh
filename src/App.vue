<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import CardContainer from './components/CardsContainer.vue'
import ResultSearch from './components/ResultSearch.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    Header,
    CardContainer,
    ResultSearch,
    SearchBar
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params:{
          archetype: store.objectSearch
        }
      })
      .then(res =>{
        store.cardList = res.data.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    archetypeApi(){
      axios.get(store.archetypeApi)
      .then(res => {
        store.archetypeList = res.data
      })
      .catch(err =>{
        console.log(err);
      })
    }
  },
  mounted(){
    this.getApi()
    this.archetypeApi()
  }
}
</script>

<template>
  <Header />
  <SearchBar @startSearch="getApi"/>
  <section>
    <CardContainer />
  </section>
  <ResultSearch />
</template>

<style lang="scss">

@use './scss/main.scss';

</style>

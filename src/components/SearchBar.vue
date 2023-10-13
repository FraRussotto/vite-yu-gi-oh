<script>
import { store } from '../data/store';
  export default {
    name: 'SearchBar',
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <select @change="$emit('startSearch')" class="form-select" aria-label="default selec example" v-model="store.objectSearch">
          <option v-for="(archetype, index) in store.archetypeList" :key="index">{{ archetype.archetype_name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
</style>
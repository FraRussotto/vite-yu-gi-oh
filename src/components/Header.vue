<script>
export default{
  name: 'Header',
  props:{
    logoImg: String
  }
}
</script>

<template>
  <div class="logo container">Yu-Gi-Oh Api
  </div>
</template>

<style lang="scss">

@use './../scss/partials/variables' as *;

  .logo{
    height: 40px;
    font-size: 2rem;
  }
</style>
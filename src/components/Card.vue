<script>
export default{
  name: 'Card',
  props: {
    image: String,
    name: String,
    tipology: String
  }
  }
</script>

<template>
  <div class="col_fr text-center d-flex flex-wrap">
    <div class="card_fr">
      <img :src="image" alt="">
      <span>{{ name }}</span>
      <span>{{ tipology }}</span>
    </div>
  </div>
</template>

<style lang="scss">

@use './../scss/partials/variables' as *;

.col_fr{
  width: calc(100% / 5);
  
  .card_fr{
    margin: 10px;
    background-color: $primary-color;
    span{
      display: block;
      &:first-of-type{
        font-size: 1.4rem;
        margin: 10px;
      }
      &:last-of-type{
        font-size: 1.1rem;
      }
    }
    img{
      width: 100%;
    }
  }
}
</style>
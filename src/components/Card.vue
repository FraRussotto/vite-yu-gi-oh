<script>
export default{
  name: 'Card',
  }
</script>

<template>
  <div class="col_fr text-center d-flex flex-wrap">
    <div class="card_fr">
      <img src="https://images.ygoprodeck.com/images/cards/64163367.jpg" alt="">
      <span>"A" Cell Breeding Device</span>
      <span>Alien</span>
    </div>
  </div>
</template>

<style lang="scss">
.col_fr{
  width: calc(100% / 5);
  
  .card_fr{
    padding: 10px;
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
<template>
  <div class="border">
    <Price
      v-for="price in prices"
      :key="price.id"
      :title="price.title"
      :img="price.img"
      :eth-claimed="price.ethClaimed"
      :wit-claimed="price.witClaimed"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: [
        {
          id: 1,
          title: 'GOLD[1ETH+40K WIT]',
          img: 'gold-price',
          ethClaimed: false,
          witClaimed: false,
        },
        {
          id: 2,
          title: 'SILVER[0.5ETH+20K WIT]',
          img: 'silver-price',
          ethClaimed: false,
          witClaimed: false,
        },
        {
          id: 3,
          title: 'SILVER[0.5ETH+20K WIT]',
          img: 'silver-price',
          ethClaimed: false,
          witClaimed: false,
        },
        {
          id: 4,
          title: 'BRONCE[0.25ETH+10K WIT]',
          img: 'bronze-price',
          ethClaimed: false,
          witClaimed: false,
        },
        {
          id: 5,
          title: 'BRONCE[0.25ETH+10K WIT]',
          img: 'bronze-price',
          ethClaimed: true,
          witClaimed: true,
        },
        {
          id: 6,
          title: 'BRONCE[0.25ETH+10K WIT]',
          img: 'bronze-price',
          ethClaimed: true,
          witClaimed: true,
        },
      ],
    }
  },
}
</script>

<style>
.border {
  padding: 24px;
  border: 1px solid black;
  border-radius: 4px;
  display: grid;
  grid-template: 1fr / repeat(auto-fit, max-content);
  justify-items: flex-start;
  grid-gap: 16px;
}
</style>

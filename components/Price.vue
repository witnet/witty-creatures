<template>
  <div class="price">
    <img class="price-icon" :src="url" alt="Price" />
    <h3 class="title">
      {{ title }}
    </h3>
    <a
      class="claimed"
      :class="{ ['eth-highlight']: ethClaimed }"
      :href="'https://etherscan.io/address/' + ethAddress"
      target="_blank"
    >
      {{
        ethClaimed == null
          ? $t('price.checking')
          : ethClaimed
          ? $t('price.eth_claimed')
          : $t('price.eth_unclaimed')
      }}
    </a>
    <a
      class="claimed"
      :class="{ ['wit-highlight']: witClaimed }"
      :href="'https://witnet.network/search/' + witAddress"
      target="_blank"
    >
      {{ $t('price.check_manually') }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    ethAddress: {
      type: String,
      required: true,
    },
    ethClaimed: {
      type: Boolean,
      required: false,
    },
    witAddress: {
      type: String,
      required: true,
    },
    witClaimed: {
      type: Boolean,
      required: false,
    },
    img: {
      type: String,
      required: true,
    },
  },
  computed: {
    url() {
      return require(`@/assets/svg/${this.img}.svg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.price {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 24px;
  justify-content: flex-start;
  align-items: center;
  .title {
    width: max-content;
    font-size: 18px;
  }
  .price-icon {
    width: max-content;
  }
  .claimed {
    width: max-content;
    padding: 8px;
    border-radius: 4px;
    background-color: grey;
    color: white;
    font-weight: bold;
  }
  .eth-highlight {
    background-color: #7825ff;
  }
  .wit-highlight {
    background-color: #24cf9c;
  }
}

@media screen and (max-width: 600px) {
  .price {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    align-items: center;
    .title {
      grid-column: 1 / span 2;
    }
  }
}
</style>

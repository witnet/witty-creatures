<template>
  <div class="prize">
    <div class="flex-1">
      <img class="prize-icon" :src="url" alt="prize" />
      <h3 class="title">
        {{ title }}
      </h3>
    </div>
    <div class="flex">
      <a
        class="claimed"
        :class="{ ['eth-highlight']: ethClaimed === false }"
        :href="'https://etherscan.io/address/' + ethAddress"
        target="_blank"
      >
        {{
          ethClaimed == null
            ? $t('prize.checking')
            : ethClaimed
            ? $t('prize.eth_claimed')
            : $t('prize.eth_unclaimed')
        }}
      </a>
      <a
        class="claimed"
        :class="{ ['wit-highlight']: witClaimed === false }"
        :href="'https://witnet.network/search/' + witAddress"
        target="_blank"
      >
        {{ $t('prize.check_manually') }}
      </a>
    </div>
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
.flex {
  display: flex;
  flex-wrap: wrap;
}

.flex-1 {
  display: flex;
  flex-wrap: wrap;
  width: 337px;
}
.prize {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  justify-content: space-between;

  .title {
    font-size: 17px;
    margin-right: 24px;
    flex-grow: 1;
  }
  .prize-icon {
    margin-right: 16px;
    height: 1.3em;
  }
  .claimed {
    padding: 8px;
    border-radius: 4px;
    background-color: grey;
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  .eth-highlight {
    background-color: #7825ff;
  }
  .wit-highlight {
    background-color: #24cf9c;
  }
}

@media screen and (max-width: 1200px) {
  .prize {
    .title {
      margin-top: 16px;
    }
    .prize-icon {
      margin-top: 16px;
    }
    .claimed {
      margin-top: 16px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}

@media (max-width: 500px) {
  .flex-1 {
    width: initial;
  }
}
</style>

<template>
  <div class="border">
    <prize
      v-for="prize in prizes"
      :key="prize.id"
      :title="prize.title"
      :img="prize.img"
      :eth-address="prize.ethAddress"
      :eth-claimed="prize.ethClaimed"
      :wit-address="prize.witAddress"
      :wit-claimed="prize.witClaimed"
    />
  </div>
</template>

<script>
const Web3 = require('web3')
const web3 = new Web3('https://eth.witnet.io')

// Not using this because the block explorer is not performant enough for real time queries
/* const witnetGetBalance = async (address) => {
  console.log('https://witnet.network/api/search?value=' + address)
  const response = await fetch(
    'https://witnet.network/api/search?value=' + address
  )

  return await response.json().balance.confirmed
} */

export default {
  data() {
    return {
      polling: null,
      prizes: [
        {
          id: 1,
          title: this.$t('prizes.gold_prize'),
          img: 'gold-prize',
          ethAddress: '0x8F63eF3441121f7D90ceF8c642EFA3069747C29D',
          ethClaimed: null,
          witAddress: 'wit1tzuypmyj6f0ugggl3l6r7g2dl0q74al7t2mnax',
          witClaimed: null,
        },
        {
          id: 2,
          title: this.$t('prizes.silver_prize_1'),
          img: 'silver-prize',
          ethAddress: '0xCc340459eEc3FA8DccE461918ab1a02Cb11c7C59',
          ethClaimed: null,
          witAddress: 'wit17sygcjkrg0dqvpwpwqd0lqduxarh3ut5s0yxna',
          witClaimed: null,
        },
        {
          id: 3,
          title: this.$t('prizes.silver_prize_2'),
          img: 'silver-prize',
          ethAddress: '0x15E3924f6dff394759270B8e82248eD262764fCd',
          ethClaimed: null,
          witAddress: 'wit1zcx5lwe6m2vtk0ehkzu7hd5yrjj8txfpr2rqnq',
          witClaimed: null,
        },
        {
          id: 4,
          title: this.$t('prizes.bronze_prize_1'),
          img: 'bronze-prize',
          ethAddress: '0xD2072CeAB5f1454499A8d3Cf60E7cbd9E0F6cDDC',
          ethClaimed: null,
          witAddress: 'wit13c8pctfesnh6prmnyn3q5fjtllqp9qe53ux4pm',
          witClaimed: null,
        },
        {
          id: 5,
          title: this.$t('prizes.bronze_prize_2'),
          img: 'bronze-prize',
          ethAddress: '0xA4f23588AdDA5aCFF3a9e3B559DCDF4a45C87d1A',
          ethClaimed: null,
          witAddress: 'wit182g9yfrjfrewyjqx84xa202pxwycz7wnznm34t',
          witClaimed: null,
        },
        {
          id: 6,
          title: this.$t('prizes.bronze_prize_3'),
          img: 'bronze-prize',
          ethAddress: '0x02aC3D540a8f70EA554fdcbD4052D3d3eEFBE657',
          ethClaimed: null,
          witAddress: 'wit190r2tlw3d388l6r8azdsz6mf4ea7kwd6etd9d3',
          witClaimed: null,
        },
      ],
    }
  },
  beforeDestroy() {
    clearInterval(this.polling)
  },
  created() {
    this.pollOnchainData()
  },
  methods: {
    pollOnchainData() {
      const poll = () => {
        for (const prize of this.prizes) {
          web3.eth
            .getBalance(prize.ethAddress)
            .then((balance) => {
              prize.ethClaimed = balance === '0'
            })
            .catch(async (e) => {
              // Just to deal with random Web3 failures
              console.error('Retrying after error', e)
              prize.ethClaimed = await web3.eth.getBalance(prize.ethAddress)
            })
        }
      }
      this.polling = setInterval(poll, 90000)
      poll()
    },
  },
}
</script>

<style>
.border {
  padding: 15px;
  border: 1px solid #f8971e;
  border-radius: 4px;
  display: grid;
  grid-template: 1fr / repeat(auto-fit, max-content);
  justify-items: flex-start;
  grid-gap: 10px;
}
</style>

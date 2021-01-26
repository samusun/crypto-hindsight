

<template>
  <div class="top7" >
<h3>Veckans populäraste sökningar på CoingGecko.com</h3>
<button type="button" class="btn btn-primary" v-on:click="show" >Visa mig!</button>
<button type="button" class="btn btn-danger" v-on:click="hide" >Dölj</button>
<b-list-group v-if="clicked">
    <b-list-group-item variant="dark" v-for="coin in data" :key="coin.message" v-bind:id="coin.item.name" >
       <img :src="coin.item.thumb"/>
        {{coin.item.name}}Rank: {{coin.item.market_cap_rank}} </b-list-group-item>
   </b-list-group>
  </div>
</template>



<script>
  export default {
methods:{
    fav(x){
        this.favorite = x
        console.log(x)
    },
    show(){
this.clicked = true
    },
    hide(){
        this.clicked = false
    }
},
    data() {
      return {
          clicked: false,
          data: null,
          favorite: null,
      }
    },


    created: function(){
               require('axios').get('https://api.coingecko.com/api/v3/search/trending')
             .then((response) => {
               this.data = response.data.coins;
               },error => {
        console.log(error);
    })   
      },
  }

</script>

<style scoped lang="scss">
.list-group {
    margin: 0;
    padding-left: 0;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: left;
    align-items: left;
}
</style>


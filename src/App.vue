<template lang="">
<div class="">
  <chart-view :chart_data="chart_data"></chart-view>

  <p v-for="item in stock_data">{{item.symbol}}</p>
  <button v-on:click="stockgraph">Click me to do stuff</button>
</div>
</template>

<script>
import ChartView from "@/components/Chart";

export default {
  name: 'app',
  components: {
    'chart-view': ChartView
  },
  data() {
    return {
      stock_tickers: ['CMCSA', 'CMCSA', 'CMCSA', 'CMCSA', 'CMCSA', 'CMCSA',],
      stock_data: [],
      // api_key: "4CDV35QACU2KPB3U"
      chart_data: [10, 0, 8, 2, 6, 4, 5, 5],
      // chart_data: [],
      test_variable: []
    }
  },
  mounted() {

      fetch('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL,GOOG,CMCSA?serietype=line')
      .then(res => res.json())
      // .then(data => this.chart_data=data["historicalStockList"][0]["historical"])
      .then(data => this.chart_data=[3,5,7,3,6])


    // fetch
  },
  methods: {
    stockgraph: function(){
      // let i = this.stock_data
      // .historical[-1].close;
       // const dummy= this.stock_data["historicalStockList"][0]["historical"];
       // this.test_variable = dummy[dummy.length -1].close
       this.chart_data = this.stock_data["historicalStockList"][0]["historical"];

    }
  }
}
</script>

<style lang="css" scoped>
</style>

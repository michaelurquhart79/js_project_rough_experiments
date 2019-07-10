<template lang="html">
 <highcharts :options="chartOptions2"></highcharts>
</template>

<script>
import {Chart} from 'highcharts-vue'
export default {
  name: 'chart-view',
  props: ['chart_data'],
  components: {
    highcharts: Chart
  },
  data() {
    // console.log("chart data in chartView",this.chart_data);
    return {
      // title: '',
      // points: [10, 0, 8, 2, 6, 4, 5, 5],
      // chartType: 'Spline',
      // seriesColor: '#6fcd98',
      // colorInputIsSupported: null,
      // chartOptions2: {
      //   chart: {
      //     type: 'bar'
      //   },
      //   title: {
      //     text: 'Mikes chart'
      //   },
      //   series: [{
      //     // data: this.chart_data,
      //     color: 'red'
      //   }]
      // }
    }
  },
  computed: {
    chartOptions2: function(){
      const chartData =
      {
        chart: {
          type: 'bar'
        },
        yAxis: [{
          max: 10
        }],
        title: {
          text: 'Mikes chart'
        },
        series: [{
          data: this.chart_data,
          color: 'red'
        }]
      }

      return chartData
    }

  }
}
</script>

<style lang="css" scoped>
</style>

<template>
    <div ref="chartRef" style="width: 600px; height: 400px;"></div>
  </template>
  
  <script setup>
  import { ref, onMounted,onUnmounted  } from 'vue';
  import * as echarts from 'echarts';
  
  const chartRef = ref(null);
  let myChart = null;
  
  onMounted(() => {
    myChart = echarts.init(chartRef.value);
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    myChart.setOption(option);
  });
  
  // 组件卸载时，销毁图表实例
  onUnmounted(() => {
    if (myChart != null) {
      myChart.dispose();
    }
  });
  </script>
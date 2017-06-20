<!--学情分析-->
<template>
  <div class="main">
    <div class="chart-wrapper">
      <div class="chart-content">
        <div class="chart-title">阅读能力成长轨迹</div>
        <div id="er_timeline" class="chart">

        </div>
      </div>
    </div>
    <div class="chart-wrapper">
      <div class="chart-content">
        <div class="chart-title">阅读能力</div>
        <div id="read_ability" class="chart">

        </div>
      </div>
    </div>
    <div class="chart-wrapper">
      <div class="chart-content">
        <div class="chart-title">周阅读字数</div>
        <div>（单位：字）</div>
        <div id="week_word_count" class="chart">

        </div>
      </div>
    </div>
    <div class="chart-wrapper">
      <div class="chart-tab">
        <div class="col-xs-6" :class="{'chart-tab-selected': tab == 1}" @click="toggle_radar(1)">书籍</div>
        <div class="col-xs-6" :class="{'chart-tab-selected': tab == 2}" @click="toggle_radar(2)">短文</div>
        <div class="clear"></div>
      </div>
      <div class="chart-content">
        <div class="chart-title">阅读能力维度正确率</div>
        <div id="er_dim" class="chart">

        </div>
      </div>
    </div>
    <div class="chart-wrapper">
      <div class="chart-content">
        <div class="chart-title">书籍结构百分比</div>
        <div id="book_struct" class="chart">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'

  export default {
    data () {
      return {
        msg: '学情分析',
        tab: 1,
        color: ['#ff3d5f', '#1d98d0', '#01d2c2', '#6bc8f3', '#f27d92', '#a9cc55', '#70b0eb', '#15ba89']
      }
    },
    created: function () {
      document.getElementsByTagName('title')[0].innerHTML = '学情分析'
    },
    mounted: function () {
      this.gen_er_timeline()
      this.gen_read_ability()
      this.gen_word_count()
      this.gen_radar(1)
      this.gen_book_struct()
    },
    methods: {
      gen_er_timeline: function () {
        let elem = echarts.init(document.getElementById('er_timeline'))
        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          color: this.color,
          legend: {
            data: ['个人', '班级', '年级']
          },
          grid: {
            left: '3%',
            right: '8%',
            bottom: '3%',
            containLabel: true,
            show: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '个人',
              type: 'line',
              areaStyle: {normal: {
                opacity: 0.3
              }},
              data: [120, 132, 101, 134, 90, 230, 510]
            },
            {
              name: '班级',
              type: 'line',
              areaStyle: {normal: {
                opacity: 0.3
              }},
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '年级',
              type: 'line',
              areaStyle: {normal: {
                opacity: 0.3
              }},
              data: [150, 232, 201, 154, 190, 330, 410]
            }
          ]
        }
        elem.setOption(option)
      },
      gen_read_ability: function () {
        let elem = echarts.init(document.getElementById('read_ability'))
        let option = {
          color: this.color,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '8%',
            bottom: '3%',
            top: '0%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['个人\n\n\n\n班级\n\n\n\n年级']
          },
          series: [
            {
              name: '个人',
              type: 'bar',
              data: [18203],
              barWidth: 25,
              barGap: '100%',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              }
            },
            {
              name: '班级',
              type: 'bar',
              data: [19325],
              barWidth: 25,
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              }
            },
            {
              name: '年级',
              type: 'bar',
              data: [19325],
              barWidth: 25,
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              }
            }
          ]
        }
        elem.setOption(option)
      },
      gen_word_count: function () {
        let elem = echarts.init(document.getElementById('week_word_count'))
        let option = {
          color: this.color,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '2%',
            right: '7%',
            bottom: '3%',
            top: '5%',
            containLabel: true
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            boundaryGap: [0, 0.01]
          },
          xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5']
          },
          series: [
            {
              name: '个人',
              type: 'bar',
              data: [182, 126, 172, 134, 104],
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              }
            },
            {
              name: '班级',
              type: 'bar',
              data: [125, 177, 156, 273, 139],
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              }
            },
            {
              name: '年级',
              type: 'bar',
              data: [195, 109, 182, 152, 174],
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              }
            }
          ]
        }
        elem.setOption(option)
      },
      gen_radar: function (val) {
        // 阅读能力维度正确率
        let elem = echarts.init(document.getElementById('er_dim'))
        elem.clear()
        let option = {
          legend: {
//            data: ['图一', '图二']
          },
          color: this.color,
          radar: [
            {
              indicator: [
                { text: '直接信息提取' },
                { text: '情感主旨把握' },
                { text: '信息归纳整合' },
                { text: '逻辑推理判断' }
              ],
              center: ['50%', '50%'],
              radius: 60,
              startAngle: 90,
              splitNumber: 4,
              shape: 'circle',
              name: {
                formatter: '{value}',
                textStyle: {
                  color: '#939393'
                }
              },
              splitArea: {
                areaStyle: {
                  color: ['#e8f4fa',
                    '#e8f4fa', '#e8f4fa',
                    '#e8f4fa']
//                  shadowColor: '#73add0',
//                  shadowBlur: 10
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#73add0'
                }
              },
              splitLine: {
                lineStyle: {
                  color: '#73add0'
                }
              }
            }
          ],
          series: [
            {
              name: '雷达图',
              type: 'radar',
              itemStyle: {
                emphasis: {
                  // color: 各异,
                  lineStyle: {
                    width: 4
                  }
                }
              },
              data: [
                {
                  value: [100, 8, 0.40, -80],
                  name: '图一',
                  symbol: 'rect',
                  symbolSize: 5
                },
                {
                  value: [60, 5, 0.30, -100],
                  name: '图二',
                  symbol: 'rect',
                  symbolSize: 5
                }
              ]
            }
          ]
        }
        elem.setOption(option)
//        if (val === 1) {
//
//        } else {
//
//        }
      },
      gen_book_struct: function () {
        let elem = echarts.init(document.getElementById('book_struct'))
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          color: this.color,
          legend: {
            orient: 'vertical',
//            x: 'right',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            top: '6%',
            right: '10%'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['45%', '80%'],
              center: ['30%', '50%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  formatter: (param) => param.percent.toFixed(0) + '%'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ]
            }
          ]
        }
        elem.setOption(option)
      },
      toggle_radar: function (val) {
        if (val === 1) {
          this.tab = 1
          this.gen_radar(1)
        } else {
          this.tab = 2
          this.gen_radar(2)
        }
      }
    }
  }
</script>
<style scoped>
  body {
    background: #edeff2 !important;
  }
  .main {
    text-align: center;
    color: #939393;
  }
  .chart-wrapper {
    background: #FFFFFF;
    border-radius: 0.5em;
    width: 96%;
    /*min-height: 20em;*/
    margin: 1em auto;
    box-shadow: 0.1em 0.1em 0.1em #ccc;
    overflow: hidden;
  }
  .chart-content {
    padding: 1.2em 0.5em;
  }
  .chart-title {
    font-size: 1.2em;
    color: #79afec;
  }
  .chart {
    width: 100%;
    height: 18em;
    margin-top: 0.5em;
  }
  .chart-tab {
    border-bottom: 1px solid #79afec;
    color: #79afec;
  }
  .chart-tab .col-xs-6 {
    padding: 0.4em;
    font-size: 1.2em;
  }
  .chart-tab-selected {
    background: #79afec;
    color: #FFFFFF;
  }
</style>

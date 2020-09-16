import React, { Component } from 'react'
import echarts from 'echarts'
import { getOnsInfo } from '@/api'
import 'echarts/map/js/china.js'
import getOption from './option.js'

export default class iconView extends Component {
  constructor() {
    super()
    this.myChart = null
  }
  componentDidMount() {
    getOnsInfo().then((onsInfo) => {
      var res = onsInfo.data || ''
      res = JSON.parse(res)
      var newArr = []
      if (res) {
        //获取到各个省份的数据
        var province = res.areaTree[0].children
        for (var i = 0; i < province.length; i++) {
          var json = {
            name: province[i].name,
            value: province[i].total.confirm,
          }
          newArr.push(json)
        }
      }
      this.createMap(newArr)
    })
  }

  createMap = (newArr) => {
    this.myChart = echarts.init(this.refs.myEchart)
    const option = getOption(newArr)
    this.myChart.setOption(option, true)
  }

  componentWillUnmount() {
    this.myChart = null
  }
  render() {
    return (
      <div
        style={{ width: '100%', height: '100%', backgroundColor: '#f0f2f5' }}
        ref="myEchart"
      >
        iconView
      </div>
    )
  }
}

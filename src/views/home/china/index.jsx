import React, { Component } from 'react'
import { getOnsInfo } from '@/api'
import 'echarts/map/js/china.js'
import getOption from './option.js'
import ReactEcharts from 'echarts-for-react'

export default class china extends Component {
  constructor() {
    super()
    this.state = {
      option: [],
    }
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
    const option = getOption(newArr)
    this.setState({ option })
  }

  render() {
    return (
      <>
        {this.state.option.series && (
          <ReactEcharts
            option={this.state.option}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f0f2f5',
            }}
          ></ReactEcharts>
        )}
      </>
    )
  }
}

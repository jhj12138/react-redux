import React,{Component} from 'react'


import {data} from '../mocks/cascder'
import { Cascader ,DatePicker, Space} from 'antd';

class cascader extends Component{
  state = {
    options : [],
    names : '111'
  }

  onChange = (value,aaa,e) => {
    // console.log(value);
    console.log(value,aaa)
  }

  GetProvinceCity = () => {
    let treeData = []
    let lastPid = -1
    let obj = {};
    data.forEach((ele,i) => {
      let pid = ele.pid
      // 若本次循环的pid与上次pid不同，新建province对象
      if (pid !== lastPid) {
        // 若上次pid不为-1，代表已进行过循环，把旧province放入结果数据，并新建province
        if (lastPid !== -1) {
          treeData.push(obj)
        }
        obj = {
          value:ele.cid,
          label:ele.province,
          children:[{value:ele.cid,label:ele.city}]
        }
      } else {
        obj.children.push({value:ele.cid,label:ele.city})
      }

      if (i === data.length - 1) {
        treeData.push(obj)
      }
      lastPid = pid;
    })
    this.setState({
      options:treeData
    })
    // console.log(treeData)

  }

  displayRender = (label) => {
    return label[label.length - 1];
  }

  componentDidMount(){
    this.GetProvinceCity()
  }

  render() {
    const {options,names} = this.state
    return (
      <>
      <Cascader options={options} onChange={(value,e) => this.onChange(value,'111',e)}  displayRender={this.displayRender.bind()} placeholder="Please select" />
      </>
    )
  }
}

export default cascader
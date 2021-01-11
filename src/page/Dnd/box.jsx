import React,{Component} from 'react'
import {DragSource} from 'react-dnd'


const boxSource = {
  /**
	 * 开始拖拽时触发当前函数
	 * 组件的 props
	 */
  beginDrag(props) {

  },
  /**
	 * 拖拽结束时触发当前函数
	 * 当前组件的 props
	 * DragSourceMonitor 对象
	 */
  endDrag(props, monitor) {

  }
}

@DragSource(

)

class Box extends Component{
  state = {

  }

  render() {
    return (
      <>
      </>
    )
  }
}


export default Box
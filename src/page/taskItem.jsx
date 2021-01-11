import React,{Component} from 'react'

class TaskItem extends Component{
  state = {

  }

  onDragStart =()=>{
    const {onDragStart,colId,data,index} = this.props
    onDragStart(index,colId,data)
  }
  render() {
    const { data,onDragEnd} = this.props;
    return (
      <>
        <div 
          style = {{cursor:'pointer'}}
          onDragStart= {()=>this.onDragStart()}
          onDragEnd = {()=>onDragEnd()}
          draggable
        >
          {data.content}
        </div>
      </>
    )
  }
}


export default TaskItem
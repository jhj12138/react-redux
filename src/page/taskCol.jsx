import React,{Component} from 'react'

class TaskCol extends Component{
  state = {

  }
  onDragEnter = ()=> {
    // 记录进入哪一个任务列区域了
    const {id, onDragEnter} = this.props
    onDragEnter(id)
  }

  onDragOver = (e) => {
    e.preventDefault()
  }

  render() {
    const {title,children,onDrop} = this.props;
    return(
      <>
        <div style = {{flex:'1'}}>
          <div>{title}</div>
          <div
            onDragEnter={()=>this.onDragEnter()}
            onDragOver={(e)=>this.onDragOver(e)}
            onDrop={()=>onDrop()}
            style = {{height:'100%'}}
          >
            {children}
          </div>
        </div>
      </>
    )
  }
}


export default TaskCol
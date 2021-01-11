import React,{Component} from 'react'
import TaskCol from './taskCol'
import TaskItem from './taskItem'

const STATUS_TODO = 'STATUS_TODO';
const STATUS_DOING = 'STATUS_DOING';
const STATUS_DONE = 'STATUS_DONE';

const TASK_DATA = [{
  id: STATUS_TODO,
  title: '待处理',
  data: [{
    id: 1,
    status: STATUS_TODO,
    content: '写一个react拖拽实现记录',
  },
  {
    id: 2,
    status: STATUS_TODO,
    content: '搞懂redux中间件源码',
  }, {
    id: 3,
    status: STATUS_TODO,
    content: '学习react-router',
  }, {
    id: 4,
    status: STATUS_TODO,
    content: '学习css',
  }, {
    id: 5,
    status: STATUS_TODO,
    content: '学习算法',
  },
  {
    id: 6,
    status: STATUS_TODO,
    content: '前端学习之路真的是无止境',
  },
  {
    id: 7,
    status: STATUS_TODO,
    content: '有工作 也有生活才够好',
  },
  {
    id: 8,
    status: STATUS_TODO,
    content: '有生活又有乐趣才完美',
  },
  {
    id: 9,
    status: STATUS_TODO,
    content: '加油吧 你可以的',
  }],
},
{
  id: STATUS_DOING,
  title: '进行中',
  data: [],
},
{
  id: STATUS_DONE,
  title: '已完成',
  data: [],
}];

const defaultFrom = { // 记录拖方信息
  itemIndex: null, // 拖拽元素在当前所在区域列的位置
  colId: null, // 拖拽元素所在的区域列的id（唯一标识）
  item: null, // 拖拽元素的信息
};

const defaultTo = { // 记录接收方信息
  colId: null, // 接收区域列的id（唯一标识）
};

class Drag extends Component{
  state = {
    tasks:TASK_DATA,
    from:defaultFrom,
    to:defaultTo
  }

  handleDragStart = (itemIndex,colId,item) => {
    // console.log(itemIndex,colId,item)
    const tasks = this.state.tasks;
    // tasks.forEach((items) => {
    //   console.log('items',items)
    //   if (items.id ===  colId){
    //     items.data.forEach((ele) => {
    //       if (ele.id === item.id) {
    //         items.data.splice(itemIndex,1)
    //       }
    //     })
    //   }
    // })
    // this.setState({
      
    // })
    this.setState({
      from:{
        itemIndex,
        colId,
        item
      },
      tasks,
      to:defaultTo,
    })

  }

  handleDragEnd = () => {
    this.setState({
      from:{}
    })
  }

  // 接收方
  handleDragEnter = (colId,indexs) => {
    this.setState({
      to:{
        colId,
      }
    })
  }

  handleDragLeave = () => {
    // console.log('执行了马')
    this.setState({
      to:defaultTo
    })
  }

  handleDrop = () => {
    const tasks = this.state.tasks;
    const { from, to } = this.state;
    console.log(from)
    const { itemIndex, item } = from;
    if (from.colId === to.colId) {
      // 如果在元素所在的区域拖动，不做处理
      return 
    }

    tasks.forEach((ele) => {
      console.log('执行了继承')
      console.log(ele.id,from.colId)
      if (ele.id === from.colId){
        ele.data.splice(itemIndex,1)
      } else if (ele.id === to.colId) {
        ele.data.push(item)
      }
    });
    this.setState({
      tasks,
      from:defaultFrom,
      to:defaultTo,
    })
  }

  render() {
    const {tasks, from ,to} = this.state
    return(
      <>
        <div style= {{display:'flex'}}>
         {tasks.map(item => 
            <TaskCol
              id={item.id}
              title={item.title}
              onDragEnter={() => this.handleDragEnter(item.id)}
              onDragLeave={() => this.handleDragLeave()}
              onDrop={() => this.handleDrop()}
              key={item.id}
            >
              {
                item.data.map((ele, index) => 
                  <TaskItem
                    index={index}
                    data={ele}
                    colId={item.id}
                    onDragStart={() => this.handleDragStart(index,item.id,ele)}
                    onDragEnd={() => this.handleDragEnd()}
                    key={ele.id}
                  >
                  </TaskItem>
                )
              }
            </TaskCol>
          )}
        </div>
      </>
    )
  }
}


export default Drag
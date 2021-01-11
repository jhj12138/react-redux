import  React,{Component} from 'react'
// import { Layout } from 'antd';
// const { Header, Sider, Content } = Layout;
class layout extends Component{
  state = {
    as : '我是在这里',
    za : '你真的在这里',
  }

  changes(abc,e){
    this.setState({
      as : abc+'是不是在缩小'
    })
    console.log(e)
    console.log(this)
  }
  render() {
    let {as,za} = this.state
    return (
      <>
      <div onClick={(e)=> this.changes(za,e)}>按钮</div>
      <div>{as}</div>
      </>
    )
  }
}



export default layout

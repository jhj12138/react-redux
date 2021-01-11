import React,{Component} from 'react'
import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import menuObj from '../mocks/menu'

const { SubMenu } = Menu;
const {data:{list}} = menuObj
class MeNav extends Component{
  state = {
    menuTreeNode :null
  }

  componentWillMount () {
    console.log(this.menuChange(list))
    // this.menuTreeNode  = this.menuChange(list)
    this.setState({
      menuTreeNode : this.menuChange(list)
    })
  }

  menuChange = (list) =>{
    return list.map((ele) => {
      if (ele.children) {
        return <SubMenu  key={ele.id} title={ele.resName}>
          {this.menuChange(ele.children)}
        </SubMenu>
      } 
      return <Menu.Item key={ele.id} title={ele.resName}>{ele.resName}</Menu.Item>
    })
  }

  onOpenChange = (onOpenChange) => {
    console.log(onOpenChange)
  }

  render() {
    return(
      <>
        <Menu
          // onClick={this.handleClick}
          onOpenChange={this.onOpenChange.bind(this)}
          style={{ width: 256}}
          mode="inline"
        >
          {this.state.menuTreeNode}
        </Menu>
      </>
    )
  }
}

export default MeNav
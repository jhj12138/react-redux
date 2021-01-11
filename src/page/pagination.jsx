import React,{Component} from 'react'
import { Pagination } from 'antd';

class Pagin extends Component{
    state = {
      total: 50,
      pageSize: 5
    }
    componentWillMount() {

    }
    pageChange = (pageSize) => {
      console.log(pageSize)
    }
    render() {
      const {total,pageSize} = this.state
      return (
        <>
          <Pagination  total={total} pageSize={pageSize} onChange= {() => this.pageChange(pageSize)}/>
        </>
      )
    }

}



export default Pagin
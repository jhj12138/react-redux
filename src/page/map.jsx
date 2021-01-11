import React,{Component} from 'react'

const data = [{
  name:'1'
},{
  name:'2'
},{
  name:'3'
},{
  name:'4'
}]
class Map extends Component{
  state = {
    
  }
  render() {
    return(
      <>
        {data.map(ele => {
          return <div>{ele.name}</div>
        })}
      </>
    )
  }
}

export default Map
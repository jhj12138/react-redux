import React,{ Component } from 'react'
import './App.css';

// import Layout from './layout'
// import MeNav from './page/Menu.jsx'
// import Pagin from './page/pagination.jsx'
// import Cascader from './page/cascader'
// import Drag from './page/Drag'
// import Map from './page/map'
import DragNDrop from './page/Dnd/dragNDrop'


class  App extends Component{
  render() {
    return (
      <>
        {/* <Pagin></Pagin> */}
        {/* <Cascader></Cascader> */}
        {/* <Drag></Drag> */}
        {/* <Map></Map> */}
        <DragNDrop></DragNDrop>
      </>
    )
  }
}




export default App;

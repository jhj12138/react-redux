import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../store/show/actionCreators'

class StoreShow extends Component{
    state = {
        num:null
    }

    componentWillMount() {
        // var a = store.getState().aaa
        // this.setState({
        //     num : a
        // })
    }

    up = () => {
        console.log('wwww')
        this.props.showtype()
    }

    render(){
        return(
            <>
                {this.props.num}
                <div onClick = {()=>this.up()}>提交按钮</div>
            </>
        )
    }
}

export default connect(state => state.show, dispatch => {
    return bindActionCreators(actionCreators,dispatch)
})(StoreShow)
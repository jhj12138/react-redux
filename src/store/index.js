// index.js 文件就是整个项目的store文件
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer' // 引入reducer

import thunk from 'redux-thunk'


const store = new createStore(reducer,applyMiddleware( thunk ))

export default store //将仓库暴露出去
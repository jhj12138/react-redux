import * as type from './type'
import state from './state'
import { action } from 'mobx'

const reducer = (proviousState = state , actions) => {
    let newState = {
        ...proviousState
    }
    switch (actions.type) {
        case type.STORE_SHOW:
            newState.num = actions.payload
            break;
        default:
            break;
    }

    return newState
}

export default reducer
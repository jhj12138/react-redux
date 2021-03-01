import * as type from './type'

const actionCreators = {
    showtype() {
        const data = '11'
        return dispatch => {
            let actions = {
                type:type.STORE_SHOW,
                payload:data
            }

            dispatch(actions)
        }
    }
}

export default actionCreators
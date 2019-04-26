import {connect} from 'react-redux'
import ButtonIncDec from './ButtonIncDec';


const mapStateToProps = (state) => {
    return {count : state.count}
}

const mapDispatchToProps = (dispatch) => {
    return  {
        handleIncClick: () => {
            const action = { type : "INCREMENT", data : "Action" }
            dispatch(action)
        },
        handleDecClick: () => {
            const action = { type : "DECREMENT", data : "Action" }
            dispatch(action)
        }
    }
} 

/**
 *const c = connect(mapStateToProps)
 *export default c(ButtonIncDec)
 * <=> 
 * export default connect(mapStateToProps)(ButtonIncDec)
 */

export default connect(mapStateToProps, mapDispatchToProps)(ButtonIncDec)
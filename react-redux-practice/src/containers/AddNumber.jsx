// import React from 'react';
// import store from '../store';
import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {};
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: function(_size){
            dispatch({type:'INCREMENT', size:_size});
        }
    };
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(AddNumber);
// eslint-disable-next-line import/no-anonymous-default-export
// export default class extends React.Component {
//     render() {
//         return <AddNumber onClick={function(_size){
//             store.dispatch({type:'INCREMENT', size:_size});
//         }}></AddNumber>
//     }
// }
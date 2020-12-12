// import React, { Component } from 'react';
// import store from "../store";
import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) {
    return { number: state.number };
}

function mapReduxDispatchToReactProps() {
    return {};
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);
// eslint-disable-next-line import/no-anonymous-default-export
// export default class extends Component {
//     state = {number: store.getState().number}  
//     constructor(props){
//         super(props);
//         store.subscribe(function() {
//             this.setState({number:store.getState().number});
//         }.bind(this));
//     }
//     render() {
//         return <DisplayNumber number={this.state.number}></DisplayNumber>;
//     }
// }
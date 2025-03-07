import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment() {
            // this.setState({
            //     count: this.state.count + 1
            // }, () => {
            //     console.log("Callback value", this.state.count);
            // })
            this.setState((prevState, props) => ({
                count: prevState.count + 1
            }))
            console.log(this.state.count)
        }

    incrementTen(){
        this.setState((prevState, props) => ({
            count: prevState.count + 10
        }))
    }
    render() {
        return (
            <div>
                 <button onClick={ () => this.incrementTen()}>
                     <h4>Like: {this.state.count}</h4>
                 </button>
            </div>
        );
    }
}

export default Counter;
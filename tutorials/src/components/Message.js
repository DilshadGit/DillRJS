import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super();
        this.state = {
            message: "Click below"
        }
    }

    changeMessage(message) {
        this.setState({
            message: "Thanks for your subscribing"
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
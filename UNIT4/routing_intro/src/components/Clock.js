
import React from 'react';
import axios from 'axios';
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {time: new Date().toLocaleString()}
        // debugger
    }

    componentDidMount() {
        // debugger
        // axios.get("moves")
        this.timer = setInterval(() => {
            console.log(new Date().toLocaleString())
            this.setState({time: new Date().toLocaleString()})
        }, 1000)
        // this.setState({value: 5})
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        // debugger
        return(
            <div>
                {this.state.time}
            </div>
        )
    }
}

export default Clock;
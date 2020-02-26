
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {time: new Date().toLocaleString()}
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            // console.log(new Date().toLocaleString())
            this.setState({time: new Date().toLocaleString()})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return(
            <div>
                {this.state.time}
            </div>
        )
    }
}

export default Clock;
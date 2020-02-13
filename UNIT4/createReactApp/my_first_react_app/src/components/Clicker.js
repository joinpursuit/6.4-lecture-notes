import React from 'react';

class Clicker extends React.Component {
        state = { count: 0 }
        // this.handleClick = this.handleClick.bind(this);

    handleClick = (e) => {
        this.setState((prevState, props) => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return(
            <div>
              You've clicked {this.state.count} times!
                <button onClick={this.handleClick}>Click ME!</button>
            </div>
        )
    }
}

export default Clicker;
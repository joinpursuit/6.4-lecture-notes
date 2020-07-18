import React from 'react'

class CounterErrorBoundaries extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false}
    }

    static getDerivedStateFromError(err) {
        return { hasError: true }
    }

    render() {
        if(this.state.hasError) {
            return (
              <div>
                <iframe
                  src="https://giphy.com/embed/26uf6qaxqHpYXgjWU"
                  width="480"
                  height="261"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
              </div>
            );
        }
        return(
            <>{this.props.children}</>
        )
    }
}

export default CounterErrorBoundaries;
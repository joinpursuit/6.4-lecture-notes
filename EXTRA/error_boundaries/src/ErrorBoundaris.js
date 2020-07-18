import React from "react";

// Catches errors that occur: 
// rendering 
// lifecycle methods
// constructors of whole tree below them 

//Does  NOT catch errors inside event handlers. Use try / catch for those. 

class ErrorBoundaries extends React.Component {
    state = {hasError: false}

    componentDidCatch(err, errInfo) {
        // send error to logging service 
        console.log(err, errInfo)
    }

    static getDerivedStateFromError(err){ 
        return { hasError: true }
    }

  render() {
      if(this.state.hasError) {
          return <div>Something Went Wrong</div>
      }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundaries;

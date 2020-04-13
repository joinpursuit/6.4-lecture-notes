import React, { Component } from 'react';
import { CounterContext } from '../providers/CounterProvider';

class ClassCounter extends Component {
    static contextType = CounterContext;
    render() { 
        return (
            <div>
                <h1>Class Counter</h1>
                <h3>Class Count is {this.context.count} </h3>
            </div>
         );
    }
}
 
export default ClassCounter;
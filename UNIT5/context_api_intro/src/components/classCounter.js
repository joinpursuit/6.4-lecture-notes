import React, { Component } from 'react';
import { CounterContext } from '../providers/CounterProvider';
import { TodosContext } from '../providers/TodosProvider';

class ClassCounter extends Component {
    // static contextType = CounterContext;
    render() { 
        // this.context; 
        return (
            <CounterContext.Consumer>
             {count => {
                return( <TodosContext.Consumer>
                { todos => {
                    console.log(todos.todos)
                    return(
                        <div>
                            <h1>Class Counter</h1>
                            <h3>Class Count is {count.count} </h3>
                        </div>

                    )
                }

                }
                 </TodosContext.Consumer>
                )
             }}

            </CounterContext.Consumer>
         );
    }
}
 
export default ClassCounter;
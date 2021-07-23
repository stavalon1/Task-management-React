import React from 'react';
import {AddItem} from './add-item';
import {TodoItem} from './todo-item';

export class TodoApp extends React.Component {
    state = {
        list: []
    }

    render() {
        const {list} = this.state
        return(
            <div>
                {list.map(item => {
                    return(
                         <TodoItem text={item.text} id={item.id} onRemove={}/>
                    )
                })}
            </div>
        )
    }
}
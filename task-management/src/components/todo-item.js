import React from 'react';

export class TodoItem extends React.Component {
    handleRemove = () => this.props.onRemove(this.props.id)

    render() {
        const {text} = this.props
        return(
            <div>
                <div>{text}</div>
                <div onClick={this.handleRemove}>Remove</div>
            </div>
        )
    }
}
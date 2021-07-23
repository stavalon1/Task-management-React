import React from 'react';

export class AddItem extends React.Component {
    state = {
        value: '',
    }


handleChange = (userText) => {
    this.setState({value: userText.target.value })
}

handleClick = () => {
    const {value} = this.state
    const {onAdded} = this.props
    this.setState({value: '' })
    onAdded(value)
}

    render() {
        const {value} = this.state
        return(
            <div>
                <input value={value} onChange={this.handleChange} />
                <button onClick={this.handleClick}>ADD TASK</button>
            </div>
        )
    }
}
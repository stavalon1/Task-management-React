import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import styles from './add-item.module.css'


export class AddItem extends React.Component {
    state = {
        value: '',
    }


handleChange = (userText) => {
    this.setState({value: userText.target.value })
}

handleClick = () => {
    const {value} = this.state
    if(value === '') return
    const {onAdded} = this.props
    this.setState({value: '' })
    onAdded(value)
}

    render() {
        const {value} = this.state
        return(
            <div className={styles.container}>
               
                <TextField 
                    label='Todo'
                    variant='outlined'
                    value={value}
                    onChange={this.handleChange}
                    style={{ marginBottom: 3 }}
                />
                <Button variant='contained' color='primary' onClick={this.handleClick}>
                    Add
                </Button>
            </div>
        )
    }
}
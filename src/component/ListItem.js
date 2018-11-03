import React, {Component} from 'react'

export default class ListItem extends Component {
    render() {
        return (
            <li className='list-item' onClick={() => this.props.clickSearchList(this.props)}>
                {this.props.name}
            </li>
        )
    }
}
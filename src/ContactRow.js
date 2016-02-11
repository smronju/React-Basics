import React, {Component} from 'react';

export default class ContactRow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.gender}</td>
                <td>{this.props.phone}</td>
            </tr>
        );
    }
}

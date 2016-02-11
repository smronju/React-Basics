import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Search extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <input type="text" ref="searchText" onChange={this.handleChange} className="form-control" placeholder="Search by name"/>
                </div>
            </div>
        );
    }

    handleChange = () => {
        this.props.onSearch(this.refs.searchText.value);
    };
}

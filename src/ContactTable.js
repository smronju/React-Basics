import React, {Component} from 'react';
import ContactRow from './ContactRow';

export default class ContactTable extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let _rows = this.props.contacts
        .filter( (_contact) => {
            return _contact.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1;
        })
        .map( (_contact) => {
            return <ContactRow key={_contact.id} id={_contact.id} name={_contact.name} email={_contact.email} gender={_contact.gender} phone={_contact.phone}/>
        });

        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Phone</th>
                            </tr>
                        </thead>

                        <tbody>
                            {_rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

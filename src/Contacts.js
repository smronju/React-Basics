import React, {Component} from 'react';
import ContactTable from './ContactTable';
import Search from './Search';

let _contacts = [
    {
        "id": 1,
        "gender": "Male",
        "name": "Mohammad Shoriful Islam Ronju",
        "email": "smronju@gmail.com",
        "phone": "+8801914433307"
    },
    {
        "id": 2,
        "gender": "Female",
        "name": "Karen Dunn",
        "email": "kdunn1@ca.gov",
        "phone": "33-(121)198-4133"
    }, {
        "id": 3,
        "gender": "Female",
        "name": "Shirley Reed",
        "email": "sreed2@wufoo.com",
        "phone": "81-(680)678-2927"
    }, {
        "id": 4,
        "gender": "Female",
        "name": "Mildred Miller",
        "email": "mmiller3@washington.edu",
        "phone": "380-(270)589-5017"
    },
    {
        "id": 5,
        "gender": "Male",
        "name": "Bobby Barnes",
        "email": "bbarnes4@msn.com",
        "phone": "7-(989)515-9468"
    },
    {
        "id": 6,
        "gender": "Female",
        "name": "Rachel Fisher",
        "email": "rfisher5@geocities.com",
        "phone": "1-(430)519-4960"
    },
    {
        "id": 7,
        "gender": "Female",
        "name": "Phyllis Griffin",
        "email": "pgriffin6@ebay.co.uk",
        "phone": "7-(768)729-5257"
    },
    {
        "id": 8,
        "gender": "Male",
        "name": "Craig Riley",
        "email": "criley7@google.com.br",
        "phone": "33-(132)866-3950"
    },
    {
        "id": 9,
        "gender": "Female",
        "name": "Theresa Hamilton",
        "email": "thamilton8@oaic.gov.au",
        "phone": "52-(261)731-7564"
    },
    {
        "id": 10,
        "gender": "Female",
        "name": "Katherine Green",
        "email": "kgreen9@trellian.com",
        "phone": "30-(403)715-9132"
    }
];

export default class Contacts extends Component {

    constructor(props){
        super(props);

        this.state = {
            filterText: ''
        }
    }

    render(){
        return (
            <div>
                <Search filterText={this.state.filterText} onSearch={this.handleSearch}/>
                <ContactTable filterText={this.state.filterText} contacts={_contacts} />
            </div>
        )
    }

    handleSearch = (searchText) => {
        this.setState({ filterText: searchText });
    };
}

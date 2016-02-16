import React from 'react';
import ReactDOM from 'react-dom';

import Contacts from './Contacts';
import css from '../assets/css/global.css';

ReactDOM.render(<Contacts initialValue={10} />, document.getElementById('app'));

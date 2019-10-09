import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main/Main.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faHome, faBox } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faHome, faBox)

ReactDOM.render(<Main />, document.getElementById('app'))
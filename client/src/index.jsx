import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main/Main.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faHome, faBox, faSort, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

library.add(faChevronDown, faHome, faBox, faSort, faTrashAlt, faTimes)

ReactDOM.render(<Main />, document.getElementById('app'))
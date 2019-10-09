import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main/Main.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown)

ReactDOM.render(<Main />, document.getElementById('app'))
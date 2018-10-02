import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './_helpers/store'

import App from './_components/App/App'

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById("app"));

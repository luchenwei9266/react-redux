import './index.html';
import './index.less';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import App from '../containers/App';
import todoApp from './reducers'
import Routes from '../routes/index';

let store = createStore(todoApp)

let rootElement = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,rootElement);

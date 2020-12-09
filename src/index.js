import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import store from "./store/store"
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    padding : 0;
    margin : 0;
}
`

ReactDOM.render(
  
    <React.StrictMode>
    <GlobalStyle>
        <Provider store={store}>
            <App />
        </Provider>
    </GlobalStyle>

    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import combinedReducers from "./redux/reducers";
import './global.css'


const store = createStore(combinedReducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>,
    </StrictMode>
);
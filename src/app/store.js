import { configureStore } from '@reduxjs/toolkit';
import { default as counterReducer } from './../features/Counter/counterSlice';
// import alias from 'my-module'; two ways import with alias export default
// import {default as alias} from 'my-module'; two ways import with alias export default

const rootReducer = {
    count: counterReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;

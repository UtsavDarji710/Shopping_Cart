// import React from 'react'
import {CartReducer} from './reducer/ReducerFunction'
import { createStore } from 'redux';

export const store = createStore(CartReducer)
console.log(store)
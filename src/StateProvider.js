// set data layer
// we need this to set the basket

import React, { createContext, useContext, useReducer } from 'react';

// THIS IS THE DATA LAYER
export const StateContext = createContext();

//BUILD A PRO VIDER
export const StateProvider = ({ reducer, initialState, children }) => {
    return(<StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>)
};

export const useStateValue = () => useContext(StateContext)

export default StateProvider;
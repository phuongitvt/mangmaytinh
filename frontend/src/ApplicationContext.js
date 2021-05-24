import React, { createContext, useReducer } from 'react';

const initialState = {
    counter: 0,
    user: null,
};

export const ApplicationContext = createContext(initialState);
const { Provider } = ApplicationContext;

export const StateProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer((state, action) => {
        const currentState = { ...state };

        switch (action.type) {
            case "INCREASE_COUNTER":
                currentState.counter = currentState.counter + 1;
                return currentState;
            case "SET_USER":
                currentState.user = action.payload;
                return currentState;
            case "LOG_OUT":
                currentState.user = null;
                return currentState;
            case "LOGIN_SUCCESS":
                console.log('Login success');
                return currentState;
            case "LOGIN_FAIL":
                console.log('Login fail');
                return currentState;
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

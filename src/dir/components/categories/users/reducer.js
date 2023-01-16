import { createContext, useEffect, useReducer } from "react";



export const initialState = {
    overview: true,
    activity: false,
    follows: false,
    changePass: false
}

 


export function myState(state, action) {


    switch (action.type) {
        case 'overview':
            return {
                overview: true,
                activity: false,
                follows: false,
                changePass: false
            };
        case 'activity':
            return {
                activity: true,
                overview: false,
                follows: false,
                changePass: false
            };
        case 'follows':
            return {
                follows: true,
                overview: false,
                activity: false,
                changePass: false
            };
        case 'password':
            return {
                changePass: true,
                overview: false,
                activity: false,
                follows: false,
            };
        default:
            return initialState;
    }
}




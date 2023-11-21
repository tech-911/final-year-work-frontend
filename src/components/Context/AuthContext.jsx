import React, { useEffect, useReducer } from 'react';
import { createContext } from 'react';

export const UserContext = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        case "HOME":
            return { ...state, page: "home" }
        case "CONTROL":
            return { ...state, page: "control" }
        case "MONITOR":
            return { ...state, page: "monitor" }
        case "AUTH":
            return {...state, page:"auth"}
        default:
            return state
    }
}

const AuthContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
       user: null,
        page: "" 
    })
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("User"))
        if (user) {
            dispatch({type:"LOGIN", payload:user})
        }
    },[])

    console.log("States",state)
    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;
import React, { useState, createContext } from 'react';

export const Context = createContext();

export const ContextProvider = (props) => {
    const [ shows, email ] = useState([
        {
            id: 1,
            show: 'Los Globos',
            date: "2019-12-20T00:00:00.000Z",
            emailId: 1,
            email: 'james@gmail.com',
            emailDate: "2019-12-18T00:00:00.000Z",
        },
        {
            id: 2,
            show: 'The Echo',
            date: "2020-01-10T00:00:00.000Z",
            emailId: 2,
            email: 'bob@gmail.com',
            emailDate: "2020-01-12T00:00:00.000Z",
        },
        {
            id: 3,
            show: 'The Smell',
            date: "2020-02-12T00:00:00.000Z",
            emailId: 3,
            email: 'higgs@gmail.com',
            emailDate: "2020-02-14T00:00:00.000Z",
        }
    ]);
    return (
        <Context.Provider value={[ shows, email ]}>
            { props.children }
        </Context.Provider>
    );
}
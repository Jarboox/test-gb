import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../services/auth';


export const Protected = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    console.log("Fake");
                    return (
                        <Redirect to={{ pathname: "/", state: { fromm: props.location } }} />
                    );
                }
            }}
        />
    );
}
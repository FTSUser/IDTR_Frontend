import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../Helpers/auth";

const ProtectedRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            Auth.isUserAuthenticated() ? (
                <Layout {...props}>
                    <Component {...props} />
                </Layout>
            ) : (
                <Layout {...props}>
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props?.location },
                        }}
                    />
                </Layout>
            )
        }
    />
);

export default ProtectedRoute;

import React from "react";
import ErrorPage from "./ErrorPage";
import { ErrorBoundary } from "react-error-boundary";
export default function ReactErrorBoundary(props) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorPage}
            onError={(error, errorInfo) => {
                // log the error
                console.error(error, errorInfo);
            }}
            onReset={() => {
                // reloading the page to restore the initial state
                // of the current page
                console.log("reloading the page...");
                window.location.reload();

                // other reset logic...
            }}
        >
            {props.children}
        </ErrorBoundary>
    );
}

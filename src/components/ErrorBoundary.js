
import React from "react";
import ErrorPage from "./ErrorPage";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        // to keep track of when an error occurs
        this.state = {
            hasError: false,
        };
    }

    // update the component state when an error occurs
    static getDerivedStateFromError(error) {
        // specify that the error boundary has caught an error
        return {
            hasError: true,
        };
    }

    // defines what to do when an error gets caught
    componentDidCatch(error, errorInfo) {
        // log the error
        console.error("Error caught!", error, errorInfo);
    }

    render() {
        // if an error occurred
        if (this.state.hasError) {
            return <ErrorPage />;
        } else {
            // default behavior
            return this.props.children;
        }
    }
}

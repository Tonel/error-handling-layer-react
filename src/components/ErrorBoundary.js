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
        return {
            hasError: true,
        };
    }

    // defines what to do when an error get caught
    componentDidCatch(error, errorInfo) {
        // log the error
        console.error(error, errorInfo);
    }

    render() {
        // if an error occurred
        if (this.state.hasError) {
            return <ErrorPage />;
        }

        return this.props.children;
    }
}

import "./App.css";
import { useMemo, useState } from "react";
import { Select, Switch } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorApp from "./components/ErrorApp";
import ErrorBoundary from "./components/ErrorBoundary";
import ReactErrorBoundary from "./components/ReactErrorBoundary";

function App() {
    const errorHandlingMethods = useMemo(() => {
        return [
            {
                value: "error-boundary",
                label: "Error Boundary",
            },
            {
                value: "react-error-boundary",
                label: "react-error-boundary",
            },
        ];
    }, []);

    const [handleErrors, setHandleErrors] = useState(true);
    const [errorHandlingMethod, setErrorHandlingMethod] = useState(
        errorHandlingMethods[0]
    );

    const mainComponent = useMemo(() => {
        if (handleErrors) {
            if (errorHandlingMethod.value === "error-boundary") {
                return (
                    <ErrorBoundary>
                        <ErrorApp />
                    </ErrorBoundary>
                );
            } else if (errorHandlingMethod.value === "react-error-boundary") {
                return (
                    <ReactErrorBoundary>
                        <ErrorApp handleAsyncError={true} />
                    </ReactErrorBoundary>
                );
            }
        } else {
            return <ErrorApp />;
        }
    }, [handleErrors, errorHandlingMethod]);

    return (
        <div className="container">
            <div className={"row header"}>
                <div className={"col"}>
                    <span className={"label"}>Handling Errors:</span>
                    <Switch
                        checked={handleErrors}
                        onChange={(value) => setHandleErrors(value)}
                    />
                </div>
                <div className={"col"}>
                    <span className={"label"}>Method:</span>
                    <Select
                        disabled={!handleErrors}
                        options={errorHandlingMethods}
                        value={errorHandlingMethod.value}
                        onChange={(value) =>
                            setErrorHandlingMethod(
                                errorHandlingMethods.find((e) => e.value === value)
                            )
                        }
                    />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>{mainComponent}</div>
            </div>
        </div>
    );
}

export default App;

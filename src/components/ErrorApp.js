import "./ErrorApp.css";
import { useErrorHandler } from "react-error-boundary";
import { useState } from "react";

function asyncError() {
    return new Promise((resolve, reject) => {
        // raise an error after 200ms
        setTimeout(() => {
            reject(new Error(`Async error raised`));
        }, 200);
    });
}
export default function ErrorApp(props) {
    const handleError = useErrorHandler();

    const [raiseError, setRaiseError] = useState(false);

    return (
        <div className={"error-app"}>
            <div>
                <button
                    className={"error-button"}
                    onClick={() => setRaiseError((error) => !error)}
                >
                    💥 Simulate Error
                </button>
                {raiseError ? new Error("") : undefined}
            </div>
            <div>
                <button
                    className={"error-button"}
                    onClick={() => {
                        asyncError()
                            .then(() => {
                                console.log("waited successfully");
                            })
                            .catch((e) => {
                                if (props.handleAsyncError) {
                                    handleError(e);
                                } else {
                                    throw e;
                                }
                            });
                    }}
                >
                    ⌛ Simulate Async Error
                </button>
            </div>
        </div>
    );
}

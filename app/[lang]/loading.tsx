import {JSX} from "react";

export default function Loading(): JSX.Element {
    return (
        <div className="loading">
            <div className="lds-dual-ring"></div>
        </div>
    );
}
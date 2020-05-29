import React from "react"

const Error = (props) => {
    return (
        <div className="errorContainer">
            <i class="times circle outline large icon">
                <h4>{`ERROR: ${props.error}`}</h4>
            </i>
        </div>
    )
}

export default Error
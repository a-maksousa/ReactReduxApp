import React from "react"

const CustomSegment = (props) => {
    return (
        <div className="ui segment" style={{ height: "70vh", overflow: "auto" }}>
            {props.children}
        </div>
    )
}

export default CustomSegment
import React from "react"

const CustomSegment = (props) => {
    return (
        <div className="ui segment" style={{ height: "70vh", overflow: "auto", marginTop:20 }}>
            {props.children}
        </div>
    )
}

export default CustomSegment
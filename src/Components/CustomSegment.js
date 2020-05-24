import React from "react"

const CustomSegment = (props) => {
    return (
        <div className="ui segment" style={{ height: "75vh", width: "100%", overflow: "auto", marginTop:20 }}>
            {props.children}
        </div>
    )
}

export default CustomSegment
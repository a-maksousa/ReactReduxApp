import React from "react"

export default class UserListItem extends React.Component {

    render() {
        return (
            <p>{this.props.user.name}</p>
        )
    }
}


import React from "react"

export default class UserListItem extends React.Component {

    render() {
        return (
            <div className="ui segment">
                <h3 className="ui header" >{this.props.user.name}</h3>

                <a class="item">
                    <i class="map marker alternate icon"></i> {this.props.user.address.city}
                </a>

                <div class="ui divider"></div>
                <button class="ui secondary basic button">More Info</button>
            </div>
        )
    }
}


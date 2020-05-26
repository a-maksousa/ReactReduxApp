import React from "react"
import { connect } from "react-redux"
import { GetUserDetails } from "../Actions"

class UserListItem extends React.Component {

    render() {
        return (
            <div className="ui segment">
                <h3 className="ui header" >{this.props.user.name}</h3>

                <i className="map marker alternate icon"></i>
                <span>{this.props.user.address.city}</span>

                <div className="ui divider"></div>
                <button onClick={() => this.props.GetUserDetails(this.props.user.id)} className="ui secondary basic button">More Info</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SelectedUser: state.SelectedUser
    }
}

export default connect(mapStateToProps, { GetUserDetails })(UserListItem)
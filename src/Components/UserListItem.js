import React from "react"
import { connect } from "react-redux"
import { SelectUser } from "../Actions"
class UserListItem extends React.Component {

    render() {
        return (
            <div className="ui segment">
                <h3 className="ui header" >{this.props.user.name}</h3>

                <a class="item">
                    <i class="map marker alternate icon"></i> {this.props.user.address.city}
                </a>

                <div class="ui divider"></div>
                <button onClick={() => this.props.SelectUser(this.props.user.id)} class="ui secondary basic button">More Info</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SelectedUser: state.SelectedUser
    }
}

export default connect(mapStateToProps, { SelectUser })(UserListItem)
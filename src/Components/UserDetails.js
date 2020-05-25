import React from "react"
import { connect } from "react-redux"

class UserDetails extends React.Component {
    render() {
        return (
            <p>
                {this.props.SelectedUser}
            </p>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SelectedUser: state.SelectedUser
    }

}

export default connect(mapStateToProps)(UserDetails)
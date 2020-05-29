import React from "react"
import { connect } from "react-redux"
import { GetUsers } from "../Actions"
import Loader from "./Loader"
import UserListItem from "./UserListItem"
import Error from "./Error"

class UsersList extends React.Component {
    componentDidMount() {
        this.props.GetUsers();
    }

    render() {
        if (this.props.error) {
            return (
                <Error error={this.props.error} />
            )
        }
        if (this.props.Users.length === 0) {
            return (
                <Loader />
            )
        }
        return (
            this.props.Users.map(
                user => <UserListItem key={user.id} user={user} />
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Users: state.Users.data,
        error: state.Users.error
    }
}

export default connect(mapStateToProps, { GetUsers })(UsersList)
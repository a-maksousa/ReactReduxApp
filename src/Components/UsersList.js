import React from "react"
import { connect } from "react-redux"
import { GetUsers } from "../Actions"
import Loader from "./Loader"
import UserListItem from "./UserListItem"
class UsersList extends React.Component {
    componentDidMount() {
        this.props.GetUsers();
    }

    render() {
        if (this.props.Users.length === 0) {
            return (
                <Loader />
            )
        }
        else {
            return (
                this.props.Users.map(
                    user => <UserListItem key={user.id} user={user} />
                )
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Users: state.Users
    }
}

export default connect(mapStateToProps, { GetUsers })(UsersList)
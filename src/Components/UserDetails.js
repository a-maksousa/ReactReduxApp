import React from "react"
import { connect } from "react-redux"
import Loader from "./Loader"
import { GetUserDetails } from "../Actions"
import MapBox from "./MapBox"
import faker from "faker"
import Error from "./Error"

class UserDetails extends React.Component {

    componentDidMount() {
        this.props.GetUserDetails(1);
    }

    render() {
        if (this.props.error) {
            return (
                <Error error={this.props.error} />
            )
        }

        if (!this.props.UserDetails) {
            return (
                <Loader />
            )
        }

        return (
            <div>
                <div style={{ float: "right" }} className={this.props.isFetching ? "ui active inline loader" : "ui disabled inline loader"} />
                <img className="ui small left floated image" src={faker.image.avatar()} alt={faker.image.alt} />
                <h2 className="ui header" style={{ margin: 0 }}>{this.props.UserDetails.name} </h2>

                <div className="ui list" style={{ display: "grid" }}>
                    <div className="item">
                        <i className="mobile alternate icon"></i>
                        <div className="content">
                            {this.props.UserDetails.phone}
                        </div>
                    </div>
                    <div className="item">
                        <i className="map marker alternate icon"></i>
                        <div className="content">
                            {`${this.props.UserDetails.address.city} | ${this.props.UserDetails.address.street} | ${this.props.UserDetails.address.suite}`}
                        </div>
                    </div>
                    <div className="item">
                        <i className="building outline icon"></i>
                        <div className="content">
                            {this.props.UserDetails.name}
                        </div>
                    </div>
                    <div className="item">
                        <i className="envelope outline icon"></i>
                        <div className="content">
                            <a href={`mailto:${this.props.UserDetails.email}`}>{this.props.UserDetails.email}</a>
                        </div>
                    </div>
                    <div className="item">
                        <i className="linkify icon"></i>
                        <div className="content">
                            <a href={`http://${this.props.UserDetails.website}`} target="_blank" rel="noopener noreferrer">{this.props.UserDetails.website}</a>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <MapBox geo={this.props.UserDetails.address.geo} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        UserDetails: state.UserDetails.data,
        isFetching: state.UserDetails.isFetching,
        error: state.UserDetails.error
    }

}

export default connect(mapStateToProps, { GetUserDetails })(UserDetails)
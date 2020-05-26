import React from "react"
import { connect } from "react-redux"
import Loader from "./Loader"
import { GetUserDetails } from "../Actions"
import MapBox from "./MapBox"
class UserDetails extends React.Component {

    componentDidMount() {
        this.props.GetUserDetails(1);
    }

    render() {
        if (!this.props.UserDetails) {
            return (
                <Loader />
            )
        }
        else {

            return (
                <div>
                    <img class="ui small left floated image" src={this.props.UserDetails.image.url} alt={this.props.UserDetails.image.alt} />
                    <h2 className="ui header" style={{ margin: 0 }}>{this.props.UserDetails.name} </h2>

                    <div class="ui list" style={{ display: "grid" }}>
                        <div class="item">
                            <i class="mobile alternate icon"></i>
                            <div class="content">
                                {this.props.UserDetails.phone}
                            </div>
                        </div>
                        <div class="item">
                            <i class="map marker alternate icon"></i>
                            <div class="content">
                                {this.props.UserDetails.fullAddress}
                            </div>
                        </div>
                        <div class="item">
                            <i class="building outline icon"></i>
                            <div class="content">
                                {this.props.UserDetails.name}
                            </div>
                        </div>
                        <div class="item">
                            <i class="envelope outline icon"></i>
                            <div class="content">
                                <a href="mailto:jack@semantic-ui.com">{this.props.UserDetails.email}</a>
                            </div>
                        </div>
                        <div class="item">
                            <i class="linkify icon"></i>
                            <div class="content">
                                <a href="http://www.semantic-ui.com">{this.props.UserDetails.website}</a>
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
}

const mapStateToProps = (state) => {
    return {
        UserDetails: state.UserDetails
    }

}

export default connect(mapStateToProps, { GetUserDetails })(UserDetails)
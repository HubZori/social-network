/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (<div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let MapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    fullName: state.profilePage.fullName,
})

export default compose(
    connect(MapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
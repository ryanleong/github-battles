import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/profileActions';

class Home extends Component {
    constructor(props) {
        super(props);

        this.searchInputTimeout;

        this.state = {
            user1: '',
            user2: ''
        };

        this.onKeypress = this.onKeypress.bind(this);
    }

    onKeypress(e) {
        if (e.key === 'Enter') {
            this.props.fetchProfile(this.state[e.target.id], e.target.id);
        }
        else {
            const tempState = this.state;
            tempState[e.target.id] = e.target.value;
            this.setState(tempState);
        }
    }

    renderUser(fieldId) {
        let profile;

        if (fieldId === 1) profile = this.props.profiles.user1;
        else profile = this.props.profiles.user2;

        if (profile === undefined) {
            return (
                <p className="lead text-center">Enter a username</p>
            );
        }

        profile = profile.profile;

        if (profile.message !== undefined) {
            return (
                <p className="lead text-center">User not found</p>
            );
        }

        const score = profile.public_repos + profile.public_gists + profile.followers;

        return (
            <React.Fragment>
                <h3>{profile.login}</h3>
                <h5>Score: {score}</h5>

                <p className="lead">{profile.bio}</p>

                <hr className="my-4" />

                <p className="lead">List of details</p>

                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        Public Repos
                        <span className="badge badge-primary badge-pill">{profile.public_repos}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        Public Gist
                        <span className="badge badge-primary badge-pill">{profile.public_gists}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        Followers
                        <span className="badge badge-primary badge-pill">{profile.followers}</span>
                    </li>
                </ul>

                <p></p>

                <p className="lead">
                    <a className="btn btn-primary" href={profile.html_url} role="button">Go to profile</a>
                </p>
            </React.Fragment>
        );
    }

    render() {

        return (
            <div className="container home">

                <div className="row">
                    <div className="col-md-12">
                        <h1>Github Battles</h1>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="user1Label">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="user1Label" id="user1" onKeyUp={this.onKeypress} />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="user2Label">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="user2Label" id="user2" onKeyUp={this.onKeypress} />
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            {this.renderUser(1)}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="jumbotron">
                            {this.renderUser(2)}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    profiles: state.profiles,
});

export default connect(mapStateToProps, { fetchProfile })(Home);

import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="container home">
                <h1>Github Battles</h1>

                <div className="row">

                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="user1Label">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="user1Label" id="user1" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="user2Label">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="user2Label" id="user2" />
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            <h3>Username</h3>
                            <p className="lead">Description</p>

                            <hr className="my-4" />

                            <p>List of details</p>

                            <p className="lead">
                                <a className="btn btn-primary" href="#" role="button">Go to profile</a>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">

                    </div>

                </div>

            </div>
        )
    }
}

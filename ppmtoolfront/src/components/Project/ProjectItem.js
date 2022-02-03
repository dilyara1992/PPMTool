import React from 'react';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class ProjectItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div>
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">REACT</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>Spring / React Project</h3>
                            <p>Project to create a Kanban Board with Spring Boot and React</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <a href="#">
                                    <li className="list-group-item board">
                                        <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1"> Update Project Info</i>
                                    </li>
                                </a>
                                <a href="">
                                    <li className="list-group-item delete">
                                        <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>;
    }
}

ProjectItem.propTypes = propTypes;
ProjectItem.defaultProps = defaultProps;
// #endregion

export default ProjectItem;
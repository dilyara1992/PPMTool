import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';

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
class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div>


            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br />
                            <CreateProjectButton />
                            <br />
                            <hr />
                            <ProjectItem />
                        </div>
                    </div>
                </div>
            </div>

        </div>;
    }
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

export default Dashboard;
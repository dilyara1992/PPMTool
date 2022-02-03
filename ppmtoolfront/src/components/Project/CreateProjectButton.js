import React from 'react';
import { Link } from 'react-router-dom';
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
const CreateProjectButton = () => {
    return <React.Fragment>
        <Link to="/addProject"
            className="btn btn-lg btn-info">
            Create Project
        </Link>
    </React.Fragment>;
}

CreateProjectButton.propTypes = propTypes;
CreateProjectButton.defaultProps = defaultProps;
// #endregion

export default CreateProjectButton;
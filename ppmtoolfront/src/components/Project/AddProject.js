import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import createProject from "../../actions/projectActions";
import { useParams, useNavigate } from "react-router-dom";
import { useReducer, useState } from 'react';
import formReducer from "../../reducers/addProjectReducer";
import axios from "axios";
import { GET_ERRORS } from "../../actions/types";

const defaultState = {
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: ""
};


function AddProject(props) {


    const [formState, dispatch] = useReducer(formReducer, defaultState)
    let navigate = useNavigate();


    const handleTextChange = (e) => {
        dispatch({
            type: "HANDLE INPUT TEXT",
            field: e.target.name,
            payload: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {

        e.preventDefault();
        console.log(formState)
        // axios.post("http://localhost:8080/api/project", formState)
        //     .then(res => console.log('Data send'))
        //     .catch(err => console.log(err.data))
        props.createProject(formState, navigate)
        console.log("here")
    }



    return (
        <div>

            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Project form</h5>
                            <hr />
                            <form onSubmit={(e) => {
                                return handleOnSubmit(e)
                            }}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Project Name"
                                        name="projectName"
                                        value={formState.projectName}
                                        onChange={(e) => handleTextChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={formState.projectIdentifier}
                                        onChange={(e) => handleTextChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        placeholder="Project Description"
                                        name="description"
                                        value={formState.description}
                                        onChange={(e) => handleTextChange(e)}
                                    />
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="start_date"
                                        value={formState.start_date}
                                        onChange={(e) => handleTextChange(e)}
                                    />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="end_date"
                                        value={formState.end_date}
                                        onChange={(e) => handleTextChange(e)}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


AddProject.propTypes = {
    createProject: PropTypes.func.isRequired
};

export default connect(
    null,
    { createProject }
)(AddProject);
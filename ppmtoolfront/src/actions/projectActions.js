import axios from "axios";
import { GET_ERRORS } from "./types";
import { useParams, useNavigate } from "react-router-dom";

const createProject = (project, navigate) => async dispatch => {
    console.log(project)

    try {
        console.log("Project inside createProject", project)
        const res = await axios.post("http://localhost:8080/api/project", project);
        navigate("/dashboard")
    } catch (err) {
        console.log(err.message)
        dispatch({
            type: GET_ERRORS,
            payload: err.response.status
        });
    }
};

export default createProject;
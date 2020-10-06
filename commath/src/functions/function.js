import axios from "axios";

const apiHost = "http://127.0.0.1:8000";

export const getB2s = (b2s) => {
    return axios
        .get(apiHost + `/b2s/${b2s}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getElimination = (data) => {
    return axios
        .post(apiHost + `/elimination`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};


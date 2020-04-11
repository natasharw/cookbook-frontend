import superagentPromise from "superagent-promise";
import _superagent from "superagent";

import { API_ROOT } from "./constants/index.js";

const superagent = superagentPromise(_superagent, global.Promise);

const responseBody = res => res.body;

let token =  null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
}

const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.get(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

// const Timings = {
//     getAll: () => requests.get('/recipes')
// };

const Recipes = {
    all: page =>
            requests.get('recipes'),
    get: pk =>
        requests.get(`/recipes/${pk}`)
};

export default {
    Recipes,
    // Timings,
    setToken: _token => { token = _token; }
};
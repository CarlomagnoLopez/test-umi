import request from '../utils/request';
// import constants from '../constants';
import { GIT_HUB_URL, AUTH_TOKEN_GIT, PER_PAGE } from '../constants';

export function getGitHubPublicRepos({ since }) {
    return request(`${GIT_HUB_URL}/users?since=${since}&per_page=${PER_PAGE}`, {
        method: 'GET',
        headers: {
            'Authorization': `${AUTH_TOKEN_GIT}`,
            'Content-Type': 'application/json'
        },
    });
}

export function getOneUser({ filter }) {
    return request(`${GIT_HUB_URL}/users/${filter}`, {
        method: 'GET',
        headers: {
            'Authorization': `${AUTH_TOKEN_GIT}`,
            'Content-Type': 'application/json'
        },
    });
}
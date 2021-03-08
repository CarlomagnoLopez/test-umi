import { getGitHubUser, getOneUser, getGitHubRepos } from '@/services/api';

export default {
    namespace: 'datalayer',
    state: {
        loading: false
    },
    effects: {
        * fetch({ payload }, { call, put }) {
            yield put({
                type: 'changeLoader',
                payload: "",
            });
            const response = yield call(getGitHubUser, payload);
            yield put({
                type: 'getGitHubUser',
                payload: response,
            });

        },

        * fetchRepos({ payload }, { call, put }) {
            yield put({
                type: 'changeLoader',
                payload: "",
            });
            const response = yield call(getGitHubRepos, payload);
            yield put({
                type: 'getGitHubRepoByOrg',
                payload: response,
            });

        },
        * originalstate({ payload }, { call, put }) {

            yield put({
                type: 'resetState',
                payload: payload,
            });

        },
        * byOneRepos({ payload }, { call, put }) {
            yield put({
                type: 'changeLoader',
                payload: "",
            });
            const response = yield call(getOneUser, payload);
            yield put({
                type: 'getOneRepo',
                payload: response,
            });

        },
        * byOne({ payload }, { call, put }) {
            yield put({
                type: 'changeLoader',
                payload: "",
            });
            const response = yield call(getOneUser, payload);
            yield put({
                type: 'getOneUser',
                payload: response,
            });

        },
    },
    reducers: {
        getGitHubUser(state, { payload }) {
            const { data, err } = payload;
            return {
                ...state,
                loading: false,
                data,
                err
            };
        },

        getGitHubRepoByOrg(state, { payload }) {
            const { data, err } = payload;
            return {
                ...state,
                loading: false,
                data,
                err
            };
        },

        getOneUser(state, { payload }) {
            const { data, err } = payload;
            return {
                ...state,
                loading: false,
                data,
                err
            };
        },
        getOneRepo(state, { payload }) {
            const { data, err } = payload;
            return {
                ...state,
                loading: false,
                data,
                err
            };
        },
        resetState(state, { payload }) {
            state = undefined
            return {...state
            };
        },

        changeLoader(state, { payload }) {
            return {
                ...state,
                loading: true
            };
        },
    },
};
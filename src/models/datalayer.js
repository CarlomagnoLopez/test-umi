import { getGitHubPublicRepos, getOneUser } from '@/services/api';

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
            const response = yield call(getGitHubPublicRepos, payload);
            yield put({
                type: 'getGitHubRepos',
                payload: response,
            });

        },
        * originalstate({ payload }, { call, put }) {

            yield put({
                type: 'resetState',
                payload: payload,
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
        getGitHubRepos(state, { payload }) {
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
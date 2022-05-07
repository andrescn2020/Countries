import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const FILTER_Z_TO_A = 'FILTER_Z_TO_A';
export const FILTER_A_TO_Z = 'FILTER_A_TO_Z';
export const FILTER_AFRICA = 'FILTER_AFRICA';
export const FILTER_AMERICA = 'FILTER_AMERICA';
export const FILTER_ANTARTIDA = 'FILTER_ANTARTIDA';
export const FILTER_ASIA = 'FILTER_ASIA';
export const FILTER_OCEANIA = 'FILTER_OCEANIA';
export const FILTER_HIGH_POP = 'FILTER_HIGH_POP';
export const FILTER_LOW_POP = 'FILTER_LOW_POP';

export const getAllCountries = () => {
    return async function (dispatch) {
        try {
            return axios.get('http://localhost:3001/api/countries/')
                .then(res => dispatch({ type: GET_ALL_COUNTRIES, payload: res.data }))

        } catch (err) {
            console.error(err);
        }
    };
};

export const getAllActivities = () => {
    return async function (dispatch) {
        try {
            return axios.get('http://localhost:3001/api/activity/')
                .then(res => dispatch({ type: GET_ALL_ACTIVITIES, payload: res.data }))

        } catch (err) {
            console.error(err);
        }
    };
};

export const filterZtoA = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/api/countries/ZtoA`)
                .then(res => dispatch({ type: FILTER_Z_TO_A, payload: res.data }))

        } catch (err) {
            console.error(err)
        }
    };
};

export const filterAtoZ = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/api/countries/AtoZ`)
                .then(res => dispatch({ type: FILTER_A_TO_Z, payload: res.data }))

        } catch (err) {
            console.error(err)
        }
    };
};

export const filterAfrica = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/api/countries/FilterAfrica`)
                .then(res => dispatch({ type: FILTER_AFRICA, payload: res.data }))

        } catch (err) {
            console.error(err)
        }
    };
};

export const filterAmerica = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/api/countries/FilterAmerica`)
                .then(res => dispatch({ type: FILTER_AMERICA, payload: res.data }))

        } catch (err) {
            console.error(err)
        }
    };
};

export const filterAntartida = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/api/countries/FilterAntartida`)
                .then(res => dispatch({ type: FILTER_ANTARTIDA, payload: res.data }))

        } catch (err) {
            console.error(err)
        }
    };
};

export const filterAsia = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/api/countries/FilterAsia`)
                .then(res => dispatch({ type: FILTER_ASIA, payload: res.data }))

        } catch (err) {
            console.error(err)
        }
    };
};

export const filterOceania = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/api/countries/FilterOceania`)
                .then(res => dispatch({ type: FILTER_OCEANIA, payload: res.data }))

        } catch (err) {
            console.error(err)
        }
    };
};

export const filterHighPop = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/api/countries/FilterHighPop`)
                .then(res => dispatch({ type: FILTER_HIGH_POP, payload: res.data }))

        } catch (err) {
            console.error(err)
        }
    };
};

export const filterLowPop = () => {
    return async (dispatch) => {
        try {
            return axios.get(`http://localhost:3001/api/countries/FilterLowPop`)
                .then(res => dispatch({ type: FILTER_LOW_POP, payload: res.data }))

        } catch (err) {
            console.error(err)
        }
    };
};

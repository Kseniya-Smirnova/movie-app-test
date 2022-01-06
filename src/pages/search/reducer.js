import { ACTIONS } from './constants';
import { PLOT_TYPES } from '../../constants/constants';

export const getInitialState = () => {
    return {
        searchResults: [],
        plot: PLOT_TYPES.FULL,
        searchPattern: '',
        totalResults: 0,
        page: 1,
        loading: false,
    }
}

export const reducer = (state, { type, payload }) => {
    switch(type) {
        case ACTIONS.SEARCH_DATA_LOADED:
            return {
                ...state,
                searchResults: payload.results || [],
                plot: payload.plot || PLOT_TYPES.FULL,
                searchPattern: payload.title || '',
                totalResults: (payload.totalResults && parseInt(payload.totalResults)) || 0,
                loading: false,
                page: 1,
            }
        case ACTIONS.SEARCH_LOAD_STARTED:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
};


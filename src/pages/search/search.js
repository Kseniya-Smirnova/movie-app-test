import React, { useReducer } from 'react';
import {
    Link
} from 'react-router-dom';
import { MovieLayout } from '../../components/movie-layout/movie-layout';
import { MovieSearchForm } from '../../components/movie-search-form/movie-search-form';
import { Main } from '../parts';
import { PAGES } from '../../constants/constants';
import { SEARCH_ITEM_CONFIG } from '../../components/movie-item/configuration';
import { TotalResults } from '../../components/total-results/total-results';
import { reducer, getInitialState } from './reducer';
import { ACTIONS } from './constants';

export const Search = () => {
    const [state, dispatch] = useReducer(reducer, getInitialState());

    const onSearchResultHandler = async ({ title, plot }) => {
        dispatch({
            type: ACTIONS.SEARCH_LOAD_STARTED,
        });
        const result = await fetch(`${process.env.REACT_APP_API_URL}?s=${title}&apikey=${process.env.REACT_APP_API_KEY}`);
        const { Search, totalResults } = await result.json() || {};
        if (Search && Search.length) {
            const ids = Search.map(({ imdbID }) => imdbID);
            try {
                const results = await Promise.all(
                    ids.map((id) => fetch(`${process.env.REACT_APP_API_URL}?i=${id}&apikey=${process.env.REACT_APP_API_KEY}&plot=${plot}`)
                        .then((res) => res.json()))
                );
                dispatch({
                    type: ACTIONS.SEARCH_DATA_LOADED,
                    payload: { title, plot, totalResults, results },
                });
            } catch (e) {
                // TODO something with error
            }
        } else {
            dispatch({
                type: ACTIONS.SEARCH_DATA_LOADED,
                payload: {},
            });
        }
    };

    return (
        <Main>
            <h1>Search movie page</h1>
            <Link to={PAGES.HOME}>Go to feature page</Link>
            <MovieSearchForm onSearchResultHandler={onSearchResultHandler} isLoading={state.loading} />
            <TotalResults totalResults={state.totalResults} searchPattern={state.searchPattern} />
            {state.searchResults.length
                ? <>
                    <MovieLayout
                        searchResults={state.searchResults}
                        plotType={state.plot}
                        config={SEARCH_ITEM_CONFIG}
                    />
                    <div>Here should be pagination</div>
                </>
                : <div>Enter valid substring to find movie</div>}
        </Main>
    );
}


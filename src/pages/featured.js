import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Main } from './parts';
import { FEATURE_ITEM_CONFIG } from '../components/movie-item/configuration';
import { MovieLayout } from '../components/movie-layout/movie-layout';
import { PLOT_TYPES, PAGES } from '../constants/constants';

// TODO suppose that ids of movie we get from some content system
const MOVIE_IDS = ['tt0398808', 'tt3682448'];
const createUrl = (id) => (
    `${process.env.REACT_APP_API_URL}?i=${id}&apikey=${process.env.REACT_APP_API_KEY}&plot=${PLOT_TYPES.FULL}`
);

export const Featured = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const getData = async () => {
        setLoading(true);
        try {
            const result = await Promise.all(
                MOVIE_IDS.map((id) => fetch(createUrl(id)).then((res) => res.json()))
            );
            setMovies(result);
        } catch (e) {
            // TODO something with error
        }
        setLoading(false);
    };

  useEffect(() => {
      getData();
  }, []);

  if (loading) {
      return (<Main>Movie is loading...</Main>);
  }
  if (movies && !movies.length) {
      return (<Main>No movie to show</Main>)
  }
  return (
      <Main>
          <h1>Movies worth watching</h1>
          <Link to={PAGES.SEARCH}>Go to search page</Link>
          <MovieLayout searchResults={movies} plotType={PLOT_TYPES.FULL} config={FEATURE_ITEM_CONFIG} />
      </Main>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import { Main } from './parts';
import { PAGES } from '../constants/constants';

export function NotFound() {
  return (
      <Main>
          <br />
          <Link to={PAGES.HOME}>Go to feature page</Link>
          <br />
          <Link to={PAGES.SEARCH}>Go to search page</Link>
          <br />
          <p>The page is not found</p>
      </Main>
  );
}


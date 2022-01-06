import React from 'react';

export const TotalResults = ({
    searchPattern,
    totalResults,
}) => {
  if (!searchPattern || !totalResults) {
    return null;
  }
  return (
      <p>
          You were looking movies for <strong>{searchPattern}</strong> pattern.
          <br />
          There were <strong>{totalResults}</strong> have found.
      </p>
  );
}


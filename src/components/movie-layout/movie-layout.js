import {
  Container,
  MovieSlot,
} from './parts';
import { MovieItem } from '../movie-item/movie-item';

export const MovieLayout = ({
    searchResults,
    plotType,
    config,
}) => (
    <Container>
      {searchResults.map((movie) => (
          <MovieSlot key={movie.imdbID}>
            <MovieItem fields={{ ...movie, plotType }} config={config} />
          </MovieSlot>
      ))}
    </Container>
);


import { ItemList, createList, PlotItem } from './movie-item-elements';

export const SEARCH_ITEM_CONFIG = {
  Title: {
    label: 'Title',
  },
  Released: {
    label: 'Released',
  },
  Type: {
    label: 'Type',
  },
  Year: {
    label: 'Year',
  },
  Rated: {
    label: 'Rated',
  },
  Genre: {
    label: 'Genre',
    contentCreator: ({ Genre }) => (<ItemList list={createList(Genre)} />),
  },
  Director: {
    label: 'Director',
  },
  Actors: {
    label: 'Actors',
    contentCreator: ({ Actors }) => (<ItemList list={createList(Actors)} />),
  },
  Writer: {
    label: 'Writer',
    contentCreator: ({ Writer }) => (<ItemList list={createList(Writer)} />),
  },
  Awards: {
    label: 'Awards',
  },
  Plot: {
    label: 'Description',
    contentCreator: ({ Plot, plotType }) => (<PlotItem plot={Plot} plotType={plotType} />),
  },
};

export const FEATURE_ITEM_CONFIG = {
  Title: {
    label: 'Title of movie',
  },
  Year: {
    label: 'Year of production',
  },
  Awards: {
    label: 'Awards',
  },
  Plot: {
    label: 'Description',
    contentCreator: ({ Plot, plotType }) => (<PlotItem plot={Plot} plotType={plotType} />),
  },
};

import { createReducer, on } from '@ngrx/store';
import {
  AddBook,
  RemoveBook,
  AddBookSuccess,
  AddBookFailure,
} from './book.actions';
import { Book } from '../book.model';

export const initialState: Array<Book> = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state) => {
    return state;
  }),
  on(AddBookSuccess, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(AddBookFailure, (state, { error }) => {
    console.error('[ __Add Book Error__]: ', error);
    return state;
  }),

  on(RemoveBook, (state, { bookId }) =>
    state.filter((book) => book.id !== bookId)
  )
);

import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../book.model";


export const initialState: Array<Book> = [];

export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);
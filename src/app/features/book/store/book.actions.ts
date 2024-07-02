import { createAction, props } from "@ngrx/store";
import { Book } from "../book.model";



export const AddBook = createAction('[ Book Page ] Add Book', props<Book>());
export const AddBookSuccess = createAction('[ Book API ] Add Book Successfully', props<Book>());
export const AddBookFailure = createAction('[ Book API ] Add Book Failure', props<{error: any}>());

export const RemoveBook = createAction('[ Book ] Remove Book', props<{bookId: string}>());
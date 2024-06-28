import { Book } from "./features/book/book.model";

export interface AppState {
    readonly book: Book[]
}

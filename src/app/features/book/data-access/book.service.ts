import { Injectable } from '@angular/core';
import { Book } from '../book.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book> {
    return of(book);
  }
}

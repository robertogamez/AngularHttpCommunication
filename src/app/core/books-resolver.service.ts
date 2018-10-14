import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';
import { BookTrackerError } from '../models/bookTrackerError';
import { DataService } from './data.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookResolverService implements Resolve<Book[] | BookTrackerError> {
    constructor(
        private dataService: DataService
    ) {

    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Book[] | BookTrackerError> {
        return this.dataService.getAllBooks()
            .pipe(
                catchError(err => of(err))
            );
    }
}
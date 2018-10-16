import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private quoteSource = new BehaviorSubject<string>("The ones that are crazy enough to think that they can change the world, are the ones who do.");
    currentQuote = this.quoteSource.asObservable();

    private authorSource = new BehaviorSubject<string>("Steve Jobs");
    currentAuthor = this.authorSource.asObservable();

    constructor() {}

    changeQuote(quote: string) {
      this.quoteSource.next(quote);
    }
    changeAuthor(author: string) {
      this.authorSource.next(author);
    }
}

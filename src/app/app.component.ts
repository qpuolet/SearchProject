import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'search-field',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    queryObservable : FirebaseListObservable<any[]>;
    sortedItems: Array<any> = [];

    constructor(db: AngularFireDatabase) {
        this.queryObservable = db.list('/SearchHistory');
        this.queryObservable.subscribe(queriedItems =>{
            this.sortedItems = queriedItems.sort((a, b) => b.value- a.value);
        });
    };
}

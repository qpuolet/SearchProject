
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

@Injectable()
export class DataService {
    queryObservable : FirebaseListObservable<any[]>;
    sortedItems: Array<any> = [];

  constructor(private db: AngularFireDatabase) {}

  getItems() :FirebaseListObservable<any[]> {
      return this.db.list('/SearchHistory');
  };

  onDeleteItem(key: string) {
      return this.db.list('/SearchHistory').remove(key);
  }

  onAddItem(value: any) {
      const currentDate = new Date();
      const searchDate = currentDate.toJSON().slice(0,10).replace(/-/g,'/') + ' ' + currentDate.toString().slice(16,25);

      return this.db.list('/SearchHistory').push({ searchText: value.searchText, searchDate: searchDate, value: Date.now() });
  }
}

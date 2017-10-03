import { Component, Input } from '@angular/core';
import { AngularFireDatabase ,FirebaseListObservable } from 'angularfire2/database';


@Component({
    moduleId: module.id,
    selector: 'history-item',
    templateUrl: 'history-item.component.html',
    styleUrls: ['history-item.component.css'],
})
export class HistoryItemComponent {
    @Input() item;
    items: FirebaseListObservable<any[]>;

    constructor(db: AngularFireDatabase) {
        this.items = db.list('/SearchHistory');
    }

    deleteItem(key: string) {
      this.items.remove(key);
    }
}

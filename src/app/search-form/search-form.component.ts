import { Component, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'search-form',
    templateUrl: 'search-form.component.html',
    styleUrls: ['search-form.component.css'],
})
export class SearchFormComponent {
    items: FirebaseListObservable<any[]>;
    searchForm: FormGroup;
    searchText: string = '';

    constructor(private fb: FormBuilder, db: AngularFireDatabase){
        this.searchForm = fb.group({
            'searchText': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(100)])]
        });
        this.items = db.list('/SearchHistory');

    }

    find(find) {
        this.searchText = find.searchText;
        const currentDate = new Date();
        const searchDate = currentDate.toJSON().slice(0,10).replace(/-/g,'/') + ' ' + currentDate.toString().slice(16,25);
        this.items.push({ searchText: this.searchText, searchDate: searchDate, value: Date.now() });
    }
}

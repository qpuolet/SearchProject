import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../service/data.service';

@Component({
    moduleId: module.id,
    selector: 'search-form',
    templateUrl: 'search-form.component.html',
    styleUrls: ['search-form.component.css'],
})
export class SearchFormComponent{
    searchForm: FormGroup;

    constructor(private fb: FormBuilder, private dataService: DataService){
        this.searchForm = fb.group({
            'searchText': [null,Validators.compose([
                                                    Validators.required,
                                                    Validators.minLength(1),
                                                    Validators.maxLength(100)
                                                    ])],
        });

    }

    onFind(value: any) {
        this.dataService.onAddItem(value);
    }
}

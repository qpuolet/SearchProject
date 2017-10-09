import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';

@Component({
  selector: 'search-field',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
    sortedItems: Array<any> = [];

    constructor(private dataService: DataService) {};

    ngOnInit() {
        return this.dataService.getItems().subscribe(queriedItems =>{
            this.sortedItems = queriedItems.sort((a, b) => b.value- a.value);
        });
    }
}

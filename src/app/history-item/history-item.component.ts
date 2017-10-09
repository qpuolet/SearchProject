import { Component, Input } from '@angular/core';

import { DataService } from '../../service/data.service';


@Component({
    moduleId: module.id,
    selector: 'history-item',
    templateUrl: 'history-item.component.html',
    styleUrls: ['history-item.component.css'],
})
export class HistoryItemComponent {
    @Input() item;

    constructor(private dataService: DataService) {}

    deleteItem(key: string) {
      this.dataService.onDeleteItem(key);
    }
}

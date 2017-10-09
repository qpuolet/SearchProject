import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { DataService } from '../service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HistoryItemComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

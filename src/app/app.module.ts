import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ToDoListComponent } from './list/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './list/to-do-list/to-do-list-item/to-do-list-item.component';
import { ItemService } from './list/item.service';

import { CompletedItemComponent } from './list/to-do-list/completed-item/completed-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ListComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    CompletedItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

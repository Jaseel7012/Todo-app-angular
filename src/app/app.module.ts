import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoAppViewComponent } from './todo-app-view/todo-app-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
// import { RouterModule,Routes } from '@angular/router';
const myroute:Routes=[
  {
    path:'',
    'component':TodoAddComponent
  },
  {
    path:'view',
    'component':TodoAppViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoAppViewComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

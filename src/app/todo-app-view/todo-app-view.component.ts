import { Component } from '@angular/core';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-todo-app-view',
  templateUrl: './todo-app-view.component.html',
  styleUrls: ['./todo-app-view.component.css']
})
export class TodoAppViewComponent {
    constructor(private api:TodoApiService){
      api.fetchTodo().subscribe(
        (response)=>{
          this.todo=response
        }
      )
    }

  todo:any=[]
}

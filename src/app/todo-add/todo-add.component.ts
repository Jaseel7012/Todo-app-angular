import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  uid=""
  title=""
  status=""
  id=""
  view=()=>{
    let data:any={
      'uid':this.uid,
      'title':this.title,
      'status':this.status,
      'id':this.id
    }
    console.log(data)
  }


}

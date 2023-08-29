import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  title=""
  description=""
  id:any = localStorage.getItem('taskId');

  constructor(private api:ApiService, public router:Router){
    let id:any={"id":this.id}
    api.getTaskById(id.id).subscribe(
      (res:any)=>{
        this.title=res.title,
        this.description=res.description
      }
    )
  }

  readValue(){
    let data: any = {
      "title": this.title,
      "description": this.description,
    }

    this.api.updateTask(this.id,data).subscribe(
      (response:any)=>{
        console.log(response);
        alert("Product updated successfully!");
        this.router.navigate([`/task/get-all`]);
        
      }
      
    )
  }
         
}

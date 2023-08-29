import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent{

  title=""
  description=""
 
  constructor(private api:ApiService, public fb:FormBuilder, public router:Router){}

  readValue(){
    let data: any = {
      "title": this.title,
      "description": this.description,
    }

    this.api.CreateTask(data).subscribe(
      (response:any)=>{
        console.log(response);
        alert("Product added successfully!");
        this.router.navigate([`/task/get-all`]);
        
      }
      
    )
  }
         
  
}



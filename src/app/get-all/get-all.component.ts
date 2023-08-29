import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent {
  constructor(private api: ApiService , private router:Router) {
    api.getAllData().subscribe(
      (response:any) => {
          this.data=response
          console.log(this.data);
          
      }
    )
  }

  data: any = []

  create(){

  }
}

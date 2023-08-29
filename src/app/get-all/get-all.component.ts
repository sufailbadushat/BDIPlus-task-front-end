import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent {
  data: any = []
  constructor(private api: ApiService , private router:Router) {
    api.getAllData().subscribe(
      (response:any) => {
          this.data=response
          
      }
    )
   
  }
  loadData(): void {
    this.api.getAllData().subscribe(
      (response: any) => {
        this.data = response;
        console.log(this.data);
      }
    );
  }

  delete(id: number): void {
    this.api.deleteById(id).subscribe({
      next: () => {
       alert("deleted successfully")
        
      },
      error: error => {
        console.error('Error deleting task:', error);
      }
    });
    
  }
  

}

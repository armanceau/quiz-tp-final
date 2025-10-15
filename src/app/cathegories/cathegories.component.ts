import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CathegorieService } from '../shared/services/cathegorie.service';

@Component({
  selector: 'app-cathegories',
  standalone: false,
  templateUrl: './cathegories.component.html',
  styleUrl: './cathegories.component.scss'
})
export class CathegoriesComponent {
  cathegorieContent: any[] = this.cathegorieService.cathegories;

  constructor(private router : Router, private cathegorieService: CathegorieService) { }
  redirectTo(id: number){ 
    this.router.navigate(['/quiz', id]);
  }
  ngOnInit(): void {
    this.cathegorieService.getCategories().subscribe(data => {
      this.cathegorieContent = data;
    });
  }

}
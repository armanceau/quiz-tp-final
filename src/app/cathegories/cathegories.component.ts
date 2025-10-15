import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CathegorieService } from '../shared/services/cathegorie.service';
import { FilterCategorieService } from '../filter-categorie.service';

@Component({
  selector: 'app-cathegories',
  standalone: false,
  templateUrl: './cathegories.component.html',
  styleUrl: './cathegories.component.scss'
})
export class CathegoriesComponent {
  cathegorieContent: any[] = [];
  filteredCategories: any[] = [];
  searchTerm: string = '';

  constructor(
    private router: Router, 
    private cathegorieService: CathegorieService,
    private filterService: FilterCategorieService
  ) { }

  redirectTo(id: number){ 
    this.router.navigate(['/quiz', id]);
  }

  ngOnInit(): void {
    this.cathegorieService.getCategories().subscribe(data => {
      this.cathegorieContent = data;
      this.filteredCategories = data; 
    });
  }

  onSearch(): void {
    this.filteredCategories = this.filterService.filterCategories(
      this.cathegorieContent, 
      this.searchTerm
    );
  }

  onSearchChange(): void {
    this.filteredCategories = this.filterService.filterCategories(
      this.cathegorieContent, 
      this.searchTerm
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredCategories = this.cathegorieContent;
  }
}
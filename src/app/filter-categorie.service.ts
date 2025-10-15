import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterCategorieService {

  constructor() { }

  filterCategories(categories: any[], searchTerm: string): any[] {
    if (!searchTerm || searchTerm.trim() === '') {
      return categories;
    }

    const term = searchTerm.toLowerCase().trim();
    return categories.filter(values => 
      values.name?.toLowerCase().includes(term) || 
      values.label?.toLowerCase().includes(term)
    );
  }
}


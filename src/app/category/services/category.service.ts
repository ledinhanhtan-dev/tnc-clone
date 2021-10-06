import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CATEGORY_API } from '@core/constants/api.constant';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  fetchCategory(slug: string) {
    return this.http.get<Category>(CATEGORY_API + slug);
  }
}

import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryResolver implements Resolve<Category | boolean> {
  constructor(private catService: CategoryService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Category | boolean> {
    const slug: string = route.params.slug;
    return this.catService.initialFetchByResolver(slug).pipe(
      catchError(() => {
        this.router.navigate(['/not-found']);
        return of(false);
      })
    );
  }
}

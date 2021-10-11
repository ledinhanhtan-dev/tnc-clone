import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { STORE_API } from '@core/constants/api.constant';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root',
})
export class StoreResolver implements Resolve<Store | boolean> {
  constructor(private http: HttpClient, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Store | boolean> {
    const slug: string = route.params.slug;

    return this.http.get<Store>(STORE_API + slug).pipe(
      catchError(() => {
        this.router.navigateByUrl('/not-found');
        return of(false);
      })
    );
  }
}

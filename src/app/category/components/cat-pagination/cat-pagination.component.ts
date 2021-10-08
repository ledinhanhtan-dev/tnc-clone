import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PAGE_SIZE } from 'app/category/constants/category.constant';
import { CatPagination } from 'app/category/models/cat-pagination.model';
import { CategoryService } from 'app/category/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-pagination',
  templateUrl: './cat-pagination.component.html',
  styleUrls: ['./cat-pagination.component.scss'],
})
export class CatPaginationComponent implements OnInit, OnDestroy {
  private paginationSub!: Subscription;
  pagination!: CatPagination;
  totalPagesArray: number[] = [];

  constructor(private catService: CategoryService) {}

  ngOnInit(): void {
    this.paginationSub = this.catService.pagination$.subscribe(pagination => {
      this.pagination = pagination;
      this.totalPagesArray = this.calcTotalPages(pagination.count);
    });
  }

  ngOnDestroy(): void {
    if (this.paginationSub) this.paginationSub.unsubscribe();
    this.catService.pagination$.next({ count: 1, currentPage: 1 });
  }

  toPage(page: number) {
    this.catService.fetchPaginatedCategory(page);
  }

  isFirstPage(): boolean {
    return this.pagination.currentPage === 1;
  }

  isLastPage(): boolean {
    return (
      this.pagination.currentPage ===
      this.totalPagesArray[this.totalPagesArray.length - 1]
    );
  }

  private calcTotalPages(count: number): number[] {
    const totalPagesArray = [];

    const totalPages = Math.ceil(count / PAGE_SIZE);
    for (let i = 1; i <= totalPages; i++) {
      totalPagesArray.push(i);
    }
    return totalPagesArray;
  }
}

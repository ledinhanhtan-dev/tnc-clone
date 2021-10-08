import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PAGE_SIZE } from 'app/category/constants/cat-pagination.constant';
import { CategoryService } from 'app/category/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-pagination',
  templateUrl: './cat-pagination.component.html',
  styleUrls: ['./cat-pagination.component.scss'],
})
export class CatPaginationComponent implements OnInit, OnDestroy {
  @Input() count!: number;
  totalPagesArray: number[] = [];

  private currentPageSub!: Subscription;
  currentPage: number = 1;

  constructor(private catService: CategoryService) {}

  ngOnInit(): void {
    this.totalPagesArray = this.calcTotalPages(this.count);
    this.currentPageSub = this.catService.currentPage$.subscribe(currPage => {
      this.currentPage = currPage;
    });
  }

  ngOnDestroy(): void {
    if (this.currentPageSub) this.currentPageSub.unsubscribe();
    this.catService.currentPage$.next(1);
  }

  toPage(page: number) {
    this.catService.fetchPaginatedCategory(page);
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return (
      this.currentPage === this.totalPagesArray[this.totalPagesArray.length - 1]
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

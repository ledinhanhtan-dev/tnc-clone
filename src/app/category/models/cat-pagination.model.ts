export interface CatPagination {
  count: number;
  currentPage: number;
}

export const INIT_PAGINATION: CatPagination = {
  count: 0,
  currentPage: 1,
};

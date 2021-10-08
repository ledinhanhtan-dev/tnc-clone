export interface CatSortQuery {
  label: string;
  query: string;
}

export const SORT_QUERIES: CatSortQuery[] = [
  { label: 'Mới nhất', query: '?sort=createdAt&order=ASC' },
];

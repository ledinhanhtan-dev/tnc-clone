import { FilterItem } from './filter-item.model';

export interface FilterBlock {
  title: string;
  filterItems: FilterItem[];
}

export const MANUFACTURE_BLOCK: FilterBlock = {
  title: 'Gaming PC Series',
  filterItems: [{ id: 0, name: 'TNC Gaming' }],
};

export const SERIES_BLOCK: FilterBlock = {
  title: 'Gaming PC Series',
  filterItems: [
    { id: 1, name: 'Gaming PC Alpha' },
    { id: 2, name: 'Gaming PC Glacier' },
    { id: 3, name: 'Gaming PC Lumen' },
    { id: 4, name: 'Gaming PC Nova' },
    { id: 5, name: 'Gaming PC Sentinel' },
  ],
};

export const CPU_BLOCK: FilterBlock = {
  title: 'Gaming PC theo CPU',
  filterItems: [
    { id: 6, name: 'Gaming PC Intel' },
    { id: 7, name: 'Gaming PC AMD' },
  ],
};

import { Tag } from '@core/models/tag.model';

export interface FilterBlock {
  title: string;
  tags: Tag[];
}

export const MANUFACTURE_BLOCK: FilterBlock = {
  title: 'Hãng sản xuất',
  tags: [{ id: 0, name: 'TNC Gaming' }],
};

export const SERIES_BLOCK: FilterBlock = {
  title: 'Gaming PC Series',
  tags: [
    { id: 1, name: 'Gaming PC Alpha' },
    { id: 2, name: 'Gaming PC Glacier' },
    { id: 3, name: 'Gaming PC Nova' },
    { id: 4, name: 'Gaming PC Lumen' },
    { id: 5, name: 'Gaming PC Sentinel' },
  ],
};

export const CPU_BLOCK: FilterBlock = {
  title: 'Gaming PC theo CPU',
  tags: [
    { id: 6, name: 'Gaming PC Intel' },
    { id: 7, name: 'Gaming PC AMD' },
  ],
};

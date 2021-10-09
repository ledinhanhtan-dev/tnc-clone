import { Tag } from './tag.model';

export interface Filter {
  id: number;
  name: string;
  tags: Tag[];
}

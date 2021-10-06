export interface FilterBlock {
  title: string;
  labels: string[];
}

export const MANUFACTURE_BLOCK: FilterBlock = {
  title: 'Hãng sản xuất',
  labels: ['TNC Gaming'],
};

export const SERIES_BLOCK: FilterBlock = {
  title: 'Gaming PC Series',
  labels: [
    'Gaming PC Alpha',
    'Gaming PC Glacier',
    'Gaming PC Sniper',
    'Gaming PC Lumen',
    'Gaming PC Nova',
    'Gaming PC Sentinel',
  ],
};

export const CPU_BLOCK: FilterBlock = {
  title: 'Gaming PC theo CPU',
  labels: ['Gaming PC Intel', 'Gaming PC AMD'],
};

export type ToastType = 'success' | 'warn' | 'error' | 'loading' | 'info';

export interface Toast {
  message: string;
  type: ToastType;
}

import { writable } from 'svelte/store';
import type { TCustomer } from '../../../types/customer-details';

export const customerStore = writable<TCustomer | null>(null);

import { customerData } from './mock-data';
import type { TCustomer } from '../types/customer-details';

export const fetchCustomerData = (): Promise<TCustomer> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(customerData);
		}, 500);
	});
};

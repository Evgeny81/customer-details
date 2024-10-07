import type { TCustomer } from '../types/customer-details';
import { TCustomerStatus, TPaymentStatus } from '../types/customer-details';

export const customerData: TCustomer = {
	client_id: '10001',
	firstname: 'John',
	lastname: 'Smith',
	country: 'Cyprus',
	address1: 'Test address',
	address2: '',
	city: 'Limassol',
	postcode: '66411',
	phone: '+123123123123',
	email: 'john.smith@test.com',
	status: TCustomerStatus.Approved,
	invited_by_affiliate: 'Thomas Johnson',
	wallet: {
		currency: 'EUR',
		balance: 3000.0
	},
	trading_accounts: [
		{
			taid: 320001,
			account_type: 'live',
			platform: 'pt1',
			balance: 990.0
		},
		{
			taid: 320002,
			account_type: 'live',
			platform: 'pt2',
			balance: 672.1
		},
		{
			taid: 720001,
			account_type: 'demo',
			platform: 'pt1',
			balance: 10000.0
		}
	],
	payments: [
		{
			pid: 1425552,
			gateway: 'paysafe',
			type: 'deposit',
			amount: 300.0,
			status: TPaymentStatus.Pending,
			datetime: '2020-05-21 14:54:32'
		},
		{
			pid: 1425564,
			gateway: 'paypal',
			type: 'deposit',
			amount: 1154.0,
			status: TPaymentStatus.Approved,
			datetime: '2020-05-21 14:58:32'
		},
		{
			pid: 1425565,
			gateway: 'paypal',
			type: 'withdrawal',
			amount: 800.0,
			status: TPaymentStatus.Pending,
			datetime: '2020-05-22 11:24:37'
		},
		{
			pid: 1425577,
			gateway: 'skrill',
			type: 'deposit',
			amount: 1000.0,
			status: TPaymentStatus.Declined,
			datetime: '2020-05-22 11:26:39'
		},
		{
			pid: 1425579,
			gateway: 'paysafe',
			type: 'withdrawal',
			amount: 224.54,
			status: TPaymentStatus.Approved,
			datetime: '2020-05-23 12:04:01'
		},
		{
			pid: 1425581,
			gateway: 'paypal',
			type: 'deposit',
			amount: 750.0,
			status: TPaymentStatus.Approved,
			datetime: '2020-05-23 19:31:12'
		},
		{
			pid: 1425589,
			gateway: 'skrill',
			type: 'withdrawal',
			amount: 990.2,
			status: TPaymentStatus.Cancelled,
			datetime: '2020-05-23 20:15:56'
		}
	],
	notes: [
		{
			datetime: '2020-05-14 09:17:36',
			note_text: 'Client was requested to upload clearer ID card'
		},
		{
			datetime: '2020-05-15 11:26:48',
			note_text: 'Client transferred from tier 2 to 1'
		},
		{
			datetime: '2020-05-16 08:22:24',
			note_text: 'Client requested to have his address updated as he recently moved'
		}
	],
	activity: [
		{
			datetime: '2020-05-12 09:59:21',
			activity_test: "Account approved by officer 'Jennie'"
		},
		{
			datetime: '2020-05-22 11:26:40',
			activity_test: 'Deposit declined by system'
		},
		{
			datetime: '2020-05-23 20:15:57',
			activity_test: 'Withdrawal cancelled by user'
		}
	]
};

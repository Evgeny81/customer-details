export type TWallet = {
	currency: string;
	balance: number;
};

export type TTradingAccount = {
	taid: number;
	account_type: 'live' | 'demo';
	platform: 'pt1' | 'pt2';
	balance: number;
};

export type TTransactionType = 'deposit' | 'withdrawal';
export type TPaymentGateway = 'paysafe' | 'paypal' | 'skrill';
export enum TPaymentStatus {
	Pending = 'pending',
	Approved = 'approved',
	Declined = 'declined',
	Cancelled = 'cancelled'
}

export enum TCustomerStatus {
	Approved = 'approved',
	Rejected = 'rejected',
	Archived = 'archived',
	Pending = 'pending'
}

export type TTransactionEventDetail = {
	amount: number;
	gateway: TPaymentGateway;
	transactionType: TTransactionType;
};

export type TPayment = {
	pid: number;
	gateway: TPaymentGateway;
	type: TTransactionType;
	amount: number;
	status: TPaymentStatus;
	datetime: string;
};

export type TNote = {
	datetime: string;
	note_text: string;
};

export type TActivity = {
	datetime: string;
	activity_test: string;
};

export type TCustomer = {
	client_id: string;
	firstname: string;
	lastname: string;
	country: string;
	address1: string;
	address2: string;
	city: string;
	postcode: string;
	phone: string;
	email: string;
	status: TCustomerStatus;
	invited_by_affiliate: string;
	wallet: TWallet;
	trading_accounts: TTradingAccount[];
	payments: TPayment[];
	notes: TNote[];
	activity: TActivity[];
};

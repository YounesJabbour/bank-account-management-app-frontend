import { AccountType } from './enums/AccountType';
import { Status } from './enums/Status';

export interface Account {
  accountId: string;
  balance: number;
  currency: string;
  type: AccountType;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  customerId: number;
}

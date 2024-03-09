interface HistoryItem {
  quantity: number;
}

export interface History {
  _id: string;
  token: string;
  priceUp: number;
  priceDown: number;
  createdAt: string;
  updatedAt: string;
}

export type CreateHistoryPayload = Pick<
  History,
  'token' | 'priceUp' | 'priceDown'
> & {
  orderItems: Array<Pick<HistoryItem, 'quantity'>>;
};

export type UpdateHistoryPayload = Partial<
  Omit<History, '_id' | 'createdAt' | 'updatedAt'>
>;

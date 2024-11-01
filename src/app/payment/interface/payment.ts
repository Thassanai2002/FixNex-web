export interface Order {
  order_id: number;
  user_id: number;
  oder_date: Date;
  total_amount: number;
  status: string;
}

export interface OrderItem {
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
}

export interface UserSpending {
  user_id: number;
  total_spending: number;
  last_purchas_date: Date;
}

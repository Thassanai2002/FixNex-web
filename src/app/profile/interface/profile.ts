import { Trainer } from "./TrainerRantals";

export interface Profile {
  orders: any;
  enrollments: any;
  rentals: any;
  user: any;
  rental: Trainer;
  user_id: number;
  user_name: string;
  email: string;
  password: string;
  phone: string;
  vip_level: string;
  join_date: Date;
}

import Stripe from "stripe";

export interface Song {
  id: string;
  user_id: string;
  author: string;
  title: string;
  song_path: string;
  image_path: string;
}

export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  billing_address?: Stripe.Address;
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Product {
  id: string;
  active: boolean;
  name: string;
  description?: string;
  metadata?: Stripe.Metadata;
  image?: string;
}

export interface Price {
  id: string;
  product_id: string;
  active: boolean;
  description?: string;
  currency: string;
  type?: Stripe.Price.Type;
  unit_amount?: number;
  metadata?: Stripe.Metadata;
  trial_period_days?: number | null;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  products?: Product;
}

export interface ProductWithPrice extends Product {
  prices?: Price[];
}

export interface Subscription {
  id: string;
  user_id: string;
  status?: Stripe.Subscription.Status;
  price_id: string;
  metadata?: Stripe.Metadata;
  quantity?: number;
  created?: string;
  current_period_start?: string;
  current_period_end?: string;
  cancel_at?: string;
  cancel_at_period_end?: boolean;
  canceled_at?: string;
  ended_at?: string;
  trial_start?: string;
  trial_end?: string;
  prices?: Price;
}

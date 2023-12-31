import { Products } from "types/categories";

export type AccessToken = string;

export type RefreshResponse = {
  access_token: AccessToken;
};

export type ErrorResponse = {
  message: string;
};

export type User = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
};

export interface Cart {
  product: Products;
  quantity: number;
}

export interface UserSchema {
  currentUser: User | null;
  cart: Cart[];
  error?: string;
  isLoading: boolean;
  showForm: boolean;
}

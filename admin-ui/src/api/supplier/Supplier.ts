import { Product } from "../product/Product";

export type Supplier = {
  address: string;
  createdAt: Date;
  id: string;
  name: string;
  phoneNumber: string;
  products?: Array<Product>;
  updatedAt: Date;
};

import { Supplier } from "../supplier/Supplier";
import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  supplier?: Supplier | null;
  updatedAt: Date;
  user?: User | null;
};

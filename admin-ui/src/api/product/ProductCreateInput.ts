import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductCreateInput = {
  description: string;
  name: string;
  price: number;
  quantity: number;
  supplier?: SupplierWhereUniqueInput | null;
};

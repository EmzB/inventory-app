import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string;
  name?: string;
  price?: number;
  quantity?: number;
  supplier?: SupplierWhereUniqueInput | null;
};

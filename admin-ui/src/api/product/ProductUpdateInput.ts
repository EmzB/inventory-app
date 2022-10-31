import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string;
  name?: string;
  price?: number;
  quantity?: number;
  supplier?: SupplierWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

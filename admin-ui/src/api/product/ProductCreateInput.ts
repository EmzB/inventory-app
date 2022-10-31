import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  description: string;
  name: string;
  price: number;
  quantity: number;
  supplier?: SupplierWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

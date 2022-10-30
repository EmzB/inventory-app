import { ProductCreateNestedManyWithoutSuppliersInput } from "./ProductCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  address: string;
  name: string;
  phoneNumber: string;
  products?: ProductCreateNestedManyWithoutSuppliersInput;
};

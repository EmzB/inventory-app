import { ProductUpdateManyWithoutSuppliersInput } from "./ProductUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  address?: string;
  name?: string;
  phoneNumber?: string;
  products?: ProductUpdateManyWithoutSuppliersInput;
};

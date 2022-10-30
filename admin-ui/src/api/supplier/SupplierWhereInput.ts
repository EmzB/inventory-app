import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type SupplierWhereInput = {
  address?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  phoneNumber?: StringFilter;
  products?: ProductListRelationFilter;
};

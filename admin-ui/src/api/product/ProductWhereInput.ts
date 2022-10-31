import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  price?: FloatFilter;
  quantity?: IntFilter;
  supplier?: SupplierWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";

export type ProductWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  price?: FloatFilter;
  quantity?: IntFilter;
};

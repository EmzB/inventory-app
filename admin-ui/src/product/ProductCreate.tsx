import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SupplierTitle } from "../supplier/SupplierTitle";
import { UserTitle } from "../user/UserTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="suppliers"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

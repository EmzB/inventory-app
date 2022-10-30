import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SupplierTitle } from "../supplier/SupplierTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
      </SimpleForm>
    </Edit>
  );
};

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { ProductCreateNestedManyWithoutSuppliersInput } from "./ProductCreateNestedManyWithoutSuppliersInput";
import { Type } from "class-transformer";
@InputType()
class SupplierCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phoneNumber!: string;

  @ApiProperty({
    required: true,
    type: () => ProductCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutSuppliersInput;
}
export { SupplierCreateInput };
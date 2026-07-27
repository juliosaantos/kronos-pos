import { PartialType } from '@nestjs/swagger';
import { CreateProductsOptionDto } from './create-products-option.dto';

export class UpdateProductsOptionDto extends PartialType(CreateProductsOptionDto) {}

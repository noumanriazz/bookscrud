import { IsString, IsNumber, IsNotEmpty, IsEnum } from 'class-validator';
import { Category } from '../entities/book.entity';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsString()
  readonly author: string;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  @IsNotEmpty()
  @IsString()
  @IsEnum(Category, { message: 'please enter correct Category.' })
  readonly category: Category;
}

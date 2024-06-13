import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsEnum,
  IsEmpty,
} from 'class-validator';
import { Category } from '../entities/book.entity';
import { User } from '../../auth/entities/user.entity';

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
  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}

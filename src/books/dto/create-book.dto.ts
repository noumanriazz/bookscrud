import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsEnum,
  IsEmpty,
} from 'class-validator';
import { Category } from '../entities/book.entity';
import { User } from '../../auth/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ description: 'The title of the book' })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({ description: 'The description of the book' })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({ description: 'The author of the book' })
  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @ApiProperty({ description: 'The price of the book' })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @ApiProperty({ description: 'The category of the book', enum: Category })
  @IsNotEmpty()
  @IsString()
  @IsEnum(Category, { message: 'please enter correct Category.' })
  readonly category: Category;

  @ApiProperty({ description: 'The user associated with the book', readOnly: true })
  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
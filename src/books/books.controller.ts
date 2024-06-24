import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiTags('Books')
@ApiBearerAuth('JWT-auth')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('/create')
  @UseGuards(AuthGuard())
  async create(@Body() book: CreateBookDto, @Req() req) {
    return this.booksService.create(book, req.user);
  }

  @Get('getall')
  async findAll(@Query() query: any) {
    return this.booksService.findAll(query);
  }

  @Get('/getbook/:id')
  @UseGuards(AuthGuard())
  async findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch('/updatebook/:id')
  @UseGuards(AuthGuard())
  async update(@Param('id') id: string, @Body() book: UpdateBookDto) {
    return this.booksService.update(id, book);
  }

  @Delete('/deletebook/:id')
  @UseGuards(AuthGuard())
  async remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}

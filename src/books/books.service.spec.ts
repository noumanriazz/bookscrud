import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { getModelToken } from '@nestjs/mongoose';
import { Book, Category } from './entities/book.entity';
import { Model } from 'mongoose';

describe('BooksService', () => {
  let booksService: BooksService;
  let model: Model<Book>;

  const mockBook = {
    _id: '666b51876b5be51fc81a4334',
    user: '666ae74b496f061a00e18b84',
    title: 'Book 9',
    description: 'Book 9 description',
    author: 'Author 9',
    price: 200,
    category: Category.FANTASY,
  };

  const mockBookModel = {
    findById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getModelToken(Book.name),
          useValue: mockBookModel,
        },
      ],
    }).compile();

    booksService = module.get<BooksService>(BooksService);
    model = module.get<Model<Book>>(getModelToken(Book.name));
  });

  describe('findOne', () => {
    it('should find and return a book by ID', async () => {
      jest.spyOn(model, 'findById').mockResolvedValue(mockBook);
      const result = await booksService.findOne(mockBook._id);
      expect(model.findById).toHaveBeenCalledWith(mockBook._id);
      expect(result).toEqual(mockBook);
    });
  });
});

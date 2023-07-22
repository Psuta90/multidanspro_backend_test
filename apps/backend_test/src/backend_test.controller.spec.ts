import { Test, TestingModule } from '@nestjs/testing';
import { BackendTestController } from './backend_test.controller';
import { BackendTestService } from './backend_test.service';

describe('BackendTestController', () => {
  let backendTestController: BackendTestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BackendTestController],
      providers: [BackendTestService],
    }).compile();

    backendTestController = app.get<BackendTestController>(BackendTestController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(backendTestController.getHello()).toBe('Hello World!');
    });
  });
});

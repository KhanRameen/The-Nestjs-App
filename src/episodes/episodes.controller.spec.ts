import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesController } from './episodes.controller';
import { ConfigModule } from '../config/config.module';
import { EpisodesService } from './episodes.service';
import e from 'express';


//simulates a mini test environment before starting the NestFactory/whole app - Unit Testing
describe('EpisodesController', () => {
  let controller: EpisodesController;

  const mockFindOne = jest.fn() //

   //mock object must match the same method signature as the real "service" (not controller), 
  const mockEpisodeService   = {
    findAll: async () => [{id:'id'}],
    findOne: mockFindOne,
    findFeatured: async () => [{id:'id'}],
    create: async () => [{id:'id'}]
  }

  beforeEach(async () => {
    jest.resetAllMocks()
    const module: TestingModule = await Test.createTestingModule({
      //we also import the modules that we have imported explicitly in our controllers here.
      imports: [ConfigModule],
      controllers: [EpisodesController],
      // providers:[EpisodesService] // we add services our controller depends on
      providers:[{provide: EpisodesService,useValue:mockEpisodeService}] // we can test mock services by providing them like this
    }).compile();

    controller = module.get<EpisodesController>(EpisodesController);
  });


  it('should be defined', () => { //the unit test, if this fails it means the dependency injection failed.
    expect(controller).toBeDefined();
  });

  //test mock service
  describe('findOneEpisode', ()=>{
    const episodeId = 'id'
    const mockResult = {id: episodeId,name:'my Episode'}

    //another test
    beforeEach(()=>{
      mockFindOne.mockResolvedValue(mockResult)
    })

    it("should call the service with correct params", async () => {
      await controller.findOneEpisode(episodeId)
      expect(mockFindOne).toHaveBeenCalledWith(episodeId)
    })

    it('should return correct response', async () => { //another unit test
      const result = await controller.findOneEpisode(episodeId)
      expect(result).toEqual(mockResult)
    })
  })
});



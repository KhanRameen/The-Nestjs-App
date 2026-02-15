import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episodes.dto';
import { ConfigService } from '../config/config.service';

@Controller('episodes') //route path "/episodes"
export class EpisodesController {
   //to inject service to the controller we add a constructor to the class with a private param with the service type
   constructor( private episodesService: EpisodesService , private configService: ConfigService) {
      //this create the instance of service and inject it to the class during runtime
   }


    //you can add methods here to handle requests to this route, such as GET, POST, etc.
     @Get() 
     getAllEpisodes(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        return this.episodesService.findAll(sort)
     }

     @Get("Featured")
        getFeaturedEpisodes() {
            return this.episodesService.findFeatured()
        }

     @Get(":id") 
     async findOneEpisode(@Param('id') id: string) {
        console.log(id)
        const episode= await this.episodesService.findOne(id)
        if(!episode){
            throw new NotFoundException("Episode Not Found!")
        }
        return episode
     }

     @Post("create")
     createEpisode(@Body() input: CreateEpisodeDto) {
        console.log("input")
        return this.episodesService.create(input)
     }
}


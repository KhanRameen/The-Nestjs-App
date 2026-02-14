import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes') //route path "/episodes"
export class EpisodesController {
    //you can add methods here to handle requests to this route, such as GET, POST, etc.

     @Get() 
     getAllEpisodes(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        return "all episodes"
     }

     @Get("Featured")
        getFeaturedEpisodes() {
            return "featured episodes"
        }

     @Get(":id") 
     findOneEpisode(@Param() id: string) {
        console.log(id)
        return `Episode: ${id}`
     }

     @Post("create")
     createEpisode(@Body() input: any) {
        console.log("input")
        return `create episode: ${input}`
     }
}


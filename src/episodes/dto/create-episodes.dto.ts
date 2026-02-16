import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsOptional, IsString,} from "class-validator";

//Data Transfer Object: 
export class CreateEpisodeDto{
    @IsString() //decorators used by the validatorpipe 
    name: string;

    @IsBoolean()
    @IsOptional()
    featured?: boolean

    @IsDate() //just using date fails, since json has no date type
    @Type(()=> Date) //transforms the data recieved to date instance
    publishedAt: Date

}
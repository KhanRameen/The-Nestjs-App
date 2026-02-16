//yo apply guard on the contoller class
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";


@Injectable()
export class ApiKeyGuard implements CanActivate{
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest() //get the request object from the context
        const apiKey = request.headers['x-api-key'] //get the api key from the request headers

        if(apiKey!=='Admin1234'){ //check if the api key is valid{
            return false;
        }
        return true;
    }
}
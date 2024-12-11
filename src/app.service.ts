import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)
  getHello(): string {
    this.logger.log("logging of the service testing file")
    return 'Hello World!';
  }
}

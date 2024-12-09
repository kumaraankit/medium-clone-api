import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';
import { HealthCheckResponseDto } from './dto/health-check.dto';

@ApiTags("Health Check")
@Controller('health')
export class HealthController {
    constructor(private readonly healthService: HealthService) {

    }

    @Get()
    @ApiOkResponse({ description: 'Application health status', type: HealthCheckResponseDto })
    getHealthStatus(): HealthCheckResponseDto {
        return this.healthService.getHealthStatusCheck();
    }
}

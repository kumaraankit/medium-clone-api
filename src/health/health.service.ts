import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {

    getHealthStatusCheck() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        }
    }
}

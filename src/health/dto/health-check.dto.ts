import { ApiProperty } from "@nestjs/swagger";

export class HealthCheckResponseDto {
    @ApiProperty({ description: 'Status of app', example: 'ok' })
    status: string;

    @ApiProperty({ description: "timestamp of application", example: '2024-12-10T10:15:30Z' })
    timestamp: string;

    @ApiProperty({ description: "uptime of application", example: 2000 })
    uptime: number;
}
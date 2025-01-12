import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePostDto {
    @ApiPropertyOptional({ description: 'The title of the post', example: 'Updated Post Title' })
    @IsOptional()
    @IsString()
    title?: string;

    @ApiPropertyOptional({ description: 'The description of the post', example: 'Updated Post Description' })
    @IsOptional()
    @IsString()
    description?: string;
}

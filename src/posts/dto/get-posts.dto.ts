import { ApiProperty } from "@nestjs/swagger";

export class GetPostDto {

    @ApiProperty({ title: 'unique id for the post', description: 'absc234555558976df' })
    id: string;

    @ApiProperty({ title: 'title of the post', description: 'mine first post' })
    title: string;

    @ApiProperty({ title: 'description for the post', description: 'details of the post' })
    description: string;
}
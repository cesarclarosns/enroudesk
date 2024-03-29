import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ResetPasswordCallbackQueryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  token: string
}

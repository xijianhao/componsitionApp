import { PartialType } from '@nestjs/mapped-types';
import { CreateXijianhaoDto } from './create-xijianhao.dto';

export class UpdateXijianhaoDto extends PartialType(CreateXijianhaoDto) {}

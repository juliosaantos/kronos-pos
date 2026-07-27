import { Injectable } from '@nestjs/common';
import { CreateNeighborhoodDto } from './dto/create-neighborhood.dto';
import { UpdateNeighborhoodDto } from './dto/update-neighborhood.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NeighborhoodsService {
  constructor(private prisma: PrismaService) {}
  
  create(createNeighborhoodDto: CreateNeighborhoodDto) {
    return this.prisma.neighborhoods.create({
      data: createNeighborhoodDto,
    });
  }

  findAll() {
    return this.prisma.neighborhoods.findMany();
  }

  findOne(id: number) {
    return this.prisma.neighborhoods.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateNeighborhoodDto: UpdateNeighborhoodDto) {
    return this.prisma.neighborhoods.update({
      where: {
        id,
      },
      data: updateNeighborhoodDto,
    });
  }

  remove(id: number) {
    return this.prisma.neighborhoods.delete({
      where: {
        id,
      },
    });
  }
}

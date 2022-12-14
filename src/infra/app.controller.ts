import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
// import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello () {
    return 'Hello World'
  }

  @Get()
  getAllNotifications () {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification (@Body() body: any) {
    const { content, category, recipientId } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId
      }  
    })
  }
}

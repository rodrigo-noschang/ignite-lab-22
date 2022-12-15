import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {

  constructor (private sendNotifications: SendNotification) {}
  
  @Post()
  async createNotification (@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotifications.execute({
      recipientId, 
      content, 
      category
    })

    return { notification }
  }
}

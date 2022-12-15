import { Injectable } from '@nestjs/common';
import { Content } from "../entities/content";
import { Notification } from "../entities/notifications";
import { NotificationRepository } from "../repositories/notifications-repositoreis";

interface SendNotificationsRequest{
    content: string,
    category: string,
    recipientId: string
}

interface SendNotificationsResponse {
    notification: Notification
}

@Injectable()
export class SendNotification {
    
    constructor (private notificationsRepository: NotificationRepository) {}

    async execute(request: SendNotificationsRequest): Promise <SendNotificationsResponse> {
        const { content, category, recipientId } = request;
       
        const notification = new Notification({
            category,
            content: new Content(content),
            recipientId
        })

        // Parte 2: "persistindo" a notificação no banco de dados com  repositório:
        await this.notificationsRepository.create(notification);       

        return {
            notification,
        }
    }

}
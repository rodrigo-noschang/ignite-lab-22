import { Notification } from "src/application/entities/notifications";
import { NotificationRepository } from "src/application/repositories/notifications-repositoreis";
import { PrismaService } from "../prisma.service";

export class PrismaNotificationRepository implements NotificationRepository {
    constructor (private prisamService: PrismaService) {}
    
    async create(notification: Notification): Promise<void> {
        await this.prisamService.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                createdAt: notification.createdAt,
                readAt: notification.readAt,
                recipientId: notification.recipientId
            }
        })
    }
}
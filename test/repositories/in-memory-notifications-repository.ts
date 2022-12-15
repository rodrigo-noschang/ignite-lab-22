import { NotificationRepository } from "src/application/repositories/notifications-repositoreis";
import { Notification } from "src/application/entities/notifications";

// Fake Repository
export class InMemoryNotificationsRepository implements NotificationRepository {
    // Fake DB:
    public notifications: Notification[] = [];

    async create( notification: Notification ) {
        this.notifications.push(notification);
    }
}
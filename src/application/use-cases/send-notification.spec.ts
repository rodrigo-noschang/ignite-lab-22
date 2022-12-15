 import { SendNotification } from "./send-notification"
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";

describe('Send notification', () => {
    it ('should send a notification', async () => {
        const notificationRepository = new InMemoryNotificationsRepository();        
        const sendNotification = new SendNotification(notificationRepository);
        
        const {notification} = await sendNotification.execute({
            content: 'Você tem uma solicitação de amizado',
            category: 'Social',
            recipientId: 'recipient-id'
        })

        expect(notificationRepository.notifications).toHaveLength(1);
        expect(notificationRepository.notifications[0]).toEqual(notification);
    })
})
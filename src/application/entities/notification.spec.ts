import { Content } from "./content";
import { Notification } from "./notifications";

describe('Notification', () => {
    it ('should crate a notification', () => {
        const notification = new Notification({
            content: new Content('Você recebeu uma solicitação de amizade'),
            category: 'Social',
            recipientId: 'id-example'
        })

        expect(notification).toBeTruthy();
    })
})
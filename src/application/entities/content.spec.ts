import { Content } from "./content";

describe('Notification Content', () => {
    
    it ('should be able to create a notification contet',  () => {
        const content = new Content('Você recebeu uma solicitação de amizade');
    
        expect(content).toBeTruthy();
    })
    
    it ('should not be able to create notification content with less than five characters', () => {
        expect(() => new Content('abc')).toThrow();
    })
    
    it ('should not be able to create notification content with more than 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    })
})
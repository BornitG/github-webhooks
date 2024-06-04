import { envs } from "../../config";



export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor() {}

    async notify( message: string ) {

        const body = {
            content: message,
            // embeds: [
            //     {
            //         image: { url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnMzY3ByN3BhMjdoa3RwdjF1YTV3OWNyYnIyYXl1ZGp4OWFwNDR1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d9RbxjZ8QXesiYoerE/giphy.gif' }
            //     }
            // ]
        }

        const resp = await fetch( this.discordWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( body ),
        });

        if ( !resp.ok ) {
            console.log('Error sending message to discord');
            return false;
        }

        return true;
    }

}
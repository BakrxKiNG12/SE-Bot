import SEBot from '@discordjs'
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on('ready', () => {   
	client.user.setActivity('Created by AbuBakrxKiNG12', { type: 'PLAYING' });
	console.log('The client is Online!')
    client.login(process.env.TOKEN )});



client.on('message', function(message) {
	console.log(`${message.author.tag} Just send ${message.content} in ${message.channel}`)
})  
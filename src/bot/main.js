/*

	THE MAIN FILE FOR THE BOT

*/

const Discord = require('discord.js'); // IMPORT DISCORD
const bot = new Discord.Client(); // BOT OBJECT

const fs = require('fs'); // IMPORT FS
const colour = require('colors') // COLOURED CONSOLE IS 🔥

const devConfig = JSON.parse(fs.readFileSync('../../../omnibot_config.json')); // CONFIG FOR PRIVATE STUFF
var config = JSON.parse(fs.readFileSync('./config.json')); // CONFIG FOR DEFAULT PREFIX AND GAME 


const commands = require('./commands/commands.js');
const events = require('./events/events.js');

/*

	MOD EVENTS HANDLER 

*/

bot.on('guildMemberAdd', events.guildMemberAdd);

/*

	READY EVENT

*/

bot.on('ready', () => {

	bot.user.setGame(config.game, 'http://twitch.tv/notStreaming');

	console.log(`BOT IS ${'ONLINE'.green}`);
	console.log(`| Logged in on account ${bot.user.username}#${bot.user.discriminator} (${bot.user.id})`.green);

	console.log(`\n| Performing on ${`${bot.guilds.size}`.yellow} guilds and ${`${bot.users.size}`.yellow} people`)

})

/*

	MESSAGE HANDLER

*/

bot.on('message', message => {

	/*

		COMMAND HANDLER

	*/

})

/*
	BOT LOGIN
*/

bot.login(devConfig.token); // LOGIN
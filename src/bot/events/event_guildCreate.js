/*

	WHEN BOT JOINS A GUILD

*/

const fs = require('fs');
const path = require('path');

const pathToServers = path.resolve(__dirname, "../servers.json")
const servers = JSON.parse(fs.readFileSync(pathToServers));

const joinEmbed = {

	color: 0x23c65c,
	title: `Thank you for adding me to your server, I will serve you well.`,
	description: ` You can do |help for a list of commands and |prefix to set the prefix to whatever you want.\nPlease create a \`omni-admin\` role so you can view your server's logs and activity on <zel put the login link here>`

}

const event = (guild) => {

	if(servers.indexOf(guild.id) === -1) {
		
		// THIS IS A NEW GUILD

		servers[guild.id] = {

			config: {
				prefix: '|',
				greet: false,
				greetMessage: 'Welcome %USERNAME% to %GUILDNAME%',
				farewell: false,
				farewellMessage: 'Bye bye %USERNAME%'
			},
			logs: []

		};

		fs.writeFile(pathToServers, JSON.stringify(servers, 'null', 4));

		let embed = {

			color: 0x23c65c,
			title: `Thank you for adding me to your server, I will serve you well.`,
			description: ` You can do |help for a list of commands and |prefix to set the prefix to whatever you want.\nPlease create a \`omni-admin\` role so you can view your server's logs and activity on <zel put the login link here>`

		}

		message.channel.sendEmbed(joinEmbed);


	} else {

		// THE BOT HAS BEEN RE-ADDED

		message.channel.sendEmbed(joinEmbed);

	}

}

module.exports = event;
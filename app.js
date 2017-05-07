const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

client.on('ready', () =>{
	console.log('I\'m Online\n');
})


var prefix = "!"
client.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	} else if (message.content.startsWith(prefix + 'setgame')) {
		if (!result) {
			result = null;
		}
		client.user.setGame(result);

	} else if (message.content.startsWith(prefix + 'setstatus')) {

		client.user.setStatus(result);
	}

client.on('ready', () => {
  console.log('I am ready!');
});

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to the guilds default channel (usually #general), mentioning the member
  member.guild.defaultChannel.send(`Bem vindo ao servidor sua puta, ${member}!`);

  // If you want to send the message to a designated channel on a server instead
  // you can do the following:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bem vindo de volta desgraça, ${member}`);
});


})


       

client.login(token);
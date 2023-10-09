const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		if (interaction.guild.available) {
			guildName = interaction.guild.name;
			console.log(`The guild: "${guildName}" is available!`);
			console.log(`This interaction is a \`${interaction.constructor.name}\``)
			console.log(`In the channel #${interaction.channel.name}`)
			console.log(`Created by ${interaction.member.displayName}`)
			// Create an ephemeral reply with an embed
			const embed = new EmbedBuilder().setDescription('Pong!');
			
			interaction.reply({ embeds: [embed], ephemeral: true })
				.then(() => console.log('Reply sent.'))
				.catch(console.error);
		} else {
			console.log(`The guild: "${guildName}" might be down`);
		}
	},
};

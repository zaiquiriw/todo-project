const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Hi I'm ${client.user.username}`)
        client.user.setActivity('in Cyberspace')
    }
}
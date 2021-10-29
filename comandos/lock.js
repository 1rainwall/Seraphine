const Discord = require('discord.js');

module.exports = {
    name: "lock",
    alias:[],
    descripcion: "",

    execute(client, message, args){
        var perms = message.member.hasPermission("ADMINISTRATOR");
        if (!perms){
            return message.channel.send("No puedes usar este comando :(")
        }
        

        let channel = message.mentions.channels.first() || message.channel;

        let rol = message.mentions.roles.first() || message.guild.roles.cache.find(aus => aus.name === "@everyone")

        message.delete();

        channel.updateOverwrite(rol,{
            READ_MESSAGE_HISTORY: true,
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        })

        const embed = new Discord.MessageEmbed()

        .setTitle("Canal Cerrado")
        .setDescription('El canal ha sido cerrado temporalmente para el rol con la id '+ rol    )
        .setColor("YELLOW")

        message.channel.send(embed)

    }
}
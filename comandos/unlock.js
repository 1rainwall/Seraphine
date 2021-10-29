const Discord = require('discord.js');

module.exports = {
    name: "unlock",
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
            SEND_MESSAGES: true,
            ADD_REACTIONS: true
        })

        const embed = new Discord.MessageEmbed()

        .setTitle("Canal Abierto uwu")
        .setDescription('El canal ha sido abiertonuevamente para el rol con la id '+ rol    )
        .setColor("YELLOW")

        message.channel.send(embed)

    }
}
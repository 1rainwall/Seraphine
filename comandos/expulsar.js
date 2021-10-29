const Discord = require('discord.js');

module.exports = {
    name: "expulsar",
    alias:[],
    descripcion: "",

    execute(client, message, args){

      var botperms = message.guild.me.hasPermission("KICK_MEMBERS")
      if (!botperms) return message.channel.send ("No tengo permisos para expulsar miembros")

      var perms = message.member.hasPermission("KICK_MEMBERS")
      if(!perms) return message.channel.send("No tienes permisos para usar ese comando!")
        
        const usuario = message.mentions.members.first()
        if(!usuario) return message.channel.send ("Debes mencionar a un usuario primero")

        const razon = args.slice(1).join(' ')
        if(!razon) return message.channel.send("Debes escribir una razon para expulsar a este usuario")

        message.guild.member(usuario).kick(razon);

        message.channel.send(`Se ha expulsado al usuario ${usuario} correctamente.\nRazon: ${razon}`)
        
    }
}
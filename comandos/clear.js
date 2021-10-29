const Discord = require('discord.js');

module.exports = {
    name: "cls",
    alias:[],
    descripcion: "",

    execute(client, message, args){

      const botperms = message.guild.me.hasPermission("MANAGE_MESSAGES")
      if(!botperms) return message.channel.send("No tengo permisos para eliminar mensajes")

      var perms = message.member.hasPermission("MANAGE_MESSAGES")
      if(!perms) return message.channel.send("No tienes permisos para enviar mensajes")

      const valor = parseInt(args[0]);
      if(!valor) return message.channel.send("Debes escribir una cantidad de mensajes que quieres que elimine :3 ")
      if(valor >= 100) return message.channel.send("No puedo eliminar mas de 99 mensajes a la vez >:c ")

      message.channel.bulkDelete(valor + 1);
      message.channel.send(`Se han eliminado **${valor}** mensajes correctamente!`)
        
      
    }
}
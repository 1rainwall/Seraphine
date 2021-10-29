const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const { readdirSync } = require('fs');
var prefix = "-"

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}


client.on('message', async (message) => {
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.author.bot)return;
    if(message.channel.type == "dm")return;
    
    const command = args.shift().toLowerCase();
    
      let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
    cmd.execute(client, message, args)
    
    
    }
    });

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
     if(message.author.bot)return;
     if(message.channel.type == "dm")return;
     if(!message.content.startsWith(prefix))return;

     const args = message.content.slice(prefix.length).trim().split(/ +/g)
     const command = args.shift().toLowerCase();
     
 {
     if(command === "ping"){
         return message.channel.send("El ping es de "+ Math.floor(client.ws.ping)+" ms'")
     }
 }
 

});
 
 const Distube = require('distube')
 client.distube = new Distube(client, {
   
   emitNewSongonly: true,
   searchSongs: false,
   leaveOnStop: false,
   leaveOnFinish: false,
   leaveOnEmpty: true

 })

 client.distube.on("addList", (message, queue, playlist) => message.channel.send(`Plalist\n**${playlist.name}** **${message.author}**`)
 )
 client.distube.on("addSong", (message, queue, song) => message.channel.send(`Agregado a la cola, **${song.name}**`)
 )

 client.distube.on("playSong", (message, queue, playsong) => message.channel.send(`Escuchando ahora: **${playsong.name}**`)
 )

 client.distube.on("playList", (message, queue, playsong) => message.channel.send(`Escuchando la playlist: **${plalist.name}**`)
 )

 client.distube.on('initQueue', (queue) => {
   queue.autoplay = false;
  
 })

 const mySecret = process.env['TOKEN']
 client.login(mySecret); 
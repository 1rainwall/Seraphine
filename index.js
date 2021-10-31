const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const { readdirSync } = require('fs');
const fse = require('fs-extra');
var prefix = "s!"

client.on("ready", () => {
  console.log("Estoy listo!");
});

client.on("message", (message) => {
 if(message.content.startsWith("ping")) {
   message.channel.send("pong!");
 }

});


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

 

 const { WelcomeImage } = require('zjuqn')


client.on('guildMemberAdd', async (member) => {
  const canal = member.guild.channels.cache.get("904448100251349023")
  if(!canal) return;

  const av = message.author.displayAvatarURL({ format: 'png'})
  
  const bg = "https://cdn.discordapp.com/attachments/904422192480141395/904447737406296115/sera.png"

const titleWel = "Bienvenido"

const colorWel = "ffff"

const data = await new WelcomeImage({
            token: "gibm34ZomJe573WS",
            background: bg,
            avatar: av,
            title: titleWel,
            color: colorWel,


})

const imagen = await data.obtener()

canal.send(imagen)

})

 client.login("OTAzMDE2NTY2NTI5MDY5MTM3.YXm1tg.fCyCHQIN1HXS2eZXyK_mt7LqlC4");
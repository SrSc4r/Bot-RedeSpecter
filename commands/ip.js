const util = require('minecraft-server-util');

const Discord = require('discord.js')


exports.run = (client,message,args) => {
	
if(cmd.toLowerCase().startsWith("s!ip")){

let guild = client.guilds.cache.get("826119689822404699");
  const string = '```'
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id
  if(cmd.toLowerCase().startsWith("s!ip")){
    if (message.guild.id === "826119689822404699")/*servidor principal*/{ 
      if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter"))/*cargo da equipe*/{
      if(ChannelID !== "826120645770608721")/*canal #comandos*/{
          let embed = new Discord.MessageEmbed()
  
     .setColor('#00ffff')
     .setAuthor(message.author.tag, message.author.displayAvatarURL())
     .setDescription(`Não é permitido o uso de comandos nesse canal. Utilize o <#826120645770608721>`)
     .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
     .setTimestamp();
  
    return message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
      };
  };
  }
}


util.status('redespecter.com') // port is default 25565
    .then((response) => {
        let embed = new Discord.MessageEmbed()
   .setColor('#00ffff')
   .setDescription(`**<:zminecraft:737105635421978646> | Informações do Specter**\n\n**Loja:** https://loja.redespecter.com/\n**IP:** redespecter.com\n\n**Status servidor <:zstatus_ligado:819600802271199232>**\nJogadores online: ${response.onlinePlayers}/${response.maxPlayers} \n\n\n`)
   .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
   .setTimestamp();

  message.channel.send(embed);
    })
    .catch((error) => {
      message.channel.send(
    new Discord.MessageEmbed()
   .setColor('#00ffff')

   .setDescription(`**<:zminecraft:737105635421978646> | Informações do Specter**\n\n**Loja:** https://loja.redespecter.com/\n**IP:** redespecter.com\n\n**Status servidor :zstatus_desligado:819600840825896971>**\nJogadores online: ${response.onlinePlayers}/${response.maxPlayers} \n\n\n`)
   .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
   .setTimestamp());
    });

    util.status('aegialeus.hostsquare.com', { port: 10002 }) // port is default 25565
    .then((response) => {
        let embed = new Discord.MessageEmbed()
    .setColor('#00ffff')
   .setDescription(`**<:zminecraft:737105635421978646> | RankUP Lure**\n\n**Status servidor <:zstatus_ligado:819600802271199232>**\nJogadores online: ${response.onlinePlayers}/${response.maxPlayers} \n\n\n`)


  message.author.send(embed);
    })
    .catch((error) => {
      message.author.send(  
    new Discord.MessageEmbed()
   .setColor('#00ffff')
   .setDescription(`**<:zminecraft:737105635421978646> | RankUP Lure**\n\n**Status servidor <:zstatus_desligado:819600840825896971>**\nJogadores online: 0/0 \n\n`)
);
    });
    util.status('aegialeus.hostsquare.com', { port: 10116 }) // port is default 25565
    .then((response) => {
        let embed = new Discord.MessageEmbed()
  .setColor('#00ffff')
   .setDescription(`**<:zminecraft:737105635421978646> | Factions Caribe**\n\n**Status servidor <:zstatus_ligado:819600802271199232>**\nJogadores online: ${response.onlinePlayers}/${response.maxPlayers} \n\n\n`)

  message.author.send(embed);
    })
    .catch((error) => {
      message.author.send(  
    new Discord.MessageEmbed()
   .setColor('#00ffff')
   .setDescription(`**<:zminecraft:737105635421978646> | Factions Caribe**\n\n**Status servidor <:zstatus_desligado:819600840825896971>**\nJogadores online: 0/0 \n\n`)
);
    });
    
}
}

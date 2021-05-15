const Discord = require('discord.js')

exports.run = (client,message,args) => {
  let guild = client.guilds.cache.get("826119689822404699");
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id
  if(cmd.toLowerCase().startsWith("s!jogadores")) {
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
  let embed = new Discord.MessageEmbed()
  .setColor('#00ffff')
   .setTitle(`MEMBROS NO SERVIDOR DO DISCORD`)
   .setDescription(`Olá,${message.author} o servidor Rede Specter | 2021 conta com membros totais de ${guild.memberCount} jogadores `)
   .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
   .setTimestamp()

  return message.channel.send(embed);
  }
}
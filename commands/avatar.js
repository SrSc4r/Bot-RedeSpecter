const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  if(cmd.toLowerCase().startsWith("s!avatar")){
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
    .setTitle(`Avatar de ${user.username}`) 
    .setImage(avatar) 
    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed); 
  };
}
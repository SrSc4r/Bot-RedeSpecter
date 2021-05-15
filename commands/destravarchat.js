const Discord = require('discord.js')

exports.run = async (client,message,args) => {
message.delete();
let guild = client.guilds.cache.get("826119689822404699"); 
let messageArray = message.content.split(" ");    
let cmd = messageArray[0];
if (cmd == "s!destravarchat"){
if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){
   return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor("#00ffff")
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
}


const role = guild.roles.cache.find(role => role.name === "「👥」Players");

if (!message.channel.permissionsFor(role.id).has('SEND_MESSAGES', false)){
  message.channel.updateOverwrite(role.id, { SEND_MESSAGES: true });
  message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Foi desbloqueado o envio de mensagens no canal.\n`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()

  );
  
} else {
    message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Este canal já está com as mensagens desbloqueadas.\n`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()

  );
}
}




}

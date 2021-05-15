const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();
  let userluke = client.users.cache.find(user => user.id === '757347805529636897');
  if (message.author.id == "757347805529636897")
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`Specter BOT`) 
    .setDescription(`Desligando...`)
    .setFooter(`©️ Desenvolvedor - ${userluke.tag}`, userluke.displayAvatarURL())
    .setTimestamp()).then(msg => client.destroy());
    

   else if (message.author.id == "757347805529636897")
   return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`Specter BOT`)  
    .setDescription(`Desligando...`)
    .setFooter(`©️ Desenvolvedor - ${userluke.tag}`, userluke.displayAvatarURL())
    .setTimestamp())
    .then(msg => client.destroy());

    else return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`Specter BOT`) 
    .setDescription(`Você não tem permissão para isso`)
    .setFooter(`©️ Desenvolvedor - ${userluke.tag}`, userluke.displayAvatarURL())
    .setTimestamp()).then(msg => client.destroy());
    
}
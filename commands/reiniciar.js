const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();
  let userluke = client.users.cache.find(user => user.id === '757347805529636897');
  if (message.author.id == "757347805529636897")
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`Specter BOT`) 
    .setDescription(`Reiniciando...`)
    .setFooter(`©️ Desenvolvedor - ${userluke.tag}`, userluke.displayAvatarURL())
    .setTimestamp())
    .then(() => {
  process.exit(1);
}).then(msg => msg.delete({timeout: 5000}));

   else if (message.author.id == "757347805529636897")
   return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`Specter BOT`) 
    .setDescription(`Reiniciando...`)
    .setFooter(`©️ Desenvolvedor - ${userluke.tag}`, userluke.displayAvatarURL())
    .setTimestamp())
    .then(() => {
  process.exit(1);
}).then(msg => msg.delete({timeout: 5000}));
   else if (message.author.id == "757347805529636897")
   return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`Specter BOT`) 
    .setDescription(`Reiniciando...`)
    .setFooter(`©️ Desenvolvedor - ${userluke.tag}`, userluke.displayAvatarURL())
    .setTimestamp())
    .then(() => {
  process.exit(1);
}).then(msg => msg.delete({timeout: 5000}));
    else return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`SpecterBOT`) 
    .setDescription(`Você não tem permissão para isso`)
    .setFooter(`©️ Desenvolvedor - ${userluke.tag}`, userluke.displayAvatarURL())
    .setTimestamp()).then(msg => msg.delete({timeout: 5000}));;
    
}
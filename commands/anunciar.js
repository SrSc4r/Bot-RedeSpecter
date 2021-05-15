const Discord = require('discord.js')

exports.run = async (client,message,args) => {
message.delete();
var anuncio = args.slice(0).join(" ");


if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){ 
   return message.channel.send(    
            new Discord.MessageEmbed()
            .setColor("#ff5555")
            .setDescription(`Sem permissão`)
            .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
}

if (!anuncio){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva as informações do anuncio. s!anunciar <anuncio>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}
  var canal = message.guild.channels.cache.find(ch => ch.id === "826120603362787418");

  message.channel.send(
  new Discord.MessageEmbed()

   .setColor('#00ffff')
   .setDescription(anuncio)
   .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
   .setTimestamp()); 

   await message.channel.send(`@everyone`).then(msg => msg.delete({timeout: 10}));

}

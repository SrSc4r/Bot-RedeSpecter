const Discord = require("discord.js");
const firstMessage = require('../ticket/first-message.js')

exports.run = async (client, message, args) => {
message.delete();
var contenttag = args[0];
var nome = args.slice(1).join(" ");
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id


  if(cmd.toLowerCase().startsWith("s!clan")){
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

if (!contenttag){   
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva a os dados do clan após o comando. s!clan <tag> <nome>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}

if (args[0].length > 3){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`A tag do clan não pode ser maior que 3 letras. s!clan <tag> <nome>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}


if (!nome){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva a os dados do clan após o comando. s!clan <tag> <nome>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}

  var canal = message.guild.channels.cache.find(ch => ch.id === "826120638036967504");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setDescription(`<:seta:826158298830077993> O clan **${contenttag} - ${nome}** confirmou presença no em nosso servidor`)
  );
  await message.channel.send(    
    new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Seu clan foi confirmado, verifique em <#826120638036967504>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}));

  const emojis = ["<a:spectergif:826158305197293639>"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}
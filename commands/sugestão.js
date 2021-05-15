const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();
const content = args.join(" ");
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id
  
if(cmd.toLowerCase().startsWith("s!sugestão")){
  if (message.guild.id === "826119689822404699"){
    if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){
    if(ChannelID !== "826120645770608721"){
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
if (!args[0]) {
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva a sugestão após o comando. /sugestão <texto>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
} else if (content.length > 1000) {
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`A sugestão não pode ter mais que 1000 caracteres`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}));
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "806993837515866143");
  const string = '```'
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`<:livro:780626384552198144> **Foi criado uma nova sugestão**`) 
    .setDescription(`${string}${content}${string} \n<:dc:780587352208179210> Sugerido por: ${message.author.tag}` )
    .setThumbnail(message.author.displayAvatarURL())
    .setFooter(`Avaliem essa sugestão com as reações!`, client.user.displayAvatarURL())
    .setTimestamp()
  );
  await message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Sugestão adicionada com sucesso, verifique em <#806993837515866143>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}));

  const emojis = ["<:tickyes:792110282331521034>", "<:tickno:792110295891050516>"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}
}
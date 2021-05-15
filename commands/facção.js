const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
var contenttag = args[1];
var server = args[0];
var nome = args.slice(2).join(" ");
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  var ChannelID = message.channel.id

if(cmd.toLowerCase().startsWith("s!facção")){
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

if (!server) {
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva a os dados da facção após o comando. /facção <servidor (F.Caribe)>  <tag> <nome>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}
if (!contenttag){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva a os dados da facção após o comando. /facção <servidor (F.Caribe)> <tag> <nome>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}

if (args[1].length > 3){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`A tag da facção não pode ser maior que 3 letras. /facção <servidor (F.Caribe)>  <tag> <nome>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}


if (!nome){
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Escreva a os dados da facção após o comando. /facção <servidor (F.Caribe)>  <tag> <nome>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
}

if (server == "F.Caribe"){
  var canal = message.guild.channels.cache.find(ch => ch.id === "826120639093801022");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setDescription(`<:seta:826158298830077993> A facção **${contenttag} - ${nome}** confirmou presença no **${server}**`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  );
  await message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Sua facção foi confirmada, verifique em <#826120639093801022>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}));

  const emojis = ["<:specter:826158146447474729>"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}  else {
  return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setDescription(`Verifique a ortografia do servidor ou coloque um de nossos servidores disponiveis. /facção <servidor (F.Caribe)>  <tag> <nome>`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 10000}))
  }
}
}
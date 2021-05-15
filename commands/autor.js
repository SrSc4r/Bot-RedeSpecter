const Discord = require('discord.js')

exports.run = async (client,message,args) => {
  var guild = client.guilds.cache.get("826119689822404699"); /*servidor principal discord*/
  let messageArray = message.content.split(" ");
  let light = client.users.cache.find(user => user.id === '757347805529636897');
  let cmd = messageArray[0];
  var ChannelID = message.channel.id

if(cmd.toLowerCase().startsWith("s!autor")){
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
   .setTitle('Desenvolvedor do BOT')
   .setThumbnail(light.displayAvatarURL())
   .setDescription(`\n\nO ${client.user}, foi desenvolvido diretamente pelo desenvolvedor <@757347805529636897>.\n\nSe houver alguma duvida relacionado ao desenvolvimento/bot, basta enviar uma mensagem em seu privado.`)
   .setFooter(`©️ Rede Specter | 2021`)

  return message.channel.send(embed);
};
}
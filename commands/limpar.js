const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
  if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")) 
    return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#ff5555')
    .setTitle(`**Limpar Chat**`) 
    .setDescription(`Você não tem permissão para isso`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
    ); //ISSO OFF PARA NÃO TER FLOOD
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 100)
    return message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`**Limpar Chat**`) 
    .setDescription(`Informe um número de 1 até 100, para excluir mensagens`)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  );
  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel.send(    
    new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle(`**Limpar Chat**`) 
    .addField(`Foram deletadas`,args[0] + ` mensagens por ` + message.author)
    .setFooter(`©️ Rede Specter | 2021`, client.user.displayAvatarURL())
    .setTimestamp()
  ).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};
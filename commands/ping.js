const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  let userluke = client.users.cache.find(user => user.id === '757347805529636897');
  if (!message.member.roles.cache.find(r => r.name === "「⚔️」Equipe RedeSpecter")){ 
    return message.channel.send(    
             new Discord.MessageEmbed()
             .setColor("#00ffff")
             .setDescription(`Sem permissão`)
             .setTimestamp()).then(msg => msg.delete({timeout: 10000}));
 }
  let embed = new Discord.MessageEmbed()

    .setColor('#00ffff')
   .setTitle(`Latencia Geral`) 
   .setDescription(`Latência da API: **${Math.round(client.ws.ping)}ms**`)
   .setFooter(`©️ Desenvolvedor - ${userluke.tag}`, userluke.displayAvatarURL())
   .setTimestamp();

  message.channel.send(embed);
};

